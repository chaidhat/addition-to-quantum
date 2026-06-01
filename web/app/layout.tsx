import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
import { getChapters } from "@/lib/content";
import { Sidebar } from "./sidebar";

export const metadata: Metadata = {
  title: "Addition to Quantum",
  description: "A study guide for quantum mechanics, derived from first principles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // strip to a serializable nav shape (no absolute file paths in the client bundle)
  const chapters = getChapters().map((c) => ({
    id: c.id,
    title: c.title,
    pages: c.pages.map((p) => ({ slug: p.slug, title: p.title })),
  }));
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <div className="layout">
          <Sidebar chapters={chapters} />
          <main className="content">
            <article className="prose">{children}</article>
          </main>
        </div>
      </body>
    </html>
  );
}
