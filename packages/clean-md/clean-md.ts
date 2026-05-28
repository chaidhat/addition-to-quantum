/**
 * clean-md — normalise markdown files so block math renders correctly on GitHub.
 *
 * GitHub's KaTeX-based renderer only recognises `$$…$$` as block math when the
 * delimiters are separated from surrounding paragraph text by blank lines.
 * Obsidian is more permissive and renders them either way, so files authored
 * in Obsidian routinely render broken on GitHub.
 *
 * This script walks `md/` and applies two normalisations:
 *
 *   1. Block-math spacing — for every line whose trimmed content is exactly
 *      `$$`, ensure:
 *        - a blank line immediately BEFORE every opening `$$` (unless it's at
 *          the start of the file or already preceded by a blank line),
 *        - a blank line immediately AFTER every closing `$$` (unless it's at
 *          the end of the file or already followed by a blank line).
 *
 *   2. Thin-space removal — collapse every run of the LaTeX `\;` thick-space
 *      command (along with any spaces hugging it) down to a single space.
 *      These are authored in Obsidian for cosmetic kerning but add noise; the
 *      command is unambiguous (it never occurs in prose) so the replacement is
 *      safe to apply across the whole file, not just inside math.
 *
 * The transformation is idempotent: running it twice produces the same output
 * as running it once. It does not touch inline math (`$…$`), nor block math
 * written on a single line as `$$ … $$`.
 *
 * Usage:
 *   node --experimental-strip-types packages/clean-md/clean-md.ts          # apply
 *   node --experimental-strip-types packages/clean-md/clean-md.ts --dry-run # preview
 *   node --experimental-strip-types packages/clean-md/clean-md.ts --check   # exit 1 if any file needs cleaning
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

interface Options {
  dryRun: boolean;
  check: boolean;
  root: string;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) {
      walk(p, out);
    } else if (s.isFile() && entry.endsWith(".md")) {
      out.push(p);
    }
  }
  return out;
}

/**
 * Collapse every run of the LaTeX `\;` thick-space command — together with any
 * spaces directly adjacent to it — down to a single space.
 *
 *   `a \;\; b`        -> `a b`
 *   `x \;\leftrightarrow\; y` -> `x \leftrightarrow y`
 *
 * `\;` is a control sequence that only appears in math, so a whole-file replace
 * is safe; prose never contains a literal backslash-semicolon.
 */
function stripThinSpaces(input: string): string {
  return input.replace(/(?: *\\;)+ */g, " ");
}

function isBlockDelimiter(line: string): boolean {
  return line.trim() === "$$";
}

function isBlank(line: string | undefined): boolean {
  return line === undefined || line.trim() === "";
}

/**
 * Ensure every `$$` block-math delimiter is surrounded by blank lines.
 *
 * Tracks open/close state by toggling on each standalone `$$` line — the
 * first one opens a block, the next closes it, and so on.
 */
function cleanMath(input: string): string {
  // Preserve trailing-newline state — most editors save with a final `\n`
  // and stripping it would create a spurious diff.
  const hadTrailingNewline = input.endsWith("\n");
  const lines = input.replace(/\n$/, "").split("\n");

  const out: string[] = [];
  let inBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!isBlockDelimiter(line)) {
      out.push(line);
      continue;
    }

    if (!inBlock) {
      // Opening `$$`: ensure the previous emitted line is blank (or we're at the start).
      if (out.length > 0 && !isBlank(out[out.length - 1])) {
        out.push("");
      }
      out.push(line);
      inBlock = true;
    } else {
      // Closing `$$`: emit it, then ensure the next source line is blank (or we're at the end).
      out.push(line);
      const next = lines[i + 1];
      if (next !== undefined && !isBlank(next)) {
        out.push("");
      }
      inBlock = false;
    }
  }

  if (inBlock) {
    // Odd number of `$$` markers — leave it alone and warn upstream.
    // Returning the original input means we never half-edit a malformed file.
    return input;
  }

  let result = out.join("\n");
  if (hadTrailingNewline) result += "\n";
  return result;
}

function parseArgs(argv: string[]): Options {
  return {
    dryRun: argv.includes("--dry-run"),
    check: argv.includes("--check"),
    root: join(process.cwd(), "md"),
  };
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  const files = walk(opts.root);

  const changedFiles: string[] = [];
  const unbalanced: string[] = [];

  for (const file of files) {
    const before = readFileSync(file, "utf8");

    // Detect unbalanced `$$` markers — these are likely typos and worth flagging.
    const delimiterCount = before
      .split("\n")
      .filter((l) => l.trim() === "$$").length;
    if (delimiterCount % 2 !== 0) {
      unbalanced.push(relative(process.cwd(), file));
      continue;
    }

    const after = cleanMath(stripThinSpaces(before));
    if (before === after) continue;

    changedFiles.push(relative(process.cwd(), file));
    if (!opts.dryRun && !opts.check) {
      writeFileSync(file, after, "utf8");
    }
  }

  for (const f of unbalanced) {
    console.warn(`⚠  skipping ${f} — odd number of \`$$\` delimiters`);
  }

  if (opts.check) {
    if (changedFiles.length > 0) {
      console.log(`${changedFiles.length} file(s) need cleaning:`);
      for (const f of changedFiles) console.log(`  ${f}`);
      process.exit(1);
    } else {
      console.log(`all ${files.length} files clean`);
      process.exit(0);
    }
  }

  const verb = opts.dryRun ? "would clean" : "cleaned";
  console.log(`${verb} ${changedFiles.length} of ${files.length} files`);
  if (changedFiles.length > 0) {
    for (const f of changedFiles) console.log(`  ${f}`);
  }
}

main();
