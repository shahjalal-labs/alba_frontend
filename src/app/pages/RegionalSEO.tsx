"use client";

import { CONTACT_INFO } from "@/constants/contact";

import {
  ArrowRight,
  CheckCircle,
  Home,
  MapPin,
  Phone,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import WhatsAppButton from "../components/WhatsAppButton";

interface RegionalSEOProps {
  city?: string;
  type?:
    | "immobilie-verkaufen"
    | "haus-verkaufen"
    | "wohnung-verkaufen"
    | "immobilienbewertung";
}

export default function RegionalSEO({
  city,
  type = "immobilie-verkaufen",
}: RegionalSEOProps) {
  const cityData: Record<
    string,
    { name: string; region: string; description: string }
  > = {
    // Bestehende Städte
    bockhorn: {
      name: "Bockhorn",
      region: "Friesland",
      description:
        "Die charmante Gemeinde zwischen Oldenburg und Wilhelmshaven bietet attraktive Wohnlagen für Familien.",
    },
    jever: {
      name: "Jever",
      region: "Friesland",
      description:
        "Die historische Braustadt verbindet gewachsene Altstadtstrukturen mit einem lebendigen Immobilienmarkt.",
    },
    sande: {
      name: "Sande",
      region: "Friesland",
      description:
        "Verkehrsgünstig gelegen zwischen Oldenburg und Wilhelmshaven – ideal für Pendler und Familien.",
    },
    schortens: {
      name: "Schortens",
      region: "Friesland",
      description:
        "Die grüne Oase mit erstklassiger Infrastruktur und exzellentem Freizeitwert.",
    },
    varel: {
      name: "Varel",
      region: "Friesland",
      description:
        "Die Schleusenstadt am Jadebusen verbindet maritimes Flair mit urbanen Vorzügen.",
    },
    wangerland: {
      name: "Wangerland",
      region: "Friesland",
      description:
        "Nordseenähe, Natur pur und begehrte Ferienimmobilien an der Küste.",
    },
    wangerooge: {
      name: "Wangerooge",
      region: "Ostfriesische Inseln",
      description:
        "Die autofreie Nordseeinsel – Top-Destination für Kapitalanleger und Ferienimmobilien.",
    },
    wilhelmshaven: {
      name: "Wilhelmshaven",
      region: "Jade-Weser-Region",
      description:
        "Die einzige deutsche Großstadt an der Nordsee mit maritimer Wirtschaftskraft.",
    },
    zetel: {
      name: "Zetel",
      region: "Friesland",
      description: "Ländliche Idylle und naturnahe Wohnqualität im Grünen.",
    },
    // Neue Städte
    apen: {
      name: "Apen",
      region: "Ammerland",
      description:
        "Ruhige Wohnlagen, viel Grün und eine solide Nachfrage machen Apen für Familien interessant.",
    },
    "bad-zwischenahn": {
      name: "Bad Zwischenahn",
      region: "Ammerland",
      description:
        "Die Perle des Ammerlandes – Kurort am Zwischenahner Meer mit hoher Lebensqualität.",
    },
    edewecht: {
      name: "Edewecht",
      region: "Ammerland",
      description:
        "Edewecht verbindet naturnahes Wohnen mit direkter Anbindung an die Region Oldenburg.",
    },
    rastede: {
      name: "Rastede",
      region: "Ammerland",
      description:
        "Traditionsreiche Gemeinde mit Schlosspark, guter Infrastruktur und stabiler Wohnraumnachfrage.",
    },
    westerstede: {
      name: "Westerstede",
      region: "Ammerland",
      description:
        "Das Herz des Ammerlandes mit starkem Zentrum, gewachsener Nachfrage und solider Marktkenntnis.",
    },
    wiefelstede: {
      name: "Wiefelstede",
      region: "Ammerland",
      description:
        "Grüne Gemeinde zwischen Oldenburg und Wilhelmshaven mit hoher Wohnqualität und ruhigen Lagen.",
    },
    brake: {
      name: "Brake",
      region: "Wesermarsch",
      description:
        "Die Seehafenstadt an der Unterweser mit maritimem Charakter.",
    },
    nordenham: {
      name: "Nordenham",
      region: "Wesermarsch",
      description:
        "Stadt am Jadebusen mit industrieller Tradition und naturnahen Wohnlagen.",
    },
    elsfleth: {
      name: "Elsfleth",
      region: "Wesermarsch",
      description:
        "Historische Hafenstadt mit maritimer Atmosphäre an der Weser.",
    },
    stadland: {
      name: "Stadland",
      region: "Wesermarsch",
      description: "Naturnahe Gemeinde zwischen Jadebusen und Weser.",
    },
    butjadingen: {
      name: "Butjadingen",
      region: "Wesermarsch",
      description:
        "Halbinsel an der Nordsee – beliebte Destination für Ferienimmobilien.",
    },
    ovelgoenne: {
      name: "Ovelgönne",
      region: "Wesermarsch",
      description: "Ländliche Gemeinde mit Weserdeich und hoher Wohnqualität.",
    },
    "ovelgönne": {
      name: "Ovelgönne",
      region: "Wesermarsch",
      description: "Ländliche Gemeinde mit Weserdeich und hoher Wohnqualität.",
    },
    oldenburg: {
      name: "Oldenburg",
      region: "Oldenburg",
      description:
        "Die Universitätsstadt im Nordwesten bietet einen dynamischen Markt mit breiter Nachfrage.",
    },
    wardenburg: {
      name: "Wardenburg",
      region: "Oldenburg",
      description:
        "Gefragter Wohnstandort südlich von Oldenburg mit direkter Nähe zur Stadt und kurzen Wegen.",
    },
    hatten: {
      name: "Hatten",
      region: "Oldenburg",
      description:
        "Familienfreundliche Gemeinde mit ruhigen Wohnlagen und kurzer Verbindung nach Oldenburg.",
    },
    grossenkneten: {
      name: "Großenkneten",
      region: "Oldenburg",
      description:
        "Naturnahe Gemeinde mit Wildeshauser Geest und hoher Wohnqualität.",
    },
    hude: {
      name: "Hude",
      region: "Oldenburg",
      description:
        "Klostergemeinde zwischen Oldenburg und Bremen mit historischem Charme.",
    },
  };

  const currentCity = city ? cityData[city] : null;
  const pageType = type;

  const pageConfig: Record<
    string,
    { title: string; subtitle: string; keyword: string; article: string }
  > = {
    "immobilie-verkaufen": {
      title: "Immobilie verkaufen in",
      subtitle: "Professionelle Immobilienvermittlung",
      keyword: "Immobilie",
      article: "Ihre",
    },
    "haus-verkaufen": {
      title: "Haus verkaufen in",
      subtitle: "Ihr Haus in besten Händen",
      keyword: "Haus",
      article: "Ihr",
    },
    "wohnung-verkaufen": {
      title: "Wohnung verkaufen in",
      subtitle: "Wohnungsverkauf mit Expertise",
      keyword: "Wohnung",
      article: "Ihre",
    },
    immobilienbewertung: {
      title: "Immobilienbewertung in",
      subtitle: "Kostenlose Marktwertanalyse",
      keyword: "Immobilie",
      article: "Ihre",
    },
  };

  const config = pageConfig[pageType] || pageConfig["immobilie-verkaufen"];

  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  if (!currentCity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Stadt nicht gefunden
          </h1>
          <p className="text-gray-600 mb-8">
            Die angeforderte Seite ist nicht verfügbar. Bitte kehren Sie zur
            Startseite zurück.
          </p>
          <Link href="/">
            <Button className="bg-[#B8A67D] hover:bg-[#A39670] text-white">
              Zur Startseite
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // animate="visible"
            // variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              variants={fadeInUp}
            >
              <MapPin className="w-6 h-6 text-[#B8A67D]" />
              <span className="text-[#B8A67D] text-sm font-semibold uppercase">
                {currentCity.region}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              {config.title}
              <br />
              <span className="text-[#B8A67D]">{currentCity.name}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              {currentCity.description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a href={CONTACT_INFO.phone.telHref}>
                <Button
                  size="lg"
                  className="bg-[#B8A67D] hover:bg-[#A39670] text-white text-lg px-10 py-7"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt kostenlos beraten lassen
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Unsere lokale Expertise ermöglicht es uns, die bundesweite Reichweite optimal zu nutzen – so{" "}
                {pageType === "immobilienbewertung" ? "bewerten" : "verkaufen"}{" "}
                Sie erfolgreich {config.article} {config.keyword} in {currentCity.name}.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lokale Expertise trifft auf bundesweite Reichweite – vertrauen Sie auf präzise Marktkenntnis und professionelle Betreuung vor Ort.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Regionale Marktkenntnis",
                  description: `Wir kennen den Immobilienmarkt in ${
                    currentCity.name.toLowerCase() === currentCity.region.toLowerCase() ||
                    currentCity.region.toLowerCase().includes(currentCity.name.toLowerCase()) ||
                    currentCity.name.toLowerCase().includes(currentCity.region.toLowerCase())
                      ? `${currentCity.name} und Umgebung`
                      : `${currentCity.name} und ${currentCity.region}`
                  } genau und wissen, welche Preise realistisch sind.`,
                },
                {
                  icon: TrendingUp,
                  title:
                    pageType === "immobilienbewertung"
                      ? "Präzise Bewertung"
                      : "Maximaler Verkaufspreis",
                  description:
                    pageType === "immobilienbewertung"
                      ? "Fundierte Marktwertermittlung nach §194 BauGB mit detaillierter Analyse aller wertbildenden Faktoren."
                      : "Durch strategische Vermarktung erzielen wir durchschnittlich 98,2% vom realistischen Marktwert.",
                },
                {
                  icon: Home,
                  title: "Professionelle Vermarktung",
                  description:
                    `Von der Immobilienfotografie bis zum virtuellen Rundgang – wir setzen ${config.article} ${config.keyword} optimal in Szene.`,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-[#B8A67D] mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Unser Rundum-Service in {currentCity.name}
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              {[
                "Kostenlose Marktwertermittlung",
                "Professionelle Immobilienfotografie",
                "Virtuelle 360°-Rundgänge",
                "Erstellung hochwertiger Exposés",
                "Veröffentlichung auf allen großen Portalen",
                "Organisation aller Besichtigungen",
                "Professionelle Verhandlungsführung",
                "Begleitung bis zum Notartermin",
                "After-Sales-Service",
                "Diskrete Off-Market-Vermittlung",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                >
                  <CheckCircle className="w-5 h-5 text-[#B8A67D] flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#B8A67D] to-[#A39670] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Bereit, {config.article} {config.keyword} in {currentCity.name} zu{" "}
              {pageType === "immobilienbewertung" ? "bewerten" : "verkaufen"}?
            </motion.h2>
            <motion.p className="text-xl mb-8" variants={fadeInUp}>
              Fordern Sie jetzt Ihre kostenlose Marktwertermittlung an.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a href={CONTACT_INFO.phone.telHref} className="w-full sm:w-[320px]">
                <Button
                  size="lg"
                  className="w-full h-14 rounded-xl bg-black hover:bg-gray-900 text-white text-lg px-8 py-0"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <Link href="/#kontakt" className="w-full sm:w-[320px]">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[#B8A67D] text-lg px-8 py-0"
                >
                  Rückruf vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <WhatsAppButton
                variant="large"
                text="Per WhatsApp kontaktieren"
                className="w-full md:w-[320px] h-14 rounded-xl px-8 py-0 text-base md:text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Cities & Services */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Weitere Services in {currentCity.name}:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "immobilie-verkaufen",
                "haus-verkaufen",
                "wohnung-verkaufen",
                "immobilienbewertung",
              ].map((serviceType) => (
                <Link
                  key={serviceType}
                  href={`/${serviceType}/${city}`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    serviceType === pageType
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {pageConfig[serviceType].title.replace(" in", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
