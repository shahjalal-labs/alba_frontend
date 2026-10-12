// // https://uenal-immobilien.de --- 
// Next.js Configuration --- security headers with all thing

/** @type {import('next').NextConfig} */
import path from "path";

// Content Security Policy (Enforced, frame-ancestors 'self', no 'unsafe-eval')
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.trustlocal.de https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline' https://static.trustlocal.de",
  "img-src 'self' data: https:",
  "font-src 'self' data: https://static.trustlocal.de",
  "connect-src 'self' https:",
  "frame-src https://challenges.cloudflare.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "motion/react": path.resolve(
        process.cwd(),
        "src/app/lib/motion-react.tsx",
      ),
      "framer-motion": path.resolve(
        process.cwd(),
        "src/app/lib/motion-react.tsx",
      ),
      motion: path.resolve(
        process.cwd(),
        "src/app/lib/motion-react.tsx",
      ),
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.propstack.de",
      },
      {
        protocol: "https",
        hostname: "yemca-services.net",
      },
    ],
    // Optimize image delivery
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year for static images
  },
  async redirects() {
    return [
      // Redirect old dead links to relevant pages
      {
        source: "/immobilienkaufmann-jobangebot",
        destination: "/karriere",
        permanent: true, // 301 redirect
      },
      {
        source: "/faq-immobilien",
        destination: "/leistungen",
        permanent: true, // 301 redirect
      },
      {
        source: '/gewerbeimmobilien',
        destination: '/immobilien',
        permanent: true, // 301 redirect (best for SEO/Google)
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
      // Optimize static assets caching
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Optimize build output caching
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Longer cache for all static assets (fonts, icons, svgs, images)
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;