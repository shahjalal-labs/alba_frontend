"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

type PropstackImage = {
  url?: string | null;
  big_url?: string | null;
  medium_url?: string | null;
  thumb_url?: string | null;
  original?: string | null;
  big?: string | null;
  medium?: string | null;
  thumb?: string | null;
  is_private?: boolean;
};

type PropstackFieldValue = string | number | boolean | null;

type PropstackFieldItem = {
  key?: string | null;
  name?: string | null;
  value?: PropstackFieldValue;
};

type PropstackLink = {
  id?: string | number;
  title?: string | null;
  url?: string | null;
  is_private?: boolean;
};

type PropstackBroker = {
  name?: string | null;
  position?: string | null;
  public_email?: string | null;
  public_cell?: string | null;
  public_phone?: string | null;
};

const COMMISSION_TERMS = [
  "courtage",
  "provision",
  "maklerprovision",
  "kaeuferprovision",
  "kauferprovision",
  "verkaeuferprovision",
  "verkauferprovision",
  "commission",
];

const STREET_VIEW_URL_PATTERN =
  /streetview|street-view|google\.com\/maps|maps\.google|maps\.googleapis\.com/i;
const SPRENGNETTER_URL_PATTERN = /sprengnetter/i;

type PropstackProperty = {
  id?: string | number;
  name?: string | null;
  title?: string | null;
  address?: string | null;
  short_address?: string | null;
  city?: string | null;
  region?: string | null;
  lat?: number | null;
  lng?: number | null;
  marketing_type?: "BUY" | "RENT" | string;
  status?: {
    name?: string | null;
  };
  created_at?: string | null;
  updated_at?: string | null;
  free_from?: string | null;
  images?: PropstackImage[];
  price?: number | null;
  base_rent?: number | null;
  living_space?: number | null;
  property_space_value?: number | null;
  net_floor_space?: number | null;
  number_of_rooms?: number | null;
  number_of_bed_rooms?: number | null;
  number_of_bath_rooms?: number | null;
  price_per_sqm?: number | null;
  courtage?: string | null;
  condition?: string | null;
  required_fields?: PropstackFieldItem[];
  optional_fields?: PropstackFieldItem[];
  links?: PropstackLink[];
  long_description_note?: string | null;
  long_location_note?: string | null;
  long_furnishing_note?: string | null;
  description_note?: string | null;
  location_note?: string | null;
  furnishing_note?: string | null;
  broker?: PropstackBroker | null;
};

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDc4Njg0NXww&ixlib=rb-4.1.0&q=80&w=1080";

function formatCurrency(amount?: number | null) {
  if (typeof amount !== "number") {
    return "Preis auf Anfrage";
  }

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(value?: number | null) {
  if (typeof value !== "number") {
    return "-";
  }

  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

function getImageUrl(image?: PropstackImage) {
  if (!image) {
    return "";
  }

  return (
    image.big_url ||
    image.medium_url ||
    image.url ||
    image.big ||
    image.medium ||
    image.original ||
    image.thumb_url ||
    image.thumb ||
    ""
  );
}

function parseBulletText(text?: string | null) {
  if (!text) {
    return [];
  }

  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[•\-*\s]+/, "").trim())
    .filter(Boolean);
}

function toDisplayValue(value: PropstackFieldItem["value"]) {
  if (typeof value === "boolean") {
    return value ? "Ja" : "Nein";
  }

  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return String(value);
}

function getPublicLocation(property?: PropstackProperty) {
  if (!property) {
    return "Lage auf Anfrage";
  }

  if (property.city?.trim()) {
    return property.city.trim();
  }

  if (property.region?.trim()) {
    return property.region.trim();
  }

  const fallbackAddress = property.short_address || property.address || "";
  const parts = fallbackAddress
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1];
    const cleaned = lastPart.replace(/^\d{4,5}\s+/, "").trim();
    if (cleaned) {
      return cleaned;
    }
  }

  return "Lage auf Anfrage";
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function isCommissionField(item: PropstackFieldItem) {
  const name = normalizeText(item.name || "");
  const key = normalizeText(item.key || "");

  return COMMISSION_TERMS.some(
    (term) => name.includes(term) || key.includes(term),
  );
}

function stripStreetViewIframes(html: string) {
  return html.replace(/<iframe[\s\S]*?<\/iframe>/gi, (match) =>
    STREET_VIEW_URL_PATTERN.test(match) ? "" : match,
  );
}

function stripSprengnetterLinks(html: string) {
  return html.replace(
    /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (match, href, innerText) =>
      SPRENGNETTER_URL_PATTERN.test(String(href)) ? innerText : match,
  );
}

function sanitizeRichText(html?: string | null) {
  if (!html) {
    return "";
  }

  return stripStreetViewIframes(stripSprengnetterLinks(html));
}

function NotesList({ title, text }: { title: string; text?: string | null }) {
  const rows = parseBulletText(text);

  if (rows.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-[#B8A67D]/20 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-neutral-900">{title}</h3>
      <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
        {rows.map((row, index) => (
          <li key={`${title}-${index}`} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B8A67D]" />
            <span>{row}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RichTextSection({
  title,
  html,
}: {
  title: string;
  html?: string | null;
}) {
  const sanitizedHtml = sanitizeRichText(html);

  if (!sanitizedHtml?.trim()) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-neutral-900">{title}</h3>
      <div
        className="tinymce-content text-sm leading-relaxed text-neutral-700 [&_h1]:my-3 [&_h1]:text-base [&_h1]:font-semibold [&_h2]:my-3 [&_h2]:text-base [&_h2]:font-semibold [&_h3]:my-3 [&_h3]:text-base [&_h3]:font-semibold [&_h4]:my-2 [&_h4]:text-sm [&_h4]:font-semibold [&_h5]:my-2 [&_h5]:text-sm [&_h5]:font-semibold [&_h6]:my-2 [&_h6]:text-sm [&_h6]:font-semibold [&_p]:my-2 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
}

function PropertyHighlightDetails() {
  const params = useParams<{ id?: string | string[] }>();
  const propertyId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [property, setProperty] = useState<PropstackProperty | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProperty = useCallback(
    async (id: string, { initial = false }: { initial?: boolean } = {}) => {
      if (initial) {
        setIsLoading(true);
      }

      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch(`/api/units/${id}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load property");
        }

        const payload = (await response.json()) as PropstackProperty;
        setProperty(payload);
      } catch (fetchError) {
        setError(fetchError);
        setProperty(null);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (!propertyId) {
      return;
    }

    fetchProperty(propertyId, { initial: true });
  }, [fetchProperty, propertyId]);

  const refetch = () => {
    if (propertyId) {
      fetchProperty(propertyId);
    }
  };

  const galleryImages = useMemo(() => {
    const images = property?.images ?? [];
    const visibleImages = images.filter((image) => !image.is_private);
    const source = visibleImages.length > 0 ? visibleImages : images;

    const urls = source.map((image) => getImageUrl(image)).filter(Boolean);

    return urls.length > 0 ? urls : [PLACEHOLDER_IMAGE];
  }, [property?.images]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHeroImageLoading, setIsHeroImageLoading] = useState(true);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [propertyId]);

  useEffect(() => {
    setIsHeroImageLoading(true);
  }, [activeImageIndex, propertyId]);

  useEffect(() => {
    if (activeImageIndex >= galleryImages.length) {
      setActiveImageIndex(0);
    }
  }, [activeImageIndex, galleryImages.length]);

  const requiredFields = (property?.required_fields ?? []).filter(
    (item) => item?.name && !isCommissionField(item),
  );
  const optionalFields = (property?.optional_fields ?? []).filter(
    (item) => item?.name && !isCommissionField(item),
  );

  const amenityFields = optionalFields.filter(
    (item) => typeof item.value === "boolean" && item.value,
  );

  const primaryArea =
    property?.living_space ??
    property?.property_space_value ??
    (typeof property?.net_floor_space === "number"
      ? property.net_floor_space
      : null);

  const publicLocation = getPublicLocation(property);

  const referenceValue =
    optionalFields.find((item) =>
      [
        "unit_reference_number",
        "unit_reference",
        "reference_number",
        "objekt_nr",
        "object_number",
        "external_id",
        "property_id",
      ].includes((item.key || "").toLowerCase()),
    )?.value ??
    requiredFields.find((item) =>
      [
        "unit_reference_number",
        "unit_reference",
        "reference_number",
        "objekt_nr",
        "object_number",
        "external_id",
        "property_id",
      ].includes((item.key || "").toLowerCase()),
    )?.value ??
    property?.id;

  const referenceNumber =
    toDisplayValue(referenceValue) === "-"
      ? "nicht angegeben"
      : toDisplayValue(referenceValue);

  const inquiryEmail =
    property?.broker?.public_email || "info@uenal-immobilien.de";
  const inquirySubject = `Anfrage Exposé - ${property?.title || property?.name || "Immobilie"}`;
  const inquiryBody = [
    "Ich interessiere mich für diese Immobilie. Bitte senden Sie mir das Exposé zu.",
    "",
    `Referenznummer: ${referenceNumber}`,
    `Immobilie: ${property?.title || property?.name || "Immobilie"}`,
    `Lage: ${publicLocation}`,
  ].join("\n");

  const inquiryHref = `mailto:${inquiryEmail}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(inquiryBody)}`;

  const isRent = property?.marketing_type === "RENT";
  const displayPrice = isRent
    ? `${formatCurrency(property?.base_rent)} / Monat`
    : formatCurrency(property?.price);

  const isDetailLoading = !propertyId || isLoading;

  if (isDetailLoading) {
    return (
      <section className="bg-[#f7f6f2] pb-16 pt-8 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-7 w-24 rounded-full" />
              <Skeleton className="h-7 w-20 rounded-full" />
            </div>
            <Skeleton className="h-12 w-3/4 rounded-xl" />
            <Skeleton className="h-5 w-1/2 rounded-lg" />
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <Skeleton className="h-[260px] w-full rounded-none sm:h-[380px] md:h-[520px]" />
            <div className="flex gap-3 overflow-hidden p-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={`thumb-${index}`}
                  className="h-16 w-24 shrink-0 rounded-lg sm:h-20 sm:w-28"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={`quick-stat-${index}`}
                    className="rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <Skeleton className="mb-2 h-3 w-20 rounded" />
                    <Skeleton className="h-6 w-24 rounded" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-56 w-full rounded-2xl" />
              <Skeleton className="h-64 w-full rounded-2xl" />
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>

            <aside className="space-y-6">
              <Skeleton className="h-[420px] w-full rounded-2xl" />
              <Skeleton className="h-52 w-full rounded-2xl" />
            </aside>
          </div>
        </div>
      </section>
    );
  }

  if (error || !property) {
    return (
      <section className="bg-[#f7f6f2] py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-red-900">
            Objekt konnte nicht geladen werden
          </h2>
          <p className="mb-6 text-red-700">
            Bitte versuchen Sie es erneut. Wenn der Fehler bleibt, kontaktieren
            Sie uns direkt.
          </p>
          <Button
            onClick={() => refetch()}
            className="bg-red-900 text-white hover:bg-red-800"
          >
            Erneut laden
          </Button>
        </div>
      </section>
    );
  }

  const activeImage =
    galleryImages[activeImageIndex] || galleryImages[0] || PLACEHOLDER_IMAGE;

  const prevImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveImageIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-[#f7f6f2] pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
            <span className="rounded-full bg-[#B8A67D] px-3 py-1 text-white">
              {property.status?.name || "Objekt"}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[#6a5a36] ring-1 ring-[#B8A67D]/30">
              {property.marketing_type === "RENT" ? "Miete" : "Kauf"}
            </span>
            {isFetching ? (
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600">
                Aktualisiere...
              </span>
            ) : null}
          </div>

          <h1 className="text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">
            {property.title || property.name || "Objektdetails"}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#B8A67D]" />
              <span>{publicLocation}</span>
            </div>
            {property.free_from ? (
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#B8A67D]" />
                <span>Bezugsfrei: {property.free_from}</span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm md:mb-10">
          <div className="relative h-[260px] sm:h-[380px] md:h-[520px]">
            {isHeroImageLoading ? (
              <Skeleton className="absolute inset-0 z-[1] h-full w-full rounded-none" />
            ) : null}
            <Image
              src={activeImage}
              alt={property.title || property.name || "Immobilie"}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className={`object-cover transition-opacity duration-500 ${
                isHeroImageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => setIsHeroImageLoading(false)}
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {galleryImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white transition hover:bg-black/65"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white transition hover:bg-black/65"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>

          {galleryImages.length > 1 ? (
            <div className="flex gap-3 overflow-x-auto p-3">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition sm:h-20 sm:w-28 ${
                    index === activeImageIndex
                      ? "ring-[#B8A67D]"
                      : "ring-transparent hover:ring-[#B8A67D]/60"
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                >
                  <Image
                    src={image}
                    alt={`Vorschaubild ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase text-neutral-500">
                  Preis
                </p>
                <p className="text-lg font-bold text-[#6a5a36]">
                  {displayPrice}
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase text-neutral-500">
                  Wohnflache
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {formatNumber(primaryArea)} m2
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase text-neutral-500">
                  Zimmer
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {formatNumber(property.number_of_rooms)}
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase text-neutral-500">
                  Preis pro m2
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {typeof property.price_per_sqm === "number"
                    ? `${formatNumber(property.price_per_sqm)} EUR`
                    : "-"}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                Eckdaten
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3">
                  <Home className="h-5 w-5 text-[#B8A67D]" />
                  <div>
                    <p className="text-xs uppercase text-neutral-500">
                      Zustand
                    </p>
                    <p className="text-sm font-medium text-neutral-900">
                      {property.condition || "-"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3">
                  <BedDouble className="h-5 w-5 text-[#B8A67D]" />
                  <div>
                    <p className="text-xs uppercase text-neutral-500">
                      Schlafzimmer
                    </p>
                    <p className="text-sm font-medium text-neutral-900">
                      {formatNumber(property.number_of_bed_rooms)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3">
                  <Bath className="h-5 w-5 text-[#B8A67D]" />
                  <div>
                    <p className="text-xs uppercase text-neutral-500">
                      Badezimmer
                    </p>
                    <p className="text-sm font-medium text-neutral-900">
                      {formatNumber(property.number_of_bath_rooms)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {requiredFields.length > 0 ? (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                  Pflichtangaben
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {requiredFields.map((field, index) => (
                    <div
                      key={`required-${field.name}-${index}`}
                      className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                    >
                      <p className="text-xs uppercase text-neutral-500">
                        {field.name}
                      </p>
                      <p className="text-sm font-semibold text-neutral-900">
                        {toDisplayValue(field.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {optionalFields.length > 0 ? (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                  Weitere Angaben
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {optionalFields.map((field, index) => (
                    <div
                      key={`optional-${field.key || field.name}-${index}`}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3"
                    >
                      <p className="text-xs uppercase text-neutral-500">
                        {field.name}
                      </p>
                      <p className="text-sm font-medium text-neutral-900">
                        {toDisplayValue(field.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <RichTextSection
              title="Ausstattung"
              html={property.long_furnishing_note}
            />

            <NotesList
              title="Kurzbeschreibung"
              text={property.description_note}
            />
            <NotesList
              title="Lage auf einen Blick"
              text={property.location_note}
            />
            <NotesList
              title="Ausstattung kompakt"
              text={property.furnishing_note}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-[#B8A67D]/30 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm uppercase text-neutral-500">
                {isRent ? "Monatsmiete" : "Kaufpreis"}
              </p>
              <p className="mb-6 text-3xl font-bold text-[#6a5a36]">
                {displayPrice}
              </p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2 text-neutral-600">
                    <Maximize className="h-4 w-4 text-[#B8A67D]" />
                    Flache
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {formatNumber(primaryArea)} m2
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2 text-neutral-600">
                    <Home className="h-4 w-4 text-[#B8A67D]" />
                    Zimmer
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {formatNumber(property.number_of_rooms)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2 text-neutral-600">
                    <Car className="h-4 w-4 text-[#B8A67D]" />
                    Stellplatze
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {toDisplayValue(
                      optionalFields.find(
                        (item) => item.key === "number_of_parking_spaces",
                      )?.value,
                    )}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {inquiryHref ? (
                  <a href={inquiryHref} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#B8A67D] text-[#6a5a36] hover:bg-[#B8A67D]/10"
                    >
                      Besichtigung anfragen
                    </Button>
                  </a>
                ) : null}
              </div>
            </div>

            {amenityFields.length > 0 ? (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Highlights
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {amenityFields.map((item, index) => (
                    <li key={`amenity-${item.key || item.name}-${index}`}>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#B8A67D]" />
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {property.broker ? (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                  Ansprechpartner
                </h3>
                <p className="text-sm text-neutral-600">
                  {property.broker.position}
                </p>

                <div className="mt-4 space-y-3">
                  <p className="font-semibold text-neutral-900">
                    {property.broker.name || "-"}
                  </p>

                  {property.broker.public_email ? (
                    <a
                      href={`mailto:${property.broker.public_email}`}
                      className="block text-sm text-[#6a5a36] hover:underline"
                    >
                      {property.broker.public_email}
                    </a>
                  ) : null}

                  {property.broker.public_cell ||
                  property.broker.public_phone ? (
                    <a
                      href={`tel:${
                        property.broker.public_cell ||
                        property.broker.public_phone
                      }`}
                      className="block text-sm text-[#6a5a36] hover:underline"
                    >
                      {property.broker.public_cell ||
                        property.broker.public_phone}
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default PropertyHighlightDetails;
