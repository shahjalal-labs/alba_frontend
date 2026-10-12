import Impressum from "@/pages/Impressum";
import type { Metadata } from "next";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Impressum | Uenal Immobilien GmbH",
  description: "Rechtliche Angaben und Anbieterkennzeichnung.",
  canonicalPath: "/impressum",
});

export default function ImpressumPage() {
  return <Impressum />;
}
