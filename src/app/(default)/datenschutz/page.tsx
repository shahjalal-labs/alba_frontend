import Datenschutz from "@/pages/Datenschutz";
import type { Metadata } from "next";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Datenschutz | Uenal Immobilien GmbH",
  description: "Informationen zur Verarbeitung personenbezogener Daten.",
  canonicalPath: "/datenschutz",
});

export default function DatenschutzPage() {
  return <Datenschutz />;
}
