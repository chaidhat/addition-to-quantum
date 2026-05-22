#!/usr/bin/env python3
"""Scan md/ for Obsidian-style [[target]] / [[target|display]] links and
emit a map of target -> sorted unique display texts to alias.txt."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MD_DIR = ROOT / "md"
OUT = ROOT / "alias.txt"

LINK_RE = re.compile(r"\[\[([^\[\]\n]+?)\]\]")

aliases: dict[str, set[str]] = {}

for md_file in sorted(MD_DIR.rglob("*.md")):
    text = md_file.read_text(encoding="utf-8")
    for match in LINK_RE.finditer(text):
        inner = match.group(1).strip()
        if "|" in inner:
            target, display = inner.split("|", 1)
            target = target.strip()
            display = display.strip()
        else:
            target = inner
            display = inner
        # Strip any #heading or ^block-ref from target
        target = target.split("#", 1)[0].split("^", 1)[0].strip()
        if not target:
            continue
        aliases.setdefault(target, set()).add(display)

result = {k: sorted(v) for k, v in sorted(aliases.items())}

with OUT.open("w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)
    f.write("\n")

print(f"wrote {len(result)} targets to {OUT}")
