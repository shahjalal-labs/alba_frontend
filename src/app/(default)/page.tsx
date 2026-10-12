import type { Metadata } from "next";
import Home from "@/pages/Home";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Uenal Immobilien GmbH - Die Dealmaker aus dem Nordwesten",
  description:
    "Immobilienmakler in Westerstede, Oldenburg und im gesamten Nordwesten. Bewertung, Vermarktung und Verkauf Ihrer Immobilie – persönlich und ohne Floskeln.",
  canonicalPath: "/",
});

function page() {
  return <Home />;
}

export default page;
