"use client";
import { getPublicPropertySlug } from "@/lib/property-url";
import { ArrowRight, Bath, Bed, MapPin, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";

const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  article: ({ children, ...props }: any) => (
    <article {...props}>{children}</article>
  ),
  section: ({ children, ...props }: any) => (
    <section {...props}>{children}</section>
  ),
} as const;

export default function PropertyHighlights({ limit }: { limit?: number }) {
  const [propertiesResponse, setPropertiesResponse] =
    useState<PropertyApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    // hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  type PropertyApi = {
    id: number;
    title?: string | null;
    name?: string | null;
    object_number?: string | number | null;
    unit_number?: string | number | null;
    unit_reference_number?: string | number | null;
    unit_reference?: string | number | null;
    reference_number?: string | number | null;
    external_id?: string | number | null;
    city?: string | null;
    zip_code?: string | null;
    marketing_type?: "BUY" | "RENT" | string;
    price?: number | null;
    base_rent?: number | null;
    number_of_bed_rooms?: number | null;
    number_of_bath_rooms?: number | null;
    living_space?: number | null;
    property_space_value?: number | null;
    images?: Array<{
      original?: string | null;
      big?: string | null;
      medium?: string | null;
      thumb?: string | null;
    }>;
    status?: {
      name?: string | null;
    };
    created_at?: string | null;
    updated_at?: string | null;
  };

  type PropertyApiEnvelope = {
    data?: PropertyApi[];
    units?: PropertyApi[];
    results?: PropertyApi[];
  };

  type PropertyApiResponse = PropertyApi[] | PropertyApiEnvelope;

  const formatCurrency = (value?: number | null) => {
    if (typeof value !== "number") return "Preis auf Anfrage";
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const fetchProperties = useCallback(
    async ({ initial = false }: { initial?: boolean } = {}) => {
      if (initial) {
        setIsLoading(true);
      }

      setIsFetching(true);
      setIsError(false);

      try {
        const response = await fetch("/api/units?status=33423&sort_by=created_at&order=desc", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load properties");
        }

        const payload = (await response.json()) as PropertyApiResponse;
        setPropertiesResponse(payload);
      } catch (error) {
        setIsError(true);
        setPropertiesResponse(null);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchProperties({ initial: true });
  }, [fetchProperties]);

  const refetch = () => {
    fetchProperties();
  };

  const properties = useMemo(() => {
    const responseEnvelope: PropertyApiEnvelope | undefined =
      propertiesResponse && !Array.isArray(propertiesResponse)
        ? propertiesResponse
        : undefined;

    const resolvedProperties = Array.isArray(propertiesResponse)
      ? propertiesResponse
      : responseEnvelope?.data ||
      responseEnvelope?.units ||
      responseEnvelope?.results ||
      [];

    const sortedProperties = [...resolvedProperties].sort((a, b) => {
      const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return timeB - timeA;
    });

    return sortedProperties.map((property) => {
      const image =
        property.images?.[0]?.medium ||
        property.images?.[0]?.big ||
        property.images?.[0]?.original ||
        "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDc4Njg0NXww&ixlib=rb-4.1.0&q=80&w=1080";

      const location = property.city || property.zip_code || "Deutschland";
      const area = property.living_space ?? property.property_space_value ?? 0;
      const isRent = property.marketing_type === "RENT";
      const price = isRent
        ? `${formatCurrency(property.base_rent)} / Monat`
        : formatCurrency(property.price);

      return {
        id: property.id,
        publicSlug: getPublicPropertySlug(property),
        image,
        title: property.title || "Immobilie",
        location: location || "Deutschland",
        price,
        beds: property.number_of_bed_rooms ?? "-",
        baths: property.number_of_bath_rooms ?? "-",
        area: Math.round(area),
        status: property.status?.name || "In Vermarktung",
      };
    });
  }, [propertiesResponse]);

  const displayedProperties = properties.slice(0, limit || properties.length);
  const showSkeleton =
    isLoading || (isFetching && displayedProperties.length === 0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
              <span className="text-[#B8A67D] text-sm font-semibold">
                AKTUELLE HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Unsere aktuellen Objekte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Auswahl unserer aktuell verfuegbaren Immobilien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {showSkeleton
              ? Array.from({ length: limit || 6 }).map((_, idx) => (
                <motion.div
                  key={`skeleton-${idx}`}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <div className="h-64 bg-gray-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-100 rounded" />
                    <div className="h-8 w-1/2 bg-gray-100 rounded" />
                    <div className="h-5 bg-gray-100 rounded" />
                    <div className="h-10 bg-gray-100 rounded" />
                  </div>
                </motion.div>
              ))
              : displayedProperties.map((property, idx) => (
                <motion.div
                  key={property.id || idx}
                  variants={fadeInUp}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${property.status === "Erfolgreich vermittelt"
                          ? "bg-green-500/90 text-white"
                          : property.status === "In Vermarktung"
                            ? "bg-[#B8A67D]/90 text-white"
                            : "bg-orange-500/90 text-white"
                          }`}
                      >
                        {property.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1 text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#B8A67D] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-[#B8A67D] mb-4">
                      {property.price}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize className="w-4 h-4" />
                        <span>{property.area} m2</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#B8A67D] text-[#B8A67D] hover:bg-[#B8A67D] hover:text-white group-hover:bg-[#B8A67D] group-hover:text-white transition-all"
                    >
                      <Link
                        href={`/immobilien/${property.publicSlug || property.id}`}
                      >
                        Details ansehen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>

          {!showSkeleton && isError && displayedProperties.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="mb-4 text-sm font-medium text-red-700">
                Die Immobilien konnten gerade nicht geladen werden.
              </p>
              <Button
                variant="outline"
                onClick={() => refetch()}
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                Erneut laden
              </Button>
            </div>
          ) : null}

          {!showSkeleton && !isError && displayedProperties.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-700">
                Aktuell sind keine Immobilien verfügbar.
              </p>
            </div>
          ) : null}

          {limit && (
            <motion.div className="text-center mt-12" variants={fadeInUp}>
              <Link href="/immobilien">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white"
                >
                  Alle Immobilien ansehen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
