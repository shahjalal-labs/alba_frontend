import type { Metadata } from "next";
import RegionalSEO from "@/pages/RegionalSEO";
import { createMetadata } from "@/seo";

import { getCityName } from "@/constants/cities";

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const cityName = getCityName(params.city);

  return createMetadata({
    title: `Wohnung verkaufen in ${cityName} | Uenal Immobilien GmbH`,
    description: `Wohnung verkaufen in ${cityName} mit präziser Vermarktung und lokaler Expertise.`,
    canonicalPath: `/wohnung-verkaufen/${params.city}`,
  });
}

export default function WohnungVerkaufenPage({
  params,
}: {
  params: { city: string };
}) {
  return <RegionalSEO city={params.city} type="wohnung-verkaufen" />;
}
