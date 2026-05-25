#!/usr/bin/env python3
"""For every md file, look at the display strings in alias.txt and link the
first unlinked occurrence of any matching string to its key — but at most
one link per key per page (so if `qubit` appears 30 times, only the first
gets a [[qubit]] wrap). Existing links to a key suppress new ones on that
page; the file's own slug never self-links.

Safe regions skip: existing [[...]] wiki-links, [text](url) markdown links,
inline math $...$, display math $$...$$, fenced code blocks ```...```, and
inline code `...`.
"""

import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
MD_DIR = REPO / "md"
ALIAS_FILE = HERE / "alias.txt"

WIKI_LINK_RE = re.compile(r"\[\[([^\[\]\n]+?)\]\]")
MD_LINK_RE = re.compile(r"\[[^\[\]\n]*\]\([^()\n]*\)")
DISPLAY_MATH_RE = re.compile(r"\$\$.*?\$\$", re.DOTALL)
INLINE_MATH_RE = re.compile(r"(?<!\$)\$(?!\$)[^\n$]+?(?<!\$)\$(?!\$)")
FENCED_CODE_RE = re.compile(r"```.*?```", re.DOTALL)
INLINE_CODE_RE = re.compile(r"`[^`\n]+?`")


def compute_banned_ranges(text: str) -> list[tuple[int, int]]:
    ranges: list[tuple[int, int]] = []
    for pat in (
        FENCED_CODE_RE,
        DISPLAY_MATH_RE,
        INLINE_MATH_RE,
        INLINE_CODE_RE,
        WIKI_LINK_RE,
        MD_LINK_RE,
    ):
        for m in pat.finditer(text):
            ranges.append(m.span())
    ranges.sort()
    return ranges


def overlaps(span: tuple[int, int], ranges: list[tuple[int, int]]) -> bool:
    s, e = span
    for bs, be in ranges:
        if be <= s:
            continue
        if bs >= e:
            return False
        return True
    return False


def already_linked_keys(text: str) -> set[str]:
    keys: set[str] = set()
    for m in WIKI_LINK_RE.finditer(text):
        inner = m.group(1)
        target = inner.split("|", 1)[0]
        target = target.split("#", 1)[0].split("^", 1)[0].strip()
        if target:
            keys.add(target)
    return keys


def find_first_safe_match(
    text: str, pattern: re.Pattern, ranges: list[tuple[int, int]]
) -> re.Match | None:
    for m in pattern.finditer(text):
        if not overlaps(m.span(), ranges):
            return m
    return None


def process_file(md_file: Path, aliases: dict[str, list[str]]) -> int:
    text = md_file.read_text(encoding="utf-8")
    own_slug = md_file.stem
    linked = already_linked_keys(text)

    # Build (key, display) candidates, longer displays first so "vector space"
    # wins over "space" at overlapping positions.
    candidates: list[tuple[int, str, str]] = []
    for key, displays in aliases.items():
        if key == own_slug:
            continue
        for display in displays:
            if not display:
                continue
            # Skip junk displays with no letters (e.g. stray "(") so we don't
            # propagate malformed source links into other files.
            if not re.search(r"[A-Za-z]", display):
                continue
            candidates.append((-len(display), key, display))
    candidates.sort()

    changes = 0
    for _, key, display in candidates:
        if key in linked:
            continue
        # Word-ish boundary: not flanked by word-char or hyphen, so
        # "Cauchy-Schwarz" won't match inside "Cauchy-Schwarz-inequality".
        pat = re.compile(r"(?<![\w-])" + re.escape(display) + r"(?![\w-])")
        ranges = compute_banned_ranges(text)
        m = find_first_safe_match(text, pat, ranges)
        if m is None:
            continue
        s, e = m.span()
        matched = text[s:e]
        if matched == key:
            replacement = f"[[{key}]]"
        else:
            replacement = f"[[{key}|{matched}]]"
        text = text[:s] + replacement + text[e:]
        linked.add(key)
        changes += 1

    if changes:
        md_file.write_text(text, encoding="utf-8")
    return changes


def main() -> None:
    aliases: dict[str, list[str]] = json.loads(ALIAS_FILE.read_text(encoding="utf-8"))

    total_changes = 0
    files_changed = 0
    per_file: list[tuple[str, int]] = []
    for md_file in sorted(MD_DIR.rglob("*.md")):
        n = process_file(md_file, aliases)
        if n:
            files_changed += 1
            total_changes += n
            per_file.append((str(md_file.relative_to(REPO)), n))

    print(f"added {total_changes} links across {files_changed} files")
    for path, n in per_file:
        print(f"  {n:>3}  {path}")


if __name__ == "__main__":
    main()
