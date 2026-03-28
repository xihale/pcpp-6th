#!/usr/bin/env python3
"""Detect unescaped | inside Markdown table cells.

Strategy:
  1. Find table blocks (consecutive lines starting with |).
  2. Use the separator row (---|---|---) to determine expected column count.
  3. For every data row, count unescaped | — if it exceeds the expected count
     of separator |, the row has unescaped | in content.
"""

import re
import sys
from pathlib import Path


def count_unescaped_pipes(line: str) -> int:
    """Count | that are NOT preceded by backslash."""
    n = 0
    for i, ch in enumerate(line):
        if ch == "|" and (i == 0 or line[i - 1] != "\\"):
            n += 1
    return n


def is_separator_row(line: str) -> bool:
    stripped = line.strip()
    inner = stripped.strip("|").strip()
    return bool(re.match(r"^[\s:\-|]+$", inner)) and "-" in inner


def check_file(filepath: Path) -> list[str]:
    lines = filepath.read_text(encoding="utf-8").splitlines()
    issues: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Start of a table row
        if not line.startswith("|") or not line.rstrip().endswith("|"):
            i += 1
            continue
        # Gather consecutive table lines
        table_start = i
        table_lines: list[tuple[int, str]] = []
        while i < len(lines) and lines[i].startswith("|"):
            table_lines.append((i + 1, lines[i]))  # 1-indexed line number
            i += 1
        # Find separator row to get expected column count
        sep_idx = None
        expected_cols = None
        for j, (ln, tl) in enumerate(table_lines):
            if is_separator_row(tl):
                sep_idx = j
                expected_cols = count_unescaped_pipes(tl)
                break
        if sep_idx is None or expected_cols is None:
            continue
        # Check each non-separator row
        for ln, tl in table_lines:
            if is_separator_row(tl):
                continue
            unescaped = count_unescaped_pipes(tl)
            if unescaped != expected_cols:
                # Find positions of unescaped | that are likely content
                # (extra ones beyond what's expected)
                issues.append(
                    f"  line {ln}: expected {expected_cols} pipes, found {unescaped}"
                )
                # Show the line for context
                issues.append(f"    {tl.rstrip()}")
    return issues


def main():
    docs_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("src/content/docs")
    md_files = sorted(docs_dir.rglob("*.md"))
    total = 0
    for fp in md_files:
        issues = check_file(fp)
        if issues:
            rel = fp.relative_to(docs_dir.parent.parent.parent)
            print(f"\n{rel} ({len(issues) // 2} rows with issues):")
            for issue in issues:
                print(issue)
            total += len(issues) // 2
    print(f"\n--- Total: {total} rows with unescaped | in tables ---")


if __name__ == "__main__":
    main()
