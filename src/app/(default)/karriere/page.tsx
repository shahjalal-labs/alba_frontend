import type { Metadata } from "next";
import Karriere from "@/pages/Karriere";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Karriere | Uenal Immobilien GmbH",
  description: "Karriere bei Uenal Immobilien GmbH - Teil einer starken Marke werden.",
  canonicalPath: "/karriere",
});

export default function KarrierePage() {
  return <Karriere />;
}
