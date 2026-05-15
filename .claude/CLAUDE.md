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

- The doc is mostly transcriptions of handwritten lecture notes. Faithfully transcribe what's in the image; only fix obvious typos when asked.
- After each edit, compile with `latexmk -pdf -interaction=nonstopmode main.tex` to confirm it still builds. The 3 unresolved `Hyper reference` warnings at lines 246 / 1177 / 1259 are pre-existing and not caused by edits.
- Output PDF lives at `build/main.pdf`.
