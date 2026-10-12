import RegionalSEO from "@/pages/RegionalSEO";
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
    title: `Immobilie verkaufen in ${cityName} | Uenal Immobilien GmbH`,
    description: `Immobilie verkaufen in ${cityName} mit regionaler Vermarktung und realistischer Bewertung.`,
    canonicalPath: `/immobilie-verkaufen/${params.city}`,
  });
}

export default function ImmobilieVerkaufenPage({
  params,
}: {
  params: { city: string };
}) {
  return <RegionalSEO city={params.city} type="immobilie-verkaufen" />;
}
