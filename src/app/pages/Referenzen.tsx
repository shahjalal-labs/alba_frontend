"use client";

import { CONTACT_INFO } from "@/constants/contact";

import caseStude1 from "@/assets/dealImage/deal1.jpg";
import caseStude2 from "@/assets/dealImage/deal2.jpg";
import caseStude3 from "@/assets/dealImage/deal3.jpg";
import caseStude4 from "@/assets/dealImage/deal4.jpg";
import caseStude5 from "@/assets/dealImage/deal5.jpg";
import {
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Euro,
  EyeOff,
  Grid3x3,
  Handshake,
  Landmark,
  Layers,
  Map,
  Phone,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import WhatsAppButton from "../components/WhatsAppButton";

const AnimatePresence = ({ children, ...props }: any) => <>{children}</>;

const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
} as const;

const caseStudy1Image = caseStude1;
const caseStudy2Image = caseStude2;
const caseStudy3Image = caseStude3;
const caseStudy4Image = caseStude4;
const caseStudy5Image = caseStude5;

export default function Referenzen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentPage]);

  const caseStudies = [
    {
      title: "Einfamilienhaus Edemissen",
      subtitle: "Sanierung richtig inszeniert verkauft schneller",
      image: caseStudy1Image,
      problem: {
        title: "Das Problem",
        text: "Ein Einfamilienhaus aus dem Jahr 1927 – trotz umfassender Kernsanierung bestand die Herausforderung darin, den tatsächlichen Wert der Modernisierung für potenzielle Käufer klar sichtbar zu machen.",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Kernsanierte Bestandsimmobilien werden häufig unterschätzt oder mit unsanierten Objekten verglichen. Ohne klare Kommunikation entsteht schnell ein falsches Preisverständnis am Markt.",
      },
      strategy: {
        title: "Unsere Strategie",
        text: "Fokussierte Darstellung der hochwertigen Kernsanierung und des nahezu neubauähnlichen Zustands. Strukturierte Aufbereitung aller Maßnahmen sowie eine zielgerichtete Vermarktung, die Vertrauen und Wertverständnis beim Käufer schafft.",
      },
      result: {
        title: "Das Ergebnis",
        text: "Die Strategie ging voll auf: Das Objekt wurde innerhalb von nur 3 Wochen erfolgreich vermittelt – nahezu zum Angebotspreis. Ein klarer Beweis für die richtige Positionierung und Ansprache.",
      },
      stats: [
        { icon: Map, value: "603 m²", label: "Grundstück" },
        { icon: Clock, value: "3 Wochen", label: "Vermarktungsdauer" },
        { icon: TrendingUp, value: "97,6 %", label: "des Angebotspreises" },
      ],
    },
    {
      title: "Wohn- und Geschäftshaus Braunschweig-Veltenhof",
      subtitle: "Komplexe Immobilien brauchen die richtige Strategie",
      image: caseStudy2Image,
      problem: {
        title: "Das Problem",
        text: "Ein hochwertiges Wohn- und Geschäftshaus mit einer sehr speziellen Nutzungskombination. Für klassische Käufergruppen war das Objekt kaum passend.",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Solche Immobilien sprechen nur eine sehr kleine Zielgruppe an. Zusätzlich war die Finanzierung aufgrund der Objektstruktur und Größenordnung deutlich komplexer als bei klassischen Wohnimmobilien.",
      },
      strategy: {
        title: "Unsere Strategie",
        text: "Gezielte Positionierung als kombinierter Unternehmensstandort und privater Lebensmittelpunkt. Fokus auf passende Käuferprofile sowie enge Begleitung der Finanzierung, Behördenabstimmungen und aller beteiligten Parteien.",
      },
      result: {
        title: "Das Ergebnis",
        text: "Ein geeigneter Käufer wurde gefunden, der sowohl seine Firma als auch seinen privaten Wohnsitz auf die Immobilie verlagert hat. Trotz der hohen Komplexität konnte die Transaktion strukturiert und erfolgreich abgeschlossen werden. Die Immobilie wurde für rund 1,2 Mio. € vermittelt.",
      },
      stats: [
        { icon: Building2, value: "828 m²", label: "Wohn- & Nutzfläche" },
        { icon: Euro, value: "ca. 1,2 Mio. €", label: "Transaktionsvolumen" },
        {
          icon: Layers,
          value: "Komplexe Struktur",
          label: "Erfolgreich umgesetzt",
        },
      ],
    },
    {
      title: "Bungalow Lengede",
      subtitle: "Wenn falsche Preisstrategie den Verkauf blockiert",
      image: caseStudy3Image,
      problem: {
        title: "Das Problem",
        text: "Die Immobilie wurde zuvor bereits erfolglos vermarktet. Eine überhöhte Preisvorstellung und mangelnde Strategie führten zu Stillstand im Verkaufsprozess.",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Neben der Korrektur der Preisstrategie musste vor allem das Vertrauen der Eigentümer zurückgewonnen werden, die nach der vorherigen Erfahrung verständlicherweise skeptisch waren.",
      },
      strategy: {
        title: "Unsere Strategie",
        text: "Fundierte Neuermittlung des Immobilienwerts, klare und ehrliche Beratung sowie eine strukturierte Neuvermarktung mit realistischem Preisansatz.",
      },
      result: {
        title: "Das Ergebnis",
        text: "Innerhalb von nur 3 Wochen konnte ein Käufer gefunden werden. Der Verkauf erfolgte nahezu zum Angebotspreis – ein deutlicher Beleg für die Wirkung der richtigen Strategie.",
      },
      stats: [
        { icon: Euro, value: "400.000 €", label: "Verkaufspreis" },
        { icon: Clock, value: "3 Wochen", label: "Vermarktungsdauer" },
        {
          icon: Handshake,
          value: "Vertrauen gewonnen",
          label: "Neu positioniert",
        },
      ],
    },
    {
      title: "Ehemalige Schmiede Schortens-Sillenstede",
      subtitle: "Historische Immobilien erfordern Fingerspitzengefühl",
      image: caseStudy4Image,
      problem: {
        title: "Das Problem",
        text: "Ein historisches Anwesen mit besonderer Vergangenheit, das sich nicht mit klassischen Immobilien vergleichen lässt und für viele Käufer schwer greifbar ist.",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Unvollständige bzw. veraltete Unterlagen sowie Abstimmungen mit Behörden, insbesondere im Zusammenhang mit dem Denkmalschutz, machten den Verkaufsprozess komplex.",
      },
      strategy: {
        title: "Unsere Strategie",
        text: "Kombination aus emotionaler Vermarktung der Geschichte und professioneller Aufarbeitung aller relevanten Objektunterlagen. Ziel war es, sowohl Begeisterung als auch Sicherheit beim Käufer zu schaffen.",
      },
      result: {
        title: "Das Ergebnis",
        text: "Ein passender Käufer wurde gefunden, der den besonderen Charakter der Immobilie zu schätzen weiß. Der Verkauf erfolgte erfolgreich zum Angebotspreis.",
      },
      stats: [
        { icon: Map, value: "1.299 m²", label: "Grundstück" },
        { icon: Target, value: "100 %", label: "des Angebotspreises" },
        {
          icon: Landmark,
          value: "Historisches Objekt",
          label: "Sicher vermittelt",
        },
      ],
    },
    {
      title: "Doppelhaus-Bungalow Wiesmoor",
      subtitle: "Diskrete Verkäufe brauchen ein starkes Netzwerk",
      image: caseStudy5Image,
      problem: {
        title: "Das Problem",
        text: "Zwei vermietete Doppelhaushälften konnten nicht öffentlich vermarktet werden. Gleichzeitig war Diskretion im Verkaufsprozess gewünscht.",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Für beide Einheiten mussten passende Käufer gefunden werden – ohne klassische Vermarktung. Zusätzlich war eine rechtliche und wirtschaftliche Aufteilung in zwei separate Einheiten erforderlich.",
      },
      strategy: {
        title: "Unsere Strategie",
        text: "Gezielte Off-Market-Vermarktung über vorgemerkte Suchkunden aus unserem Netzwerk. Parallel Begleitung der Teilung in zwei eigenständige Flurstücke, um den Einzelverkauf zu ermöglichen.",
      },
      result: {
        title: "Das Ergebnis",
        text: "Beide Einheiten konnten diskret und ohne öffentliche Inserate innerhalb von unter 4 Wochen erfolgreich vermittelt werden.",
      },
      stats: [
        { icon: Grid3x3, value: "2 Einheiten", label: "Separat verkauft" },
        { icon: Clock, value: "< 4 Wochen", label: "Vermarktungsdauer" },
        {
          icon: EyeOff,
          value: "Off-Market Deal",
          label: "Diskret abgewickelt",
        },
      ],
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % caseStudies.length);
  };

  const prevPage = () => {
    setCurrentPage(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <BookOpen className="w-16 h-16 text-[#B8A67D] mx-auto mb-6" />
            </motion.div>

            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                UNSERE ERFOLGSGESICHTEN
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Referenzen
              <br />
              <span className="text-[#B8A67D]">die überzeugen</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Echte Geschichten. Echte Herausforderungen. Echte Lösungen.
              <br />
              So bringen wir Deals über die Bühne, wo andere aufgeben.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Book */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Book Header */}
            <div className="bg-gradient-to-r from-[#B8A67D] to-[#A39670] p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">
                    Case Study {currentPage + 1} von {caseStudies.length}
                  </p>
                  <h2 className="text-3xl font-bold">Dealbook</h2>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevPage}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    aria-label="Vorherige Story"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPage}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    aria-label="Nächste Story"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Book Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-12"
              >
                {/* Title & Image */}
                <div className="mb-12">
                  <h3 className="text-4xl font-bold text-black mb-2">
                    {caseStudies[currentPage].title}
                  </h3>
                  <p className="text-xl text-[#B8A67D] mb-8">
                    {caseStudies[currentPage].subtitle}
                  </p>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-gray-100">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 transition-opacity duration-500 ${
                        isImageLoaded ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <Image
                      src={caseStudies[currentPage].image}
                      alt={caseStudies[currentPage].title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      width={800}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 800px"
                      quality={90}
                      placeholder="blur"
                      priority={currentPage === 0}
                      onLoadingComplete={() => setIsImageLoaded(true)}
                    />
                  </div>
                </div>

                {/* Story Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-red-900 mb-3">
                      {caseStudies[currentPage].problem.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[currentPage].problem.text}
                    </p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-orange-900 mb-3">
                      {caseStudies[currentPage].challenge.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[currentPage].challenge.text}
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {caseStudies[currentPage].strategy.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[currentPage].strategy.text}
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-green-900 mb-3">
                      {caseStudies[currentPage].result.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[currentPage].result.text}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
                  {caseStudies[currentPage].stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <stat.icon className="w-8 h-8 text-[#B8A67D] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-black mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Page Indicators */}
            <div className="flex justify-center gap-1 pb-8">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2"
                  aria-label={`Gehe zu Story ${idx + 1}`}
                >
                  <span
                    className={`h-3 rounded-full transition-all ${
                      idx === currentPage
                        ? "bg-[#B8A67D] w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-center"
          >
            <motion.div
              className="inline-block mb-8 px-4 py-1 bg-[#B8A67D]/10 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                NUR EIN KLEINER AUSZUG
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold text-black mb-8"
              variants={fadeInUp}
            >
              Über <span className="text-[#B8A67D]">100 Immobilien</span>
              <br />
              erfolgreich vermittelt
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              Die hier gezeigten Case Studies sind nur ein kleiner Einblick in
              unsere Arbeit.
            </motion.p>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#B8A67D]/20 rounded-3xl p-12 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#B8A67D] rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Maßgeschneiderte Referenzen für Sie
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Vor einer Zusammenarbeit suchen wir Ihnen passende
                    Referenzobjekte aus unserem bereits vermittelten Bestand
                    heraus, die zu Ihrer Immobilie passen – damit Sie sich eine
                    Vermarktung unter unserem hochwertigen Standard besser
                    vorstellen können.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-[#B8A67D] mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">
                    Vermittelte Objekte
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-[#B8A67D] mb-2">
                    7+
                  </div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-[#B8A67D] mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Qualität</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a href="/#kontakt">
                <Button
                  size="lg"
                  className="bg-[#B8A67D] hover:bg-[#A39670] text-white text-lg px-12 py-6"
                >
                  Jetzt passende Referenzen anfordern
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ihre Erfolgsgeschichte wartet
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Werden Sie Teil unserer zufriedenen Kunden und lassen Sie uns
              gemeinsam Ihren Deal realisieren.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CONTACT_INFO.phone.telHref} className="w-full sm:w-[420px]">
                <Button
                  size="lg"
                  className="w-full h-14 inline-flex items-center justify-center gap-3 bg-[#B8A67D] hover:bg-[#a89870] text-white font-semibold px-8 py-0 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </Button>
              </a>
              <div className="w-full sm:w-[420px]">
                <WhatsAppButton
                  variant="large"
                  text="Direkt per WhatsApp schreiben"
                  className="w-full h-14 rounded-xl px-8 py-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
