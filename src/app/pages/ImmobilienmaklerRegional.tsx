"use client";

import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Home,
  MapPin,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import WhatsAppButton from "../components/WhatsAppButton";

interface ImmobilienmaklerRegionalProps {
  city?: string;
}

export default function ImmobilienmaklerRegional({
  city,
}: ImmobilienmaklerRegionalProps) {
  const cityData: Record<
    string,
    { name: string; region: string; description: string; marketInfo: string }
  > = {
    apen: {
      name: "Apen",
      region: "Ammerland",
      description:
        "Ländlich geprägte Gemeinde mit attraktiven Wohnlagen im Ammerland.",
      marketInfo:
        "In Apen profitieren Eigentümer von stabilen Immobilienpreisen und hoher Nachfrage nach Einfamilienhäusern.",
    },
    "bad-zwischenahn": {
      name: "Bad Zwischenahn",
      region: "Ammerland",
      description:
        "Die Perle des Ammerlandes – Kurort am Zwischenahner Meer mit hoher Lebensqualität.",
      marketInfo:
        "Bad Zwischenahn ist eine der gefragtesten Wohnlagen im Nordwesten mit Premium-Preisniveau.",
    },
    bockhorn: {
      name: "Bockhorn",
      region: "Friesland",
      description:
        "Die charmante Gemeinde zwischen Oldenburg und Wilhelmshaven bietet attraktive Wohnlagen für Familien.",
      marketInfo:
        "Bockhorn punktet mit moderaten Preisen und hoher Nachfrage von Familien.",
    },
    brake: {
      name: "Brake",
      region: "Wesermarsch",
      description:
        "Die Seehafenstadt an der Unterweser mit maritimem Charakter.",
      marketInfo:
        "Brake bietet solide Immobilienwerte mit Entwicklungspotenzial durch Hafenwirtschaft.",
    },
    butjadingen: {
      name: "Butjadingen",
      region: "Wesermarsch",
      description:
        "Die Halbinsel am Jadebusen – Nordseenähe und Ferienimmobilien-Hotspot.",
      marketInfo:
        "Butjadingen ist Top-Adresse für Ferienimmobilien mit attraktiven Renditemöglichkeiten.",
    },
    edewecht: {
      name: "Edewecht",
      region: "Ammerland",
      description:
        "Lebendige Gemeinde mit perfekter Anbindung und naturnahen Wohnlagen.",
      marketInfo:
        "Edewecht erlebt steigende Nachfrage durch Nähe zu Oldenburg und gute Infrastruktur.",
    },
    elsfleth: {
      name: "Elsfleth",
      region: "Wesermarsch",
      description: "Die Hochschulstadt an der Weser mit maritimer Tradition.",
      marketInfo:
        "Elsfleth bietet interessante Chancen für Kapitalanleger dank Hochschule und Hafen.",
    },
    grossenkneten: {
      name: "Großenkneten",
      region: "Oldenburg (Land)",
      description:
        "Naturnahe Gemeinde mit hoher Lebensqualität vor den Toren Oldenburgs.",
      marketInfo:
        "Großenkneten profitiert von Oldenburg-Nähe bei deutlich moderateren Preisen.",
    },
    hatten: {
      name: "Hatten",
      region: "Oldenburg (Land)",
      description: "Attraktive Wohngemeinde zwischen Oldenburg und Bremen.",
      marketInfo:
        "Hatten ist sehr gefragt bei Pendlern und Familien – stabile Wertentwicklung.",
    },
    hude: {
      name: "Hude",
      region: "Oldenburg (Land)",
      description:
        "Die Klostergemeinde zwischen Oldenburg und Bremen mit historischem Charme.",
      marketInfo:
        "Hude gehört zu den Top-Wohnlagen mit hoher Nachfrage und Premium-Preisen.",
    },
    jever: {
      name: "Jever",
      region: "Friesland",
      description:
        "Die historische Braustadt mit urbanem Charme und hoher Lebensqualität.",
      marketInfo:
        "Jever bietet urbanes Flair und stabile Immobilienwerte in zentraler Lage.",
    },
    nordenham: {
      name: "Nordenham",
      region: "Wesermarsch",
      description:
        "Die junge Stadt am Jadebusen mit maritimer Wirtschaftskraft.",
      marketInfo:
        "Nordenham punktet mit günstigen Preisen und Potenzial durch Hafenwirtschaft.",
    },
    oldenburg: {
      name: "Oldenburg",
      region: "Oldenburg (Stadt)",
      description:
        "Die dynamische Universitätsstadt – Wirtschaftszentrum und Wachstumsregion im Nordwesten.",
      marketInfo:
        "Oldenburg ist DER Immobilienmarkt im Nordwesten mit höchster Nachfrage und stabilen Wertsteigerungen.",
    },
    ovelgoenne: {
      name: "Ovelgönne",
      region: "Wesermarsch",
      description: "Naturnahe Gemeinde am Jadebusen mit hoher Wohnqualität.",
      marketInfo:
        "Ovelgönne bietet ruhiges Wohnen mit guter Erreichbarkeit und moderaten Preisen.",
    },
    ovelgönne: {
      name: "Ovelgönne",
      region: "Wesermarsch",
      description: "Naturnahe Gemeinde am Jadebusen mit hoher Wohnqualität.",
      marketInfo:
        "Ovelgönne bietet ruhiges Wohnen mit guter Erreichbarkeit und moderaten Preisen.",
    },
    rastede: {
      name: "Rastede",
      region: "Ammerland",
      description:
        "Traditionsreiche Gemeinde mit Schlosspark und idealer Verkehrsanbindung.",
      marketInfo:
        "Rastede gehört zu den begehrtesten Wohnlagen mit hoher Nachfrage und stabilen Preisen.",
    },
    sande: {
      name: "Sande",
      region: "Friesland",
      description:
        "Verkehrsgünstig gelegen zwischen Oldenburg und Wilhelmshaven – ideal für Pendler.",
      marketInfo:
        "Sande profitiert von perfekter Lage und steigender Nachfrage durch Pendler.",
    },
    schortens: {
      name: "Schortens",
      region: "Friesland",
      description:
        "Die grüne Oase mit erstklassiger Infrastruktur und exzellentem Freizeitwert.",
      marketInfo:
        "Schortens bietet beste Infrastruktur und stabile Immobilienwerte.",
    },
    stadland: {
      name: "Stadland",
      region: "Wesermarsch",
      description: "Die Gemeinde am Jadebusen – Ruhe, Natur und Küstennähe.",
      marketInfo:
        "Stadland punktet mit Naturverbundenheit und Potenzial für Ferienimmobilien.",
    },
    varel: {
      name: "Varel",
      region: "Friesland",
      description:
        "Die Schleusenstadt am Jadebusen verbindet maritimes Flair mit urbanen Vorzügen.",
      marketInfo:
        "Varel bietet urbanes Leben am Wasser mit steigender Nachfrage.",
    },
    wangerland: {
      name: "Wangerland",
      region: "Friesland",
      description:
        "Nordseenähe, Natur pur und begehrte Ferienimmobilien an der Küste.",
      marketInfo:
        "Wangerland ist Top-Destination für Ferienimmobilien mit exzellenten Renditen.",
    },
    wangerooge: {
      name: "Wangerooge",
      region: "Ostfriesische Inseln",
      description:
        "Die autofreie Nordseeinsel – Top-Destination für Kapitalanleger.",
      marketInfo:
        "Wangerooge gehört zu den exklusivsten Ferienimmobilien-Standorten an der Nordsee.",
    },
    wardenburg: {
      name: "Wardenburg",
      region: "Oldenburg (Land)",
      description:
        "Grüne Gemeinde mit optimaler Anbindung an Oldenburg und Bremen.",
      marketInfo:
        "Wardenburg ist sehr gefragt bei Familien – hohe Nachfrage und stabile Preise.",
    },
    westerstede: {
      name: "Westerstede",
      region: "Ammerland",
      description:
        "Das Herz des Ammerlandes – die Rhododendronstadt mit charmantem Zentrum.",
      marketInfo:
        "Westerstede ist Zentrum des Ammerlandes mit hoher Nachfrage und stabilen Werten.",
    },
    wiefelstede: {
      name: "Wiefelstede",
      region: "Ammerland",
      description:
        "Grüne Gemeinde mit hoher Wohnqualität zwischen Oldenburg und Wilhelmshaven.",
      marketInfo:
        "Wiefelstede profitiert von perfekter Lage und steigender Beliebtheit.",
    },
    wilhelmshaven: {
      name: "Wilhelmshaven",
      region: "Jade-Weser-Region",
      description:
        "Die einzige deutsche Großstadt an der Nordsee mit maritimer Wirtschaftskraft.",
      marketInfo:
        "Wilhelmshaven bietet interessante Chancen für Kapitalanleger mit Entwicklungspotenzial.",
    },
    zetel: {
      name: "Zetel",
      region: "Friesland",
      description: "Ländliche Idylle und naturnahe Wohnqualität im Grünen.",
      marketInfo: "Zetel punktet mit Ruhe und Natur bei moderaten Preisen.",
    },
  };

  const currentCity = city ? cityData[city] : null;

  if (!currentCity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Stadt nicht gefunden</h1>
          <Link href="/">
            <Button>Zur Startseite</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#B8A67D]/20 rounded-full"
              variants={fadeInUp}
            >
              <MapPin className="w-4 h-4 text-[#B8A67D]" />
              <span className="text-[#B8A67D] text-sm font-semibold">
                {currentCity.region}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Immobilienmakler {currentCity.name}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              {currentCity.description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/#kontakt">
                <Button
                  size="lg"
                  className="bg-[#B8A67D] hover:bg-[#A39670] text-white text-lg px-10 py-6"
                >
                  Kostenlose Beratung anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warum Uenal Immobilien */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Ihr Immobilienmakler in {currentCity.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als Die Dealmaker aus dem Nordwesten kennen wir den
                Immobilienmarkt in {currentCity.name} genau. Wir verbinden
                lokale Expertise mit professioneller Vermarktung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8A67D] rounded-full mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Lokale Expertise
                </h3>
                <p className="text-gray-600">
                  Wir kennen {currentCity.name} und{" "}
                  {currentCity.region.toLowerCase().includes(currentCity.name.toLowerCase())
                    ? "die umliegende Region"
                    : `die Region ${currentCity.region}`}{" "}
                  wie unsere Westentasche. Jede Lage, jeden Kiez, jeden
                  Quadratmeterpreis.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8A67D] rounded-full mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ehrliche Bewertung
                </h3>
                <p className="text-gray-600">
                  Keine überzogenen Versprechungen. Wir bewerten Ihre Immobilie
                  realistisch und marktgerecht – für einen erfolgreichen
                  Verkauf.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8A67D] rounded-full mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Starkes Netzwerk
                </h3>
                <p className="text-gray-600">
                  Über 2000 registrierte Kaufinteressenten in unserer Datenbank.
                  Viele Immobilien verkaufen wir off-market an bestehende
                  Kontakte.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marktinfo */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#B8A67D]/10 rounded-full">
                <TrendingUp className="w-4 h-4 text-[#B8A67D]" />
                <span className="text-[#B8A67D] text-sm font-semibold">
                  MARKTEINSCHÄTZUNG
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Immobilienmarkt {currentCity.name}
              </h2>

              <p className="text-xl text-gray-600 mb-6">
                {currentCity.marketInfo}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#B8A67D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Realistische Bewertung
                    </h4>
                    <p className="text-gray-600">
                      Marktgerechte Preiseinschätzung basierend auf aktuellen
                      Verkaufsdaten
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#B8A67D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Schnelle Vermarktung
                    </h4>
                    <p className="text-gray-600">
                      Durchschnittlich 6-8 Wochen bis zum Verkauf dank
                      professioneller Strategie
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#B8A67D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Maximaler Preis
                    </h4>
                    <p className="text-gray-600">
                      Professionelles Marketing und Verhandlungsführung für den
                      besten Deal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-6">
                Unsere Leistungen in {currentCity.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Home className="w-6 h-6 text-[#B8A67D]" />
                  <span className="font-semibold">Immobilienbewertung</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Building className="w-6 h-6 text-[#B8A67D]" />
                  <span className="font-semibold">
                    Verkauf von Häusern & Wohnungen
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-[#B8A67D]" />
                  <span className="font-semibold">
                    Professionelles Marketing
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 text-[#B8A67D]" />
                  <span className="font-semibold">Off-Market-Vermarktung</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#B8A67D]" />
                  <span className="font-semibold">
                    Komplette Kaufabwicklung
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/#kontakt">
                  <Button className="w-full bg-[#B8A67D] hover:bg-[#A39670] text-white">
                    Jetzt kostenlose Bewertung anfragen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#B8A67D] to-[#A39670] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              variants={fadeInUp}
            >
              <Phone className="w-6 h-6" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Immobilie in {currentCity.name} verkaufen?
            </motion.h2>

            <motion.p className="text-xl mb-8" variants={fadeInUp}>
              Lassen Sie uns sprechen – persönlich, direkt, ehrlich. Wir beraten
              Sie kostenlos und unverbindlich.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/#kontakt">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white text-lg px-10 py-6"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/immobilien">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-10 py-6"
                >
                  Aktuelle Angebote
                </Button>
              </Link>
              <WhatsAppButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schema.org structured data for local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Uenal Immobilien GmbH",
          description: `Immobilienmakler in ${currentCity.name} - Die Dealmaker aus dem Nordwesten`,
          areaServed: {
            "@type": "City",
            name: currentCity.name,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Oldenburg",
            addressRegion: "Niedersachsen",
            addressCountry: "DE",
          },
          telephone: "+49-XXX-XXXXXXX",
          priceRange: "$$",
        })}
      </script>
    </div>
  );
}
