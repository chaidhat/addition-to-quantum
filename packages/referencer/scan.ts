import { readFileSync } from "node:fs";

interface Section {
  level: "section" | "subsection";
  title: string;
  label: string;
  startLine: number;
  endLine: number;
  terms: string[];
}

interface Match {
  line: number;
  term: string;
  targetLabel: string;
  targetTitle: string;
  targetLevel: "section" | "subsection";
  context: string;
}

const STOPWORDS = new Set([
  "let", "in", "set", "matrix", "vector", "function",
]);

function generateTerms(title: string): string[] {
  const lower = title.toLowerCase().trim().replace(/\s+/g, " ");
  const terms = new Set<string>([lower]);

  if (lower.endsWith("ies")) {
    terms.add(lower.slice(0, -3) + "y");
  } else if (lower.endsWith("ses")) {
    terms.add(lower.slice(0, -2));
  } else if (lower.endsWith("s") && !lower.endsWith("ss")) {
    terms.add(lower.slice(0, -1));
  } else if (lower.endsWith("y")) {
    terms.add(lower.slice(0, -1) + "ies");
    terms.add(lower + "s");
  } else {
    terms.add(lower + "s");
    terms.add(lower + "es");
  }

  return [...terms].sort((a, b) => b.length - a.length);
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripIgnoredRegions(line: string): string {
  let out = line;
  out = out.replace(/\\hyperref\[[^\]]*\]\{[^}]*\}/g, m => " ".repeat(m.length));
  out = out.replace(/\\href\{[^}]*\}\{[^}]*\}/g, m => " ".repeat(m.length));
  out = out.replace(/\\(label|cite|ref|eqref|pageref|autoref)\{[^}]*\}/g, m => " ".repeat(m.length));
  out = out.replace(/\$[^$]*\$/g, m => " ".repeat(m.length));
  out = out.replace(/\\\([^)]*\\\)/g, m => " ".repeat(m.length));
  out = out.replace(/%.*$/g, m => " ".repeat(m.length));
  return out;
}

function buildMathMask(lines: string[]): boolean[] {
  const mask: boolean[] = new Array(lines.length).fill(false);
  let depth = 0;
  const openRe = /\\begin\{(?:gather|equation|align|multline|displaymath|eqnarray)\*?\}|\\\[/g;
  const closeRe = /\\end\{(?:gather|equation|align|multline|displaymath|eqnarray)\*?\}|\\\]/g;
  for (let i = 0; i < lines.length; i++) {
    const opens = (lines[i].match(openRe) || []).length;
    const closes = (lines[i].match(closeRe) || []).length;
    if (depth > 0 || opens > 0 || closes > 0) mask[i] = true;
    depth += opens - closes;
    if (depth < 0) depth = 0;
  }
  return mask;
}

function parseSections(text: string, lines: string[]): Section[] {
  const lineStarts = [0];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "\n") lineStarts.push(i + 1);
  }
  const offsetToLine = (off: number) => {
    let lo = 0, hi = lineStarts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >>> 1;
      if (lineStarts[mid] <= off) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };

  const re = /\\(section|subsection)\*?\{([^{}]+)\}\s*\\label\{([^}]+)\}/g;
  const sections: Section[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const level = m[1] as "section" | "subsection";
    const title = m[2].trim().replace(/\s+/g, " ");
    const label = m[3];
    sections.push({
      level,
      title,
      label,
      startLine: offsetToLine(m.index),
      endLine: lines.length,
      terms: generateTerms(title),
    });
  }
  for (let i = 0; i < sections.length - 1; i++) {
    sections[i].endLine = sections[i + 1].startLine - 1;
  }
  return sections;
}

function scanSection(section: Section, allSections: Section[], lines: string[], mathMask: boolean[]): Match[] {
  const matches: Match[] = [];
  const seenTargets = new Set<string>();

  // Pre-scan: find labels that already have \hyperref[label]{...} or \href anywhere in this section
  const alreadyLinked = new Set<string>();
  for (let absLine = section.startLine; absLine <= section.endLine; absLine++) {
    const idx = absLine - 1;
    if (idx < 0 || idx >= lines.length) continue;
    const raw = lines[idx];
    const re = /\\hyperref\[([^\]]+)\]/g;
    let mm: RegExpExecArray | null;
    while ((mm = re.exec(raw)) !== null) {
      alreadyLinked.add(mm[1]);
    }
  }

  for (let absLine = section.startLine; absLine <= section.endLine; absLine++) {
    const idx = absLine - 1;
    if (idx < 0 || idx >= lines.length) continue;
    const raw = lines[idx];
    if (/^\\(section|subsection)\*?\{/.test(raw)) continue;
    if (mathMask[idx]) continue;

    const cleaned = stripIgnoredRegions(raw).toLowerCase();
    if (!cleaned.trim()) continue;

    for (const target of allSections) {
      if (target.label === section.label) continue;
      if (seenTargets.has(target.label)) continue;
      if (alreadyLinked.has(target.label)) continue;

      for (const term of target.terms) {
        if (STOPWORDS.has(term)) continue;
        const re = new RegExp(`(?<![A-Za-z0-9])${escapeRegex(term)}(?![A-Za-z0-9])`, "i");
        if (re.test(cleaned)) {
          matches.push({
            line: absLine,
            term,
            targetLabel: target.label,
            targetTitle: target.title,
            targetLevel: target.level,
            context: raw.trim().slice(0, 140),
          });
          seenTargets.add(target.label);
          break;
        }
      }
    }
  }

  matches.sort((a, b) => a.line - b.line);
  return matches;
}

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error("Usage: npm run scan <file.tex>");
    process.exit(1);
  }
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const mathMask = buildMathMask(lines);
  const sections = parseSections(text, lines);

  console.log(`# Reference scan for ${file}`);
  console.log(`# Sections found: ${sections.length}`);
  console.log("");

  let totalMatches = 0;
  for (const section of sections) {
    const matches = scanSection(section, sections, lines, mathMask);
    if (matches.length === 0) continue;
    totalMatches += matches.length;

    console.log(`\n=== ${section.level} "${section.title}" (L${section.startLine}-${section.endLine}) [${section.label}] ===`);
    for (const m of matches) {
      console.log(`  L${m.line}  "${m.term}"  →  ${m.targetLevel} "${m.targetTitle}" [${m.targetLabel}]`);
      console.log(`         ${m.context}`);
    }
  }

  console.log(`\n# Total candidates: ${totalMatches}`);
}

main();
