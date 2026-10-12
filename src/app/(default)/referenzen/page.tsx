import type { Metadata } from "next";
import Referenzen from "@/pages/Referenzen";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Referenzen | Uenal Immobilien GmbH",
  description: "Ausgewählte Referenzen und erfolgreich vermittelte Immobilien.",
  canonicalPath: "/referenzen",
});

export default function ReferenzenPage() {
  return <Referenzen />;
}
