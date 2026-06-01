import { redirect } from "next/navigation";
import { getHomeSlug } from "@/lib/content";

// The wiki root just lands on the intro page.
export default function Home() {
  const slug = getHomeSlug();
  redirect(`/${encodeURIComponent(slug)}`);
}
