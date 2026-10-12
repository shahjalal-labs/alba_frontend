import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isPreview =
    host.includes("vercel.app") ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

  const response = NextResponse.next();

  // if (isPreview) {
  //   // Enforce noindex at the HTTP response level for all crawlers on preview/vercel domains
  //   response.headers.set(
  //     "X-Robots-Tag",
  //     "noindex, nofollow, noarchive, nosnippet",
  //   );
  // }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
