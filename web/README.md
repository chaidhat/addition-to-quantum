# web/ — wiki renderer for `md/`

A lightweight Next.js (App Router) site that renders the markdown notes in
`../md/` as a browsable wiki, with KaTeX math and Obsidian-style `[[wikilinks]]`.

## Run

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

## Build / serve

```bash
npm run build
npm run start
```

## How it works

- `lib/content.ts` scans `../md`, builds a slug → file index (filenames are
  globally unique, so a `[[slug]]` maps to exactly one note), and rewrites
  wikilinks into internal links. Missing targets render as red "broken" links.
- Chapters = the numbered folders in `md/` (`00-intro`, `01-let`, …), ordered
  by their numeric prefix. Page titles come from each file's first `# heading`.
- `app/[slug]/page.tsx` statically generates one page per note. Math is rendered
  with `remark-math` + `rehype-katex`; tables via `remark-gfm`.

Nothing in `md/` is modified — this only reads it.
