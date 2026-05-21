#!/usr/bin/env python3
r"""Convert main.tex into a tree of markdown files.

Layout: one folder per \section, one file per \subsection.
- Sections with subsections may also have `00-intro.md` for any content
  between the section header and the first subsection.
- Sections without subsections produce a single file inside their folder.
- Any front matter before the first \section is written to `00-preface.md`
  at the output root.

Conversion is done by piping main.tex through pandoc. This script then
splits the resulting markdown into files.

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
    """Convert a .tex file to markdown via pandoc."""
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


_HEADER_ATTR_RE = re.compile(r"\s*\{[^{}]*\}\s*$")


def clean_header(text: str) -> str:
    """Strip trailing pandoc attribute blocks like `{#label}` from a header."""
    return _HEADER_ATTR_RE.sub("", text).strip()


def split_markdown(md: str) -> tuple[str, list[dict]]:
    """Split markdown into (preface, sections).

    `preface` is everything before the first `# ` header.
    Each section dict: {"title", "intro", "subsections": [{"title", "body"}]}.
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
        if line.startswith("# "):
            flush()
            current_sub = None
            current_section = {
                "title": clean_header(line[2:]),
                "intro": "",
                "subsections": [],
            }
            sections.append(current_section)
        elif line.startswith("## "):
            flush()
            if current_section is None:
                current_section = {
                    "title": "Untitled",
                    "intro": "",
                    "subsections": [],
                }
                sections.append(current_section)
            current_sub = {"title": clean_header(line[3:]), "body": ""}
            current_section["subsections"].append(current_sub)
        else:
            buffer.append(line)
    flush()

    preface = "\n".join(preface_lines).strip("\n")
    return preface, sections


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

    if preface.strip():
        (out_dir / "00-preface.md").write_text(preface.strip() + "\n")

    for idx, sec in enumerate(sections, start=1):
        sec_slug = slugify(sec["title"])
        folder = out_dir / f"{idx:02d}-{sec_slug}"
        folder.mkdir()

        if sec["subsections"]:
            if sec["intro"].strip():
                write_file(folder / "00-intro.md", sec["title"], sec["intro"])
            for j, sub in enumerate(sec["subsections"], start=1):
                sub_slug = slugify(sub["title"])
                write_file(
                    folder / f"{j:02d}-{sub_slug}.md",
                    sub["title"],
                    sub["body"],
                )
        else:
            write_file(folder / f"{sec_slug}.md", sec["title"], sec["intro"])

    total_subs = sum(len(s["subsections"]) for s in sections)
    print(
        f"Wrote {len(sections)} sections "
        f"({total_subs} subsections) to {out_dir}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
