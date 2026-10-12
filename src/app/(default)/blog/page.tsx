import type { Metadata } from "next";
import Blog from "@/pages/Blog";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog | Uenal Immobilien GmbH",
  description: "Aktuelle Einblicke, Marktanalysen und Tipps rund um Immobilien.",
  canonicalPath: "/blog",
});

export default function BlogPage() {
  return <Blog />;
}
