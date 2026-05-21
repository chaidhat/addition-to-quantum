# CLAUDE.md — addition-to-quantum

A LaTeX study guide for quantum mechanics. Primary file: `main.tex`. Compiled to `build/main.pdf` via `latexmk -pdf main.tex`.

## LaTeX style rules

When adding or editing content in `main.tex`, follow these conventions. They apply to new content; do **not** retroactively rewrite legacy sections to match unless asked.

- **No `\textbf{...}`.** Don't use bold for inline emphasis or paragraph "headings." If you want structure, use `\subsection` / `\subsubsection`. Otherwise plain text.
- **No `\mathcal{H}` for Hilbert spaces.** Write plain `H`, `H_A`, `H_B`, `H_{\text{Alice}}`, etc.
- **Use `\ket`, `\bra`, `\braket`.** Never write `\langle a | b \rangle` or `|a\rangle` from scratch — use `\braket{a|b}`, `\bra{a}`, `\ket{a}`. The macros are defined near the top of `main.tex` (around lines 79–81).
- **Use `\mathbb{E}[...]` for means / expectation values.** Don't write expectation values as `\langle A \rangle` or `\braket{\psi|A|\psi}` for the *name* of the mean — use `\mathbb{E}[A]`. (The Born-rule expression `p(a,b) = |\braket{a,b|\Psi}|^2` is a probability, not a mean — leave it as a bra-ket.)

## Sectioning

- `\section{...}` — top-level (e.g. "Cheat Sheet")
- `\subsection{...}` — major topics (e.g. "Neutron Interferometry")
- `\subsubsection{...}` — sub-topics (e.g. "Measurement Statistics", "Combinations of Subsystem Observables")

There is no deeper depth in use. Inline paragraph "headings" should be plain text followed by a colon, not `\paragraph{...}` or `\textbf{...}`.

## Workflow notes

- **Always work directly on `main`. Do NOT create a worktree (do not call `EnterWorktree`), even in background sessions.** Edit `main.tex` in place in the user's working copy. The bg-isolation guard is disabled for this repo via `.claude/settings.json` (`"worktree": {"bgIsolation": "none"}`).
- The doc is mostly transcriptions of handwritten lecture notes. Faithfully transcribe what's in the image; only fix obvious typos when asked.
- After each edit, compile with `latexmk -pdf -f -interaction=nonstopmode main.tex` to confirm it still builds. The `-f` flag is required: there are 3 pre-existing unresolved `Hyper reference` warnings at lines 246 / 1177 / 1259, and without `-f` latexmk halts after pass 1 (before cross-references resolve) with pdflatex return code 1. With `-f` it completes all passes and ends with just those 3 expected warnings.
- Output PDF lives at `build/main.pdf`.
