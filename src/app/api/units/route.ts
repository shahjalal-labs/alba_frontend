import { NextResponse } from "next/server";

const BASE_URL =
  process.env.PROPSTACK_BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL_LOCAL;
const API_KEY =
  process.env.PROPSTACK_API_KEY || process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;

export async function GET(request: Request) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing base URL" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);

  const baseUrl = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
  const targetUrl = new URL("units", baseUrl);

  // Forward all query parameters (e.g. status, with_meta, order_by, etc.)
  searchParams.forEach((value, key) => {
    targetUrl.searchParams.set(key, value);
  });

  // Ensure with_meta=1 is set so Propstack returns created_at and updated_at timestamps
  // if (!targetUrl.searchParams.has("with_meta")) {
  //   targetUrl.searchParams.set("with_meta", "1");
  // }

  const response = await fetch(targetUrl.toString(), {
    headers: API_KEY ? { "X-API-KEY": API_KEY } : undefined,
    cache: "no-store",
  });

  const body = await response.text();

  return new NextResponse(body, {
    status: response.status,
    headers: {
      "content-type":
        response.headers.get("content-type") || "application/json",
    },
  });
}
