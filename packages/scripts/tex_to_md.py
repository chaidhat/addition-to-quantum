#!/usr/bin/env python3
r"""Convert main.tex into a tree of GitHub-flavored markdown files for
Obsidian / GitHub viewing.

Layout:
- One folder per \section, prefixed `NN-` for ordering.
- One file per \subsection inside the folder.
- A section with subsections gets a `<section-slug>.md` for the intro
  (content between the \section header and the first \subsection),
  matching the folder's slug.
- A section with no subsections produces a single `<section-slug>.md`
  in its folder.
- Front matter before the first \section goes to `preface.md` at root.

Filenames use the LaTeX \label (when present) so they match the
cross-reference targets used in [text](#label) links. Those links are
rewritten to Obsidian wikilinks `[[target|text]]` (or `[[target]]` when
text matches the target).

Output starts from `gfm+tex_math_dollars` and is post-processed so that:
  - Display math uses $$...$$ (paragraph-separated by blank lines).
  - Inline math uses $...$ (no backticks).
  - Tables are GFM pipe tables.
  - Underlines come out as <u>…</u>, which we strip from link text.

Because GFM output strips the `{#label}` attributes, we recover the
label for each header by scanning the original main.tex in order and
zipping the result with the headers we see in the markdown.

Usage:
    python3 tex_to_md.py [output_dir]

Default output dir: ./md
"""
from __future__ import annotations

import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TEX = ROOT / "main.tex"


def run_pandoc(tex_path: Path) -> str:
    result = subprocess.run(
        [
            "pandoc",
            str(tex_path),
            "-f", "latex",
            "-t", "gfm+tex_math_dollars",
            "--wrap=preserve",
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    return result.stdout


_SLUG_RE = re.compile(r"[^a-z0-9]+")


def slugify(text: str) -> str:
    text = text.lower()
    text = _SLUG_RE.sub("-", text).strip("-")
    return text or "untitled"


# Find \section / \subsection / \subsubsection (optionally starred), the
# title in braces, and optionally a \label{...} that immediately
# follows (possibly on the next line).
_TEX_HEADER_RE = re.compile(
    r"\\(section|subsection|subsubsection)(\*?)\s*"
    r"\{([^{}]*)\}\s*"
    r"(?:\\label\{([^}]+)\})?",
    re.DOTALL,
)
_LEVEL_OF = {"section": 1, "subsection": 2, "subsubsection": 3}


def parse_tex_headers(tex: str) -> list[dict]:
    """Return an ordered list of {level, title, label} for every
    \\section / \\subsection / \\subsubsection in the TeX body."""
    # Strip everything before \begin{document} so preamble macros that
    # use \section etc. don't trip us up.
    begin = tex.find(r"\begin{document}")
    body = tex[begin:] if begin >= 0 else tex
    headers = []
    for m in _TEX_HEADER_RE.finditer(body):
        kind, _starred, title, label = m.groups()
        headers.append({
            "level": _LEVEL_OF[kind],
            "title": " ".join(title.split()),  # collapse whitespace
            "label": label,
        })
    return headers


# Pull the trailing `{#id …}` attribute off a markdown header line,
# even though gfm shouldn't emit one — keep it robust just in case.
_MD_HEADER_RE = re.compile(r"^(#{1,6})\s+(.*?)\s*$")


def parse_md_header(line: str) -> tuple[int, str] | None:
    m = _MD_HEADER_RE.match(line)
    if not m:
        return None
    return len(m.group(1)), m.group(2).strip()


def attach_labels(md: str, tex_headers: list[dict]) -> tuple[
    str, list[dict]
]:
    """Walk the markdown line by line, matching each `#+` header to the
    next TeX header of the same level. Returns the markdown unchanged
    and a list of (level, title, label, line_index)."""
    out_headers = []
    queue = list(tex_headers)
    for i, line in enumerate(md.splitlines()):
        parsed = parse_md_header(line)
        if not parsed:
            continue
        level, title = parsed
        # Pop the next TeX header at this level (skipping mismatches
        # so we stay resilient if pandoc inserts a stray header).
        chosen = None
        while queue:
            cand = queue[0]
            if cand["level"] == level:
                chosen = queue.pop(0)
                break
            # Levels don't match: pandoc may have skipped one. Move on.
            queue.pop(0)
        label = chosen["label"] if chosen else None
        out_headers.append({
            "level": level, "title": title, "label": label, "line": i,
        })
    return md, out_headers


def split_markdown(
    md: str, headers: list[dict]
) -> tuple[str, list[dict]]:
    """Use the header annotations to split markdown into preface +
    sections (each with intro + subsections). Subsubsections stay
    inline as `### Title` inside whichever file they appear in."""
    lines = md.splitlines()
    # Filter to just level-1 and level-2 headers, since those drive the
    # file layout. Level-3 stay inline.
    splits = [h for h in headers if h["level"] in (1, 2)]

    preface_lines: list[str] = []
    sections: list[dict] = []
    current_section: dict | None = None
    current_sub: dict | None = None
    buffer: list[str] = []

    def flush() -> None:
        nonlocal buffer
        text = "\n".join(buffer).strip("\n")
        if current_sub is not None:
            current_sub["body"] = text
        elif current_section is not None:
            current_section["intro"] = text
        else:
            preface_lines.extend(buffer)
        buffer = []

    split_idx = 0
    for i, line in enumerate(lines):
        is_split = (
            split_idx < len(splits) and splits[split_idx]["line"] == i
        )
        if is_split:
            h = splits[split_idx]
            split_idx += 1
            flush()
            if h["level"] == 1:
                current_sub = None
                current_section = {
                    "title": h["title"],
                    "label": h["label"],
                    "intro": "",
                    "subsections": [],
                }
                sections.append(current_section)
            else:  # level 2
                if current_section is None:
                    current_section = {
                        "title": "Untitled",
                        "label": None,
                        "intro": "",
                        "subsections": [],
                    }
                    sections.append(current_section)
                current_sub = {
                    "title": h["title"],
                    "label": h["label"],
                    "body": "",
                }
                current_section["subsections"].append(current_sub)
            # Skip the header line itself; the title goes into the
            # file via write_file().
            continue
        buffer.append(line)
    flush()

    preface = "\n".join(preface_lines).strip("\n")
    return preface, sections


def pick_slug(label: str | None, title: str, taken: set[str]) -> str:
    """Choose a unique filename slug. Prefer the LaTeX label."""
    base = label if label else slugify(title)
    base = base or "untitled"
    slug = base
    i = 2
    while slug in taken:
        slug = f"{base}-{i}"
        i += 1
    taken.add(slug)
    return slug


# Strip pandoc-emitted underline wrappers in both flavors.
_UNDERLINE_RE = re.compile(
    r'<u>(.*?)</u>|<span class="underline">(.*?)</span>',
    re.DOTALL,
)


def _strip_underline(text: str) -> str:
    return _UNDERLINE_RE.sub(lambda m: m.group(1) or m.group(2), text)


_FENCE_OPEN_RE = re.compile(r"^\s*```\s*math\s*$")
_FENCE_CLOSE_RE = re.compile(r"^\s*```\s*$")
_INLINE_MATH_RE = re.compile(r"\$`([^`\n]+)`\$")


def normalize_math(text: str) -> str:
    """Convert pandoc's gfm math output to plain TeX-style markdown:
    ```math fences become $$...$$ blocks separated by blank lines, and
    $`...`$ inline math becomes $...$."""
    lines = text.split("\n")
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if _FENCE_OPEN_RE.match(line):
            j = i + 1
            while j < len(lines) and not _FENCE_CLOSE_RE.match(lines[j]):
                j += 1
            math_content = lines[i + 1:j]
            if out and out[-1].strip() != "":
                out.append("")
            out.append("$$")
            out.extend(math_content)
            out.append("$$")
            next_idx = j + 1
            if next_idx < len(lines) and lines[next_idx].strip() != "":
                out.append("")
            i = next_idx
            continue
        out.append(line)
        i += 1
    joined = "\n".join(out)
    return _INLINE_MATH_RE.sub(r"$\1$", joined)


# Match a markdown link: [text](target). Text may contain nested
# brackets at one level (e.g. `[<u>x</u>]`); target excludes whitespace
# and parentheses.
_LINK_RE = re.compile(r"\[((?:[^\[\]]|\[[^\[\]]*\])*?)\]\(([^()\s]+)\)")


def _norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", s.lower())


def transform_links(text: str, label_to_slug: dict[str, str]) -> str:
    """Strip underline wrappers; rewrite #-anchor links as Obsidian
    wikilinks. External links keep their markdown form."""
    text = _strip_underline(text)

    def repl(m: re.Match) -> str:
        link_text = _strip_underline(m.group(1)).strip()
        target = m.group(2)
        if target.startswith("#"):
            label = target[1:]
            slug = label_to_slug.get(label, label)
            if _norm(link_text) == _norm(slug) or not link_text:
                return f"[[{slug}]]"
            return f"[[{slug}|{link_text}]]"
        return f"[{link_text}]({target})"

    return _LINK_RE.sub(repl, text)


def write_file(path: Path, title: str, body: str) -> None:
    body = body.strip("\n")
    content = f"# {title}\n\n{body}\n" if body else f"# {title}\n"
    path.write_text(content)


def main(argv: list[str]) -> int:
    out_dir = Path(argv[1]) if len(argv) > 1 else ROOT / "md"

    if not TEX.exists():
        print(f"error: {TEX} not found", file=sys.stderr)
        return 1

    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    print(f"Running pandoc on {TEX}...")
    md = run_pandoc(TEX)
    md = normalize_math(md)
    tex_headers = parse_tex_headers(TEX.read_text())
    md, headers = attach_labels(md, tex_headers)

    preface, sections = split_markdown(md, headers)

    # Assign a unique filename slug for every header.
    taken: set[str] = set()
    preface_slug = pick_slug(None, "preface", taken) if preface.strip() else None
    for sec in sections:
        sec["slug"] = pick_slug(sec["label"], sec["title"], taken)
        for sub in sec["subsections"]:
            sub["slug"] = pick_slug(sub["label"], sub["title"], taken)

    # Build label → slug map for cross-reference rewriting.
    label_to_slug: dict[str, str] = {}
    for sec in sections:
        if sec["label"]:
            label_to_slug[sec["label"]] = sec["slug"]
        for sub in sec["subsections"]:
            if sub["label"]:
                label_to_slug[sub["label"]] = sub["slug"]

    # Write files with link rewriting.
    if preface_slug:
        body = transform_links(preface.strip(), label_to_slug)
        (out_dir / f"{preface_slug}.md").write_text(body + "\n")

    for idx, sec in enumerate(sections, start=1):
        folder = out_dir / f"{idx:02d}-{sec['slug']}"
        folder.mkdir()

        if sec["subsections"]:
            if sec["intro"].strip():
                body = transform_links(sec["intro"], label_to_slug)
                write_file(folder / f"{sec['slug']}.md", sec["title"], body)
            for sub in sec["subsections"]:
                body = transform_links(sub["body"], label_to_slug)
                write_file(folder / f"{sub['slug']}.md", sub["title"], body)
        else:
            body = transform_links(sec["intro"], label_to_slug)
            write_file(folder / f"{sec['slug']}.md", sec["title"], body)

    total_subs = sum(len(s["subsections"]) for s in sections)
    print(
        f"Wrote {len(sections)} sections "
        f"({total_subs} subsections, {len(label_to_slug)} labels) "
        f"to {out_dir}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
