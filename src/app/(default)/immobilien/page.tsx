import type { Metadata } from "next";
import Immobilien from "@/pages/Immobilien";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Immobilien | Uenal Immobilien GmbH",
  description: "Aktuelle Immobilienangebote in Nordwestdeutschland.",
  canonicalPath: "/immobilien",
});

export default function ImmobilienPage() {
  return <Immobilien />;
}
