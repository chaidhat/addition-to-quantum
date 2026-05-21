#!/usr/bin/env python3
r"""Convert main.tex into a tree of markdown files for Obsidian.

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

The custom \hyperref macro in the source wraps link text in \underline,
which pandoc emits as <span class="underline">…</span>. We strip those.

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
            "-t", "markdown-raw_tex-smart-fenced_divs-bracketed_spans",
            "--wrap=preserve",
            "--markdown-headings=atx",
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


# Match `# Title` and `## Title`, optionally followed by `{#label …}`.
_HEADER_RE = re.compile(r"^(#{1,6})\s+(.*?)(?:\s+\{([^{}]*)\})?\s*$")
# Pull `#id` out of pandoc attribute brace contents.
_ID_IN_ATTR_RE = re.compile(r"#([\w:-]+)")


def parse_header(line: str) -> tuple[int, str, str | None] | None:
    """Return (level, title, label) if `line` is a markdown header."""
    m = _HEADER_RE.match(line)
    if not m:
        return None
    level = len(m.group(1))
    title = m.group(2).strip()
    label = None
    if m.group(3):
        id_match = _ID_IN_ATTR_RE.search(m.group(3))
        if id_match:
            label = id_match.group(1)
    return level, title, label


def split_markdown(md: str) -> tuple[str, list[dict]]:
    """Return (preface, sections).

    Each section dict has: title, label, intro, subsections (list of
    dicts with: title, label, body).
    """
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

    for line in md.splitlines():
        parsed = parse_header(line)
        if parsed and parsed[0] == 1:
            flush()
            _, title, label = parsed
            current_sub = None
            current_section = {
                "title": title,
                "label": label,
                "intro": "",
                "subsections": [],
            }
            sections.append(current_section)
        elif parsed and parsed[0] == 2:
            flush()
            _, title, label = parsed
            if current_section is None:
                current_section = {
                    "title": "Untitled",
                    "label": None,
                    "intro": "",
                    "subsections": [],
                }
                sections.append(current_section)
            current_sub = {"title": title, "label": label, "body": ""}
            current_section["subsections"].append(current_sub)
        else:
            buffer.append(line)
    flush()

    preface = "\n".join(preface_lines).strip("\n")
    return preface, sections


def pick_slug(label: str | None, title: str, taken: set[str]) -> str:
    """Choose a filename slug. Prefers the LaTeX label; falls back to
    a slugified title. Disambiguates against `taken`."""
    base = label if label else slugify(title)
    base = base or "untitled"
    slug = base
    i = 2
    while slug in taken:
        slug = f"{base}-{i}"
        i += 1
    taken.add(slug)
    return slug


_UNDERLINE_SPAN_RE = re.compile(
    r'<span class="underline">(.*?)</span>', re.DOTALL
)
# Match a markdown link: [text](target). Text may contain balanced
# brackets; target has no spaces and no parens.
_LINK_RE = re.compile(r"\[((?:[^\[\]]|\[[^\[\]]*\])*?)\]\(([^()\s]+)\)")


def _norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", s.lower())


def transform_links(text: str, label_to_slug: dict[str, str]) -> str:
    """Strip underline-span wrappers, rewrite internal links as
    Obsidian wikilinks. Leaves external links as markdown links."""
    # Strip underline spans first (they wrap link text in pandoc output).
    text = _UNDERLINE_SPAN_RE.sub(r"\1", text)

    def repl(m: re.Match) -> str:
        link_text = m.group(1)
        target = m.group(2)
        # Strip residual span wrappers inside link text.
        link_text = _UNDERLINE_SPAN_RE.sub(r"\1", link_text).strip()
        if target.startswith("#"):
            label = target[1:]
            slug = label_to_slug.get(label, label)
            if _norm(link_text) == _norm(slug) or not link_text:
                return f"[[{slug}]]"
            return f"[[{slug}|{link_text}]]"
        # External / non-anchor link — leave as a normal markdown link.
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

    preface, sections = split_markdown(md)

    # First pass: assign a unique filename slug to every section /
    # subsection so we can rewrite cross-references.
    taken: set[str] = set()
    if preface.strip():
        preface_slug = pick_slug(None, "preface", taken)
    else:
        preface_slug = None

    for sec in sections:
        sec_slug = pick_slug(sec["label"], sec["title"], taken)
        sec["slug"] = sec_slug
        for sub in sec["subsections"]:
            sub["slug"] = pick_slug(sub["label"], sub["title"], taken)

    # Build label → slug map covering every header that has a label
    # AND every header (by slug — pandoc may use it as the anchor).
    label_to_slug: dict[str, str] = {}
    for sec in sections:
        if sec["label"]:
            label_to_slug[sec["label"]] = sec["slug"]
        for sub in sec["subsections"]:
            if sub["label"]:
                label_to_slug[sub["label"]] = sub["slug"]

    # Second pass: write files with link rewriting.
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
