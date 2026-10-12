type PropertyLike = Record<string, unknown>;

const PUBLIC_IDENTIFIER_KEYS = [
  "unit_number",
  "unit_reference_number",
  "unit_reference",
  "reference_number",
  "object_number",
  "objekt_nr",
  "external_id",
  "property_id",
];

const FALLBACK_IDENTIFIER_KEY = "id";

function toText(value: unknown) {
  if (typeof value === "string") {
    return value.trim();
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return "";
}

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPropertyCandidate(property: PropertyLike, key: string) {
  return toText(property[key]);
}

export function getPublicPropertySlug(property: PropertyLike) {
  for (const key of PUBLIC_IDENTIFIER_KEYS) {
    const value = getPropertyCandidate(property, key);
    if (value && /^\d+$/.test(value)) {
      return value;
    }
  }

  const title = toText(property.title) || toText(property.name);

  if (title) {
    return normalizeSlug(title) || title;
  }

  for (const key of PUBLIC_IDENTIFIER_KEYS) {
    const value = getPropertyCandidate(property, key);
    if (value) {
      return normalizeSlug(value) || value;
    }
  }

  const fallbackId = getPropertyCandidate(property, FALLBACK_IDENTIFIER_KEY);
  if (fallbackId) {
    return fallbackId;
  }

  return "";
}

export function matchesPublicPropertySlug(
  property: PropertyLike,
  slug: string,
) {
  const normalizedSlug = normalizeSlug(slug);

  for (const key of PUBLIC_IDENTIFIER_KEYS) {
    const value = getPropertyCandidate(property, key);
    if (!value) {
      continue;
    }

    if (value === slug || normalizeSlug(value) === normalizedSlug) {
      return true;
    }
  }

  const title = toText(property.title) || toText(property.name);
  return title ? normalizeSlug(title) === normalizedSlug : false;
}
