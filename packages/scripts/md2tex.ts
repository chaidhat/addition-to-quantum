import { readFileSync, writeFileSync } from "node:fs";

const HEADINGS = [
  "\\section",
  "\\subsection",
  "\\subsubsection",
  "\\paragraph",
  "\\subparagraph",
];

const esc = (s: string): string => {
  const SLASH = "\u0001", TILDE = "\u0002", CARET = "\u0003";
  return s
    .replace(/\\/g, SLASH)
    .replace(/~/g, TILDE)
    .replace(/\^/g, CARET)
    .replace(/([&%$#_{}])/g, "\\$1")
    .replaceAll(SLASH, "\\textbackslash{}")
    .replaceAll(TILDE, "\\textasciitilde{}")
    .replaceAll(CARET, "\\textasciicircum{}");
};

function inline(s: string): string {
  const tokens: string[] = [];
  const put = (tex: string) => `\u0000${tokens.push(tex) - 1}\u0000`;

  s = s.replace(/`([^`]+)`/g, (_, c) => put(`\\texttt{${esc(c)}}`));
  s = s.replace(/\[(.+?)\]\((.+?)\)/g, (_, t, u) => put(`\\href{${u}}{${esc(t)}}`));
  s = s.replace(/\*\*(.+?)\*\*/g, (_, c) => put(`\\textbf{${esc(c)}}`));
  s = s.replace(/\*(.+?)\*/g, (_, c) => put(`\\textit{${esc(c)}}`));
  s = s.replace(/(?<![A-Za-z0-9])_(.+?)_(?![A-Za-z0-9])/g, (_, c) => put(`\\textit{${esc(c)}}`));
  s = esc(s);
  return s.replace(/\u0000(\d+)\u0000/g, (_, n) => tokens[+n]);
}

function convert(md: string): string {
  const lines = md.split(/\r?\n/);
  const out: string[] = [];
  let list: "itemize" | "enumerate" | null = null;
  const closeList = () => {
    if (list) {
      out.push(`\\end{${list}}`);
      list = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^```/.test(line)) {
      closeList();
      const body: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
      out.push("\\begin{verbatim}", ...body, "\\end{verbatim}");
      continue;
    }

    const h = line.match(/^(#{1,5})\s+(.*)$/);
    if (h) {
      closeList();
      out.push(`${HEADINGS[h[1].length - 1]}{${inline(h[2])}}`);
      continue;
    }

    const ul = line.match(/^\s*[-*+]\s+(.*)$/);
    if (ul) {
      if (list !== "itemize") {
        closeList();
        out.push("\\begin{itemize}");
        list = "itemize";
      }
      out.push(`  \\item ${inline(ul[1])}`);
      continue;
    }

    const ol = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ol) {
      if (list !== "enumerate") {
        closeList();
        out.push("\\begin{enumerate}");
        list = "enumerate";
      }
      out.push(`  \\item ${inline(ol[1])}`);
      continue;
    }

    if (line.trim() === "") {
      closeList();
      out.push("");
      continue;
    }

    out.push(inline(line));
  }
  closeList();
  return out.join("\n");
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: md2tex <input.md> [output.tex]");
  process.exit(1);
}
const [inPath, outPath] = args;
const body = convert(readFileSync(inPath, "utf8"));
const doc = `\\documentclass[11pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath, amssymb}
\\usepackage{hyperref}
\\begin{document}
${body}
\\end{document}
`;

if (outPath) {
  writeFileSync(outPath, doc);
  console.error(`Wrote ${outPath}`);
} else {
  process.stdout.write(doc);
}
