import type { Metadata } from "next";
import Leistungen from "@/pages/Leistungen";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Leistungen | Uenal Immobilien GmbH",
  description: "Immobilienverkauf, Bewertung und Vermarktung aus einer Hand.",
  canonicalPath: "/leistungen",
});

export default function LeistungenPage() {
  return <Leistungen />;
}
