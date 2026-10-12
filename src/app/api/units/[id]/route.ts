import { matchesPublicPropertySlug } from "@/lib/property-url";
import { NextResponse } from "next/server";

const BASE_URL =
  process.env.PROPSTACK_BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL_LOCAL;
const API_KEY =
  process.env.PROPSTACK_API_KEY || process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;

type PropertyResponse = Record<string, unknown>;

function extractUnits(payload: unknown): PropertyResponse[] {
  if (Array.isArray(payload)) {
    return payload.filter((item): item is PropertyResponse => !!item);
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    for (const key of ["data", "units", "results"]) {
      const collection = record[key];
      if (Array.isArray(collection)) {
        return collection.filter((item): item is PropertyResponse => !!item);
      }
    }
  }

  return [];
}

async function fetchJson(url: URL) {
  const response = await fetch(url.toString(), {
    headers: API_KEY ? { "X-API-KEY": API_KEY } : undefined,
    cache: "no-store",
  });

  const text = await response.text();
  let payload: unknown = null;

  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    payload = text;
  }

  return { response, payload, text };
}

async function resolvePublicUnitId(baseUrl: string, identifier: string) {
  const candidateUrls = [new URL("units", baseUrl), new URL("units", baseUrl)];
  candidateUrls[1].searchParams.set("status", "33423");

  for (const url of candidateUrls) {
    const { response, payload } = await fetchJson(url);

    if (!response.ok) {
      continue;
    }

    const units = extractUnits(payload);
    const match = units.find((unit) =>
      matchesPublicPropertySlug(unit, identifier),
    );

    if (match) {
      const resolvedId = match.id;
      if (typeof resolvedId === "string" || typeof resolvedId === "number") {
        return String(resolvedId);
      }
    }
  }

  return null;
}

export async function GET(
  _request: Request,
  context: { params: { id: string } },
) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing base URL" }, { status: 500 });
  }

  const { id } = context.params;
  const baseUrl = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
  const directUrl = new URL(`units/${id}`, baseUrl);
  const directResult = await fetchJson(directUrl);

  if (directResult.response.ok) {
    return new NextResponse(directResult.text, {
      status: directResult.response.status,
      headers: {
        "content-type":
          directResult.response.headers.get("content-type") ||
          "application/json",
      },
    });
  }

  const resolvedId = await resolvePublicUnitId(baseUrl, id);

  if (resolvedId) {
    const resolvedUrl = new URL(`units/${resolvedId}`, baseUrl);
    const resolvedResult = await fetchJson(resolvedUrl);

    return new NextResponse(resolvedResult.text, {
      status: resolvedResult.response.status,
      headers: {
        "content-type":
          resolvedResult.response.headers.get("content-type") ||
          "application/json",
      },
    });
  }

  return new NextResponse(directResult.text, {
    status: directResult.response.status,
    headers: {
      "content-type":
        directResult.response.headers.get("content-type") || "application/json",
    },
  });
}
