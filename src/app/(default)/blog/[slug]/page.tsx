import type { Metadata } from "next";
import BlogPost from "@/pages/BlogPost";
import { createMetadata } from "@/seo";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const readableTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return createMetadata({
    title: `${readableTitle} | Blog | Uenal Immobilien GmbH`,
    description: "Aktuelle Immobilien- und Marktinformationen von Uenal Immobilien GmbH.",
    canonicalPath: `/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPost slug={params.slug} />;
}
