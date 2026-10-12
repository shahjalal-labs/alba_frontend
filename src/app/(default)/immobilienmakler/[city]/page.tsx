import ImmobilienmaklerRegional from "@/pages/ImmobilienmaklerRegional";
import type { Metadata } from "next";
import { createMetadata } from "@/seo";

import { getCityName } from "@/constants/cities";

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const cityName = getCityName(params.city);

  return createMetadata({
    title: `Immobilienmakler in ${cityName} | Uenal Immobilien GmbH`,
    description: `Ihr Immobilienmakler in ${cityName} mit regionaler Marktkenntnis.`,
    canonicalPath: `/immobilienmakler/${params.city}`,
  });
}

export default function ImmobilienmaklerPage({
  params,
}: {
  params: { city: string };
}) {
  return <ImmobilienmaklerRegional city={params.city} />;
}
