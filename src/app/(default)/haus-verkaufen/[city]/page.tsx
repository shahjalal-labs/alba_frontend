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
    title: `Haus verkaufen in ${cityName} | Uenal Immobilien GmbH`,
    description: `Haus verkaufen in ${cityName} mit professioneller Vermarktung und persönlicher Beratung.`,
    canonicalPath: `/haus-verkaufen/${params.city}`,
  });
}

export default function HausVerkaufenPage({
  params,
}: {
  params: { city: string };
}) {
  return <RegionalSEO city={params.city} type="haus-verkaufen" />;
}
