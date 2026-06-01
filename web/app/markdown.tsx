import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Renders a markdown string with GFM tables, KaTeX math, and internal links.
// Wikilinks have already been rewritten to /<slug> links upstream, so here we
// just route same-origin links through next/link for client navigation.
export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        a({ href, children, title, ...props }) {
          const isInternal = href && href.startsWith("/");
          const broken = typeof title === "string" && title.startsWith("missing:");
          if (isInternal) {
            return (
              <Link href={href} className={broken ? "wikilink broken" : "wikilink"} title={title}>
                {children}
              </Link>
            );
          }
          return (
            <a href={href} title={title} target="_blank" rel="noreferrer" {...props}>
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
