import { readFileSync, writeFileSync } from "node:fs";

interface Section {
  level: "section" | "subsection";
  starred: boolean;
  title: string;
  label: string;
  startLine: number;
  endLine: number;
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

  const re = /\\(section|subsection)(\*)?\{([^{}]+)\}\s*\\label\{([^}]+)\}/g;
  const sections: Section[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    sections.push({
      level: m[1] as "section" | "subsection",
      starred: !!m[2],
      title: m[3].trim().replace(/\s+/g, " "),
      label: m[4],
      startLine: offsetToLine(m.index),
      endLine: lines.length,
    });
  }
  for (let i = 0; i < sections.length - 1; i++) {
    sections[i].endLine = sections[i + 1].startLine - 1;
  }
  return sections;
}

function sanitizeId(s: string): string {
  let id = s.replace(/[^A-Za-z0-9]/g, "_");
  if (/^[0-9]/.test(id)) id = "n_" + id;
  return id;
}

function escapeLabel(s: string): string {
  return s.replace(/"/g, "&quot;").replace(/[\[\]]/g, "");
}

function buildOrdered(file: string, opts: { summary: boolean; hideOrphans: boolean }): string {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const allSections = parseSections(text, lines);

  const subToParent = new Map<string, string>();
  let currentParent: string | null = null;
  for (const s of allSections) {
    if (s.level === "section") {
      currentParent = s.label;
      subToParent.set(s.label, s.label);
    } else {
      subToParent.set(s.label, currentParent ?? s.label);
    }
  }

  const sections = opts.summary
    ? allSections.filter(s => s.level === "section" && !s.starred)
    : allSections.filter(s => !s.starred);

  const labelToSection = new Map<string, Section>();
  for (const s of sections) labelToSection.set(s.label, s);

  const outgoing = new Map<string, Set<string>>();
  const incoming = new Map<string, Set<string>>();
  for (const s of sections) {
    outgoing.set(s.label, new Set());
    incoming.set(s.label, new Set());
  }

  const remap = (label: string): string | null => {
    if (opts.summary) {
      const p = subToParent.get(label);
      if (!p || !labelToSection.has(p)) return null;
      return p;
    }
    return labelToSection.has(label) ? label : null;
  };

  const refRe = /\\hyperref\[([^\]]+)\]/g;
  for (const s of allSections) {
    const src = remap(s.label);
    if (!src) continue;
    for (let i = s.startLine; i <= s.endLine && i <= lines.length; i++) {
      let m: RegExpExecArray | null;
      while ((m = refRe.exec(lines[i - 1])) !== null) {
        const tgt = remap(m[1]);
        if (!tgt || tgt === src) continue;
        outgoing.get(src)!.add(tgt);
        incoming.get(tgt)!.add(src);
      }
    }
  }

  const visible = (label: string) => {
    if (!opts.hideOrphans) return true;
    return outgoing.get(label)!.size > 0 || incoming.get(label)!.size > 0;
  };

  const visibleSections = sections.filter(s => visible(s.label));
  const sectionIdx = new Map<string, number>();
  visibleSections.forEach((s, i) => sectionIdx.set(s.label, i));

  const out: string[] = [];
  out.push("flowchart TD");
  out.push("  classDef section fill:#b6f0a3,stroke:#2d6f2d,stroke-width:2px,color:#000;");
  out.push("  classDef subsection fill:#cfe3ff,stroke:#3060a0,color:#000;");
  out.push("  classDef orphan fill:#eee,stroke:#aaa,color:#666;");
  out.push("");

  for (const s of visibleSections) {
    const isOrphan = outgoing.get(s.label)!.size === 0 && incoming.get(s.label)!.size === 0;
    const cls = isOrphan ? "orphan" : s.level;
    out.push(`  ${sanitizeId(s.label)}["${escapeLabel(s.title)}"]:::${cls}`);
  }
  out.push("");

  let linkIdx = 0;
  const chainIndices: number[] = [];
  for (let i = 0; i < visibleSections.length - 1; i++) {
    out.push(`  ${sanitizeId(visibleSections[i].label)} ~~~ ${sanitizeId(visibleSections[i + 1].label)}`);
    chainIndices.push(linkIdx++);
  }
  out.push("");

  const outOfOrderIndices: number[] = [];
  const inOrderIndices: number[] = [];
  let totalEdges = 0;
  for (const s of visibleSections) {
    const depIdx = sectionIdx.get(s.label)!;
    const dependentId = sanitizeId(s.label);
    for (const prereq of outgoing.get(s.label)!) {
      if (!visible(prereq)) continue;
      const preIdx = sectionIdx.get(prereq)!;
      out.push(`  ${dependentId} --> ${sanitizeId(prereq)}`);
      if (preIdx > depIdx) outOfOrderIndices.push(linkIdx);
      else inOrderIndices.push(linkIdx);
      linkIdx++;
      totalEdges++;
    }
  }
  out.push("");

  if (outOfOrderIndices.length > 0) {
    out.push(`  linkStyle ${outOfOrderIndices.join(",")} stroke:#e74c3c,stroke-width:2px`);
  }
  if (inOrderIndices.length > 0) {
    out.push(`  linkStyle ${inOrderIndices.join(",")} stroke:#444,stroke-width:1px`);
  }

  out.push("");
  out.push(`%% Sections: ${visibleSections.length}, edges: ${totalEdges}, out-of-order (downward, red): ${outOfOrderIndices.length}, in-order (upward, gray): ${inOrderIndices.length}`);
  return out.join("\n");
}

function buildPrereq(file: string, opts: { summary: boolean; hideOrphans: boolean }): string {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const allSections = parseSections(text, lines);

  const subToParent = new Map<string, string>();
  let currentParent: string | null = null;
  for (const s of allSections) {
    if (s.level === "section") {
      currentParent = s.label;
      subToParent.set(s.label, s.label);
    } else {
      subToParent.set(s.label, currentParent ?? s.label);
    }
  }

  const sections = opts.summary
    ? allSections.filter(s => s.level === "section" && !s.starred)
    : allSections.filter(s => !s.starred);

  const labelToSection = new Map<string, Section>();
  for (const s of sections) labelToSection.set(s.label, s);

  const outgoing = new Map<string, Set<string>>();
  const incoming = new Map<string, Set<string>>();
  for (const s of sections) {
    outgoing.set(s.label, new Set());
    incoming.set(s.label, new Set());
  }

  const remap = (label: string): string | null => {
    if (opts.summary) {
      const p = subToParent.get(label);
      if (!p || !labelToSection.has(p)) return null;
      return p;
    }
    return labelToSection.has(label) ? label : null;
  };

  const refRe = /\\hyperref\[([^\]]+)\]/g;
  for (const s of allSections) {
    const src = remap(s.label);
    if (!src) continue;
    for (let i = s.startLine; i <= s.endLine && i <= lines.length; i++) {
      let m: RegExpExecArray | null;
      while ((m = refRe.exec(lines[i - 1])) !== null) {
        const tgt = remap(m[1]);
        if (!tgt || tgt === src) continue;
        outgoing.get(src)!.add(tgt);
        incoming.get(tgt)!.add(src);
      }
    }
  }

  const visible = (label: string) => {
    if (!opts.hideOrphans) return true;
    return outgoing.get(label)!.size > 0 || incoming.get(label)!.size > 0;
  };

  const out: string[] = [];
  out.push("flowchart TD");
  out.push("  classDef section fill:#b6f0a3,stroke:#2d6f2d,stroke-width:2px,color:#000;");
  out.push("  classDef subsection fill:#cfe3ff,stroke:#3060a0,color:#000;");
  out.push("  classDef orphan fill:#eee,stroke:#aaa,color:#666;");
  out.push("");

  for (const s of sections) {
    if (!visible(s.label)) continue;
    const isOrphan = outgoing.get(s.label)!.size === 0 && incoming.get(s.label)!.size === 0;
    const cls = isOrphan ? "orphan" : s.level;
    out.push(`  ${sanitizeId(s.label)}["${escapeLabel(s.title)}"]:::${cls}`);
  }
  out.push("");

  let totalEdges = 0;
  for (const s of sections) {
    if (!visible(s.label)) continue;
    const dependentId = sanitizeId(s.label);
    for (const prereq of outgoing.get(s.label)!) {
      if (!visible(prereq)) continue;
      out.push(`  ${sanitizeId(prereq)} --> ${dependentId}`);
      totalEdges++;
    }
  }

  out.push("");
  out.push(`%% Sections: ${sections.length}, edges: ${totalEdges}`);
  return out.join("\n");
}

function buildZigzag(file: string): string {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const allSections = parseSections(text, lines);

  const subToParent = new Map<string, string>();
  let currentParent: string | null = null;
  for (const s of allSections) {
    if (s.level === "section") {
      currentParent = s.label;
      subToParent.set(s.label, s.label);
    } else {
      subToParent.set(s.label, currentParent ?? s.label);
    }
  }

  const sections = allSections.filter(s => s.level === "section" && !s.starred);
  const labelSet = new Set(sections.map(s => s.label));

  const outgoing = new Map<string, Set<string>>();
  for (const s of sections) outgoing.set(s.label, new Set());

  const refRe = /\\hyperref\[([^\]]+)\]/g;
  for (const s of allSections) {
    const src = subToParent.get(s.label);
    if (!src || !labelSet.has(src)) continue;
    for (let i = s.startLine; i <= s.endLine && i <= lines.length; i++) {
      let m: RegExpExecArray | null;
      while ((m = refRe.exec(lines[i - 1])) !== null) {
        const tgt = subToParent.get(m[1]);
        if (!tgt || !labelSet.has(tgt) || tgt === src) continue;
        outgoing.get(src)!.add(tgt);
      }
    }
  }

  const out: string[] = [];
  out.push("flowchart TD");
  out.push("  classDef section fill:#ffd1dc,stroke:#c24a6a,stroke-width:2px,color:#000;");
  out.push("  classDef ghost fill:none,stroke:none,color:#ffffff00;");
  out.push("");

  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const id = sanitizeId(s.label);
    const onRight = i % 2 === 1;
    out.push(`  subgraph r${i} [" "]`);
    out.push(`    direction LR`);
    if (onRight) {
      out.push(`    g${i}["                              "]:::ghost`);
      out.push(`    ${id}["${escapeLabel(s.title)}"]:::section`);
    } else {
      out.push(`    ${id}["${escapeLabel(s.title)}"]:::section`);
      out.push(`    g${i}["                              "]:::ghost`);
    }
    out.push(`  end`);
    out.push(`  style r${i} fill:none,stroke:none`);
  }
  out.push("");

  for (let i = 0; i < sections.length - 1; i++) {
    out.push(`  r${i} ~~~ r${i + 1}`);
  }
  out.push("");

  let totalEdges = 0;
  for (const s of sections) {
    const srcId = sanitizeId(s.label);
    for (const t of outgoing.get(s.label)!) {
      out.push(`  ${srcId} --> ${sanitizeId(t)}`);
      totalEdges++;
    }
  }

  out.push("");
  out.push(`%% Sections: ${sections.length}, edges: ${totalEdges}`);
  return out.join("\n");
}

function buildGraph(file: string, opts: { direction: string; hideOrphans: boolean; summary: boolean }): string {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const allSections = parseSections(text, lines);

  const subToParent = new Map<string, string>();
  let currentParent: string | null = null;
  for (const s of allSections) {
    if (s.level === "section") {
      currentParent = s.label;
      subToParent.set(s.label, s.label);
    } else {
      subToParent.set(s.label, currentParent ?? s.label);
    }
  }

  let sections: Section[];
  if (opts.summary) {
    sections = allSections.filter(s => s.level === "section");
  } else {
    sections = allSections;
  }

  const labelToSection = new Map<string, Section>();
  for (const s of sections) labelToSection.set(s.label, s);

  const outgoing = new Map<string, Set<string>>();
  const incoming = new Map<string, Set<string>>();
  for (const s of sections) {
    outgoing.set(s.label, new Set());
    incoming.set(s.label, new Set());
  }

  const remap = (label: string): string | null => {
    if (opts.summary) {
      const p = subToParent.get(label);
      if (!p || !labelToSection.has(p)) return null;
      return p;
    }
    return labelToSection.has(label) ? label : null;
  };

  const refRe = /\\hyperref\[([^\]]+)\]/g;
  for (const s of allSections) {
    const srcLabel = remap(s.label);
    if (!srcLabel) continue;
    for (let i = s.startLine; i <= s.endLine && i <= lines.length; i++) {
      const line = lines[i - 1];
      let m: RegExpExecArray | null;
      while ((m = refRe.exec(line)) !== null) {
        const tgtLabel = remap(m[1]);
        if (!tgtLabel) continue;
        if (tgtLabel === srcLabel) continue;
        outgoing.get(srcLabel)!.add(tgtLabel);
        incoming.get(tgtLabel)!.add(srcLabel);
      }
    }
  }

  const placed = new Set<string>();
  const layers: string[][] = [];

  const layer0: string[] = [];
  for (const s of sections) {
    if (incoming.get(s.label)!.size === 0) {
      layer0.push(s.label);
      placed.add(s.label);
    }
  }
  layers.push(layer0);

  while (true) {
    const next: string[] = [];
    for (const label of layers[layers.length - 1]) {
      const targets = [...outgoing.get(label)!].sort((a, b) => {
        const sa = labelToSection.get(a)!;
        const sb = labelToSection.get(b)!;
        return sa.startLine - sb.startLine;
      });
      for (const t of targets) {
        if (!placed.has(t)) {
          next.push(t);
          placed.add(t);
        }
      }
    }
    if (next.length === 0) break;
    layers.push(next);
  }

  const remaining = sections.filter(s => !placed.has(s.label));
  if (remaining.length > 0) {
    const cycleLayer: string[] = [];
    for (const s of remaining) {
      cycleLayer.push(s.label);
      placed.add(s.label);
    }
    layers.push(cycleLayer);
  }

  const out: string[] = [];
  out.push(`flowchart ${opts.direction}`);
  out.push(`  classDef section fill:#ffd1dc,stroke:#c24a6a,stroke-width:2px,color:#000;`);
  out.push(`  classDef subsection fill:#cfe3ff,stroke:#3060a0,color:#000;`);
  out.push(`  classDef orphan fill:#eee,stroke:#aaa,color:#666;`);
  out.push("");

  for (let li = 0; li < layers.length; li++) {
    const layerLabels = layers[li];
    const visible = layerLabels.filter(l => {
      if (!opts.hideOrphans) return true;
      const isOrphan = outgoing.get(l)!.size === 0 && incoming.get(l)!.size === 0;
      return !isOrphan;
    });
    if (visible.length === 0) continue;

    out.push(`  subgraph L${li} ["Layer ${li} (${visible.length})"]`);
    out.push(`    direction TB`);
    for (const label of visible) {
      const s = labelToSection.get(label)!;
      const isOrphan = outgoing.get(label)!.size === 0 && incoming.get(label)!.size === 0;
      const cls = isOrphan ? "orphan" : s.level;
      out.push(`    ${sanitizeId(label)}["${escapeLabel(s.title)}"]:::${cls}`);
    }
    for (let k = 0; k < visible.length - 1; k++) {
      out.push(`    ${sanitizeId(visible[k])} ~~~ ${sanitizeId(visible[k + 1])}`);
    }
    out.push(`  end`);
    out.push("");
  }

  for (const s of sections) {
    if (opts.hideOrphans) {
      const isOrphan = outgoing.get(s.label)!.size === 0 && incoming.get(s.label)!.size === 0;
      if (isOrphan) continue;
    }
    const srcId = sanitizeId(s.label);
    for (const t of outgoing.get(s.label)!) {
      out.push(`  ${srcId} --> ${sanitizeId(t)}`);
    }
  }

  let totalEdges = 0;
  for (const set of outgoing.values()) totalEdges += set.size;
  out.push("");
  out.push(`%% Sections: ${sections.length}, edges: ${totalEdges}, layers: ${layers.length}`);

  return out.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: npm run graph <file.tex> [--out <out.mmd>] [--prereq] [--zigzag] [--layered] [--full] [--hide-orphans] [--lr]");
    console.error("  (default)       document-order: section 1 at top, section N at bottom; upward arrows = out-of-order");
    console.error("  --prereq        prereq tree: foundations at top, advanced topics at bottom");
    console.error("  --zigzag        document-order alternating layout");
    console.error("  --layered       BFS-layered topological view");
    console.error("  --full          show all subsections instead of collapsing");
    console.error("  --hide-orphans  hide nodes with no in/out edges");
    console.error("  --lr            (with --layered) left-to-right instead of top-down");
    process.exit(1);
  }
  const file = args[0];
  let direction = "TD";
  let outPath: string | null = null;
  let hideOrphans = false;
  let summary = true;
  let mode: "ordered" | "prereq" | "zigzag" | "layered" = "ordered";
  for (let i = 1; i < args.length; i++) {
    if (args[i] === "--lr") direction = "LR";
    else if (args[i] === "--td") direction = "TD";
    else if (args[i] === "--hide-orphans") hideOrphans = true;
    else if (args[i] === "--full") summary = false;
    else if (args[i] === "--layered") mode = "layered";
    else if (args[i] === "--zigzag") mode = "zigzag";
    else if (args[i] === "--prereq") mode = "prereq";
    else if (args[i] === "--ordered") mode = "ordered";
    else if (args[i] === "--out" && i + 1 < args.length) {
      outPath = args[++i];
    }
  }

  const mmd =
    mode === "ordered" ? buildOrdered(file, { summary, hideOrphans }) :
    mode === "prereq"  ? buildPrereq(file, { summary, hideOrphans }) :
    mode === "zigzag"  ? buildZigzag(file) :
                         buildGraph(file, { direction, hideOrphans, summary });

  if (outPath) {
    writeFileSync(outPath, mmd + "\n");
    console.error(`Wrote ${outPath}`);
  } else {
    process.stdout.write(mmd + "\n");
  }
}

main();
