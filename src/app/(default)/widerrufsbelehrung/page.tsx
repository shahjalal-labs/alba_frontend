import Widerrufsbelehrung from "@/pages/Widerrufsbelehrung";
import type { Metadata } from "next";
import { createMetadata } from "@/seo";

export const metadata: Metadata = createMetadata({
  title: "Widerrufsbelehrung | Uenal Immobilien GmbH",
  description:
    "Widerrufsbelehrung und Muster-Widerrufsformular für Verbraucher der Uenal Immobilien GmbH.",
  canonicalPath: "/widerrufsbelehrung",
});

export default function WiderrufsbelehrungPage() {
  return <Widerrufsbelehrung />;
}
