import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// The markdown source lives one level up from web/, in ../md.
const MD_ROOT = join(process.cwd(), "..", "md");

export interface Page {
  slug: string; // filename without .md, globally unique — matches [[wikilink]] targets
  title: string; // first "# heading" if present, else derived from slug
  chapterId: string; // e.g. "00-intro"
  filePath: string; // absolute path on disk
}

export interface Chapter {
  id: string; // directory name, e.g. "00-intro"
  order: number; // numeric prefix, e.g. 0
  title: string; // human title, e.g. "Intro"
  pages: Page[];
}

// ---- helpers -------------------------------------------------------------

function titleCaseFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length <= 2 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function chapterTitle(id: string): string {
  // strip leading "NN-" then title-case
  const name = id.replace(/^\d+-/, "");
  return titleCaseFromSlug(name);
}

// Reduce a heading to plain text: [[target|display]] -> display,
// [[target]] -> target, [text](url) -> text, and strip stray `code` ticks.
function cleanTitle(s: string): string {
  return s
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_m, target, display) =>
      (display ?? target).trim(),
    )
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`/g, "")
    .trim();
}

function firstHeading(content: string): string | null {
  for (const raw of content.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("# ")) return cleanTitle(line.slice(2));
    // a non-empty, non-heading first line means there's no leading H1
    if (line.length > 0) return null;
  }
  return null;
}

// ---- index build (cached per process) ------------------------------------

let _index: { chapters: Chapter[]; bySlug: Map<string, Page> } | null = null;

function buildIndex() {
  if (_index) return _index;

  const chapters: Chapter[] = [];
  const bySlug = new Map<string, Page>();

  const dirs = readdirSync(MD_ROOT)
    .filter((d) => {
      try {
        return statSync(join(MD_ROOT, d)).isDirectory();
      } catch {
        return false;
      }
    })
    .sort();

  for (const id of dirs) {
    const dirPath = join(MD_ROOT, id);
    const files = readdirSync(dirPath)
      .filter((f) => f.endsWith(".md"))
      .sort();

    const pages: Page[] = [];
    for (const f of files) {
      const filePath = join(dirPath, f);
      const slug = f.replace(/\.md$/, "");
      const content = readFileSync(filePath, "utf8");
      const title = firstHeading(content) ?? titleCaseFromSlug(slug);
      const page: Page = { slug, title, chapterId: id, filePath };
      pages.push(page);
      bySlug.set(slug, page);
    }

    // Sort pages: a page whose slug matches the chapter name (the chapter's
    // landing note) floats to the top, otherwise alphabetical.
    const landing = id.replace(/^\d+-/, "");
    pages.sort((a, b) => {
      if (a.slug === landing) return -1;
      if (b.slug === landing) return 1;
      return a.title.localeCompare(b.title);
    });

    const m = id.match(/^(\d+)-/);
    chapters.push({
      id,
      order: m ? parseInt(m[1], 10) : 999,
      title: chapterTitle(id),
      pages,
    });
  }

  chapters.sort((a, b) => a.order - b.order);
  _index = { chapters, bySlug };
  return _index;
}

export function getChapters(): Chapter[] {
  return buildIndex().chapters;
}

export function getAllPages(): Page[] {
  return buildIndex().chapters.flatMap((c) => c.pages);
}

export function getPage(slug: string): Page | undefined {
  return buildIndex().bySlug.get(slug);
}

export function getPageContent(slug: string): { page: Page; markdown: string } | null {
  const page = getPage(slug);
  if (!page) return null;
  const raw = readFileSync(page.filePath, "utf8");
  return { page, markdown: rewriteWikilinks(raw) };
}

// The default landing page: the intro chapter's first page, else the very
// first page in the wiki.
export function getHomeSlug(): string {
  const chapters = getChapters();
  const intro = chapters.find((c) => c.id.includes("intro")) ?? chapters[0];
  return intro?.pages[0]?.slug ?? "";
}

// ---- wikilink rewriting ---------------------------------------------------

// Converts Obsidian-style [[target]] and [[target|display]] into standard
// markdown links pointing at /<target>. Unknown targets become a marked
// broken link so they're visible but don't 404 silently.
export function rewriteWikilinks(markdown: string): string {
  const { bySlug } = buildIndex();
  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_m, inner: string) => {
    const [targetRaw, displayRaw] = inner.split("|");
    const target = targetRaw.trim();
    const known = bySlug.get(target);
    const display = (displayRaw ?? (known ? known.title : target)).trim();
    if (known) {
      return `[${display}](/${encodeURIComponent(target)})`;
    }
    // broken link: route still goes to /target (which shows a not-found note)
    return `[${display}](/${encodeURIComponent(target)} "missing: ${target}")`;
  });
}
