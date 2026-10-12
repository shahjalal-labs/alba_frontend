import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview =
    Boolean(process.env.VERCEL) ||
    process.env.NEXT_PUBLIC_IS_PREVIEW === "true" ||
    (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") ||
    Boolean(
      process.env.VERCEL_URL && process.env.VERCEL_URL.includes("vercel.app"),
    );

  // if (isPreview) {
  //   return {
  //     rules: {
  //       userAgent: "*",
  //       disallow: "/",
  //     },
  //   };
  // }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://uenal-immobilien.de/sitemap.xml",
  };
}
