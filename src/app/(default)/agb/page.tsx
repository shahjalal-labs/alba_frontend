import AGB from "@/pages/AGB";
import type { Metadata } from "next";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "AGB | Uenal Immobilien GmbH",
  description: "Allgemeine Geschäftsbedingungen der Uenal Immobilien GmbH.",
  canonicalPath: "/agb",
});

export default function AGBPage() {
  return <AGB />;
}
