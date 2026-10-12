import type { Metadata } from "next";
import UeberUns from "@/pages/UeberUns";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Über uns | Uenal Immobilien GmbH",
  description: "Lernen Sie das Team und die Haltung von Uenal Immobilien kennen.",
  canonicalPath: "/ueber-uns",
});

export default function UeberUnsPage() {
  return <UeberUns />;
}
