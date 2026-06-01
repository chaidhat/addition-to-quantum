import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPages, getPageContent, getPage } from "@/lib/content";
import { Markdown } from "../markdown";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(decodeURIComponent(slug));
  return { title: page ? `${page.title} · Addition to Quantum` : "Not found" };
}

export default async function WikiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getPageContent(decodeURIComponent(slug));
  if (!result) notFound();
  return <Markdown>{result.markdown}</Markdown>;
}
