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
    title: `Immobilienbewertung in ${cityName} | Uenal Immobilien GmbH`,
    description: `Kostenlose Immobilienbewertung in ${cityName} mit regionaler Marktanalyse.`,
    canonicalPath: `/immobilienbewertung/${params.city}`,
  });
}

export default function ImmobilienbewertungPage({
  params,
}: {
  params: { city: string };
}) {
  return <RegionalSEO city={params.city} type="immobilienbewertung" />;
}
