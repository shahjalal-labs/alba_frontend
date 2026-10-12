import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uenal-immobilien.de",
);

const isPreview =
  Boolean(process.env.VERCEL) ||
  process.env.NEXT_PUBLIC_IS_PREVIEW === "true" ||
  (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") ||
  Boolean(process.env.VERCEL_URL && process.env.VERCEL_URL.includes("vercel.app"));

export function createMetadata({
  title,
  description,
  canonicalPath,
  noIndex = isPreview,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
}): Metadata {
  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    // ...(noIndex
    //   ? {
    //       robots: {
    //         index: false,
    //         follow: false,
    //         nocache: true,
    //         googleBot: {
    //           index: false,
    //           follow: false,
    //           noimageindex: true,
    //           "max-video-preview": -1,
    //           "max-image-preview": "none",
    //           "max-snippet": -1,
    //         },
    //       },
    //     }
    //   : {}),
  };
}