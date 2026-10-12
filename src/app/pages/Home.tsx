"use client";

import TrustlocalWidget from "@/components/TrustlocalWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO } from "@/constants/contact";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Check,
  Heart,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const AnimatedMap = dynamic(() => import("../components/AnimatedMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] md:h-[600px] rounded-3xl border border-gray-200 bg-gray-100" />
  ),
});

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-[520px] rounded-2xl bg-gray-100" />
      <div className="h-[520px] rounded-2xl bg-gray-100" />
    </div>
  ),
});

const PropertyHighlights = dynamic(
  () => import("../components/PropertyHighlights"),
  {
    ssr: false,
    loading: () => (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="h-[360px] rounded-2xl bg-gray-100" />
          <div className="h-[360px] rounded-2xl bg-gray-100" />
          <div className="h-[360px] rounded-2xl bg-gray-100" />
        </div>
      </section>
    ),
  },
);

const StatsSection = dynamic(() => import("../components/StatsSection"), {
  ssr: false,
  loading: () => (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 h-56 rounded-2xl bg-white/5" />
    </section>
  ),
});

const TestimonialsSection = dynamic(
  () => import("../components/TestimonialsSection"),
  {
    ssr: false,
    loading: () => (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 h-64 rounded-2xl bg-gray-100" />
      </section>
    ),
  },
);

export default function Home() {
  useEffect(() => {
    const scrollToKontakt = () => {
      if (window.location.hash !== "#kontakt") return;

      const kontaktSection = document.getElementById("kontakt");
      if (!kontaktSection) return;

      kontaktSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToKontakt, 80);
    window.addEventListener("hashchange", scrollToKontakt);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToKontakt);
    };
  }, []);

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
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInOnly = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-88px)] flex flex-col md:flex-row items-center md:items-start overflow-hidden bg-[#FAFAF9]">
        {/* Subtle gradient accents with gold */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#B8A67D]/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#B8A67D]/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-10  md:py-12 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Crossed out "Immobilienmakler" with animation */}
            <motion.div className="mb-8 md:mb-14">
              <span className="md:hidden inline-flex flex-col gap-1 text-2xl tracking-[0.25em] uppercase text-gray-400 font-normal">
                <span className="relative block w-fit">
                  Klassischer
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#B8A67D] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                </span>
                <span className="relative block w-fit">
                  Immobilienmakler
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#B8A67D] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </span>

              <span className="relative hidden md:inline-block text-2xl tracking-[0.25em] uppercase text-gray-400 font-normal md:text-3xl">
                Klassischer Immobilienmakler
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#B8A67D] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.div>

            {/* Main Headline with cool animation */}
            <motion.div className="mb-8 md:mb-12">
              <motion.h1
                className="text-[35px] md:text-[clamp(3rem,9vw,7rem)] leading-[1.05] font-bold tracking-tight text-black mb-6"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //   duration: 1,
                //   delay: 1.2,
                //   ease: [0.22, 1, 0.36, 1],
                // }}
              >
                <span className="block whitespace-nowrap">Die Dealmaker</span>
                <span className="relative block whitespace-nowrap w-fit">
                  aus dem Nordwesten
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[3px] bg-[#B8A67D]/70 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.75, ease: "easeOut" }}
                  />
                </span>
              </motion.h1>

              {/* Gold accent line with animation */}
              {/* <motion.div
                className="h-[3px] bg-[#B8A67D]"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{
                  duration: 0.8,
                  delay: 1.8,
                  ease: "easeOut" as const,
                }}
              /> */}
            </motion.div>

            {/* Supporting line */}
            <motion.div className="mb-12 md:mb-14">
              <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide max-w-lg leading-relaxed">
                Für Eigentümer, die Ergebnisse erwarten.
                <br />
                Nicht Versprechungen.
              </p>
            </motion.div>

            {/* CTA Button - single primary */}
            <motion.div className="mb-8 md:mb-12">
              <a href="#kontakt">
                <Button
                  size="lg"
                  className="bg-[#B8A67D] hover:bg-[#a89870] text-white text-sm tracking-widest uppercase px-12 py-6 h-auto rounded-full transition-all duration-500 w-full sm:w-auto font-normal shadow-[0_10px_24px_rgba(184,166,125,0.26)] hover:shadow-[0_14px_30px_rgba(184,166,125,0.32)]"
                >
                  Termin vereinbaren
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal scroll indicator - bottom left with gold accent */}
        <motion.div
          className="hidden md:flex absolute bottom-28 md:bottom-24 left-8 lg:left-16"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 1, duration: 1 }}
        >
          <motion.div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#B8A67D]/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#B8A67D]" />
          </motion.div>
        </motion.div>

        {/* Google Reviews & Trust Badges - bottom right */}
        <motion.div
          className="relative z-10 flex w-full md:w-auto justify-center md:justify-end mt-8 md:mt-0 px-4 md:px-0 md:absolute md:bottom-16 md:right-8 lg:right-16"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
            {/* Google Bewertungen & Trusted Local Badge */}
            <div className="flex items-center justify-center md:justify-end gap-3 w-full min-h-[84px]">
              {/* Third-party widget with reserved space to eliminate layout shift */}
              <TrustlocalWidget
                showHeader={false}
                containerClassName="px-2 sm:px-4 md:px-8 py-1.5 min-h-[84px] w-full max-w-[320px]"
                widgetClassName="trustlocal-widget min-h-[76px] w-full"
              />
            </div>

            {/* Mini Trust Icons */}
            <div className="flex flex-col items-center md:items-end gap-2 md:mr-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Zap className="w-4 h-4 text-[#B8A67D]" />
                <span className="text-xs text-gray-700 font-medium">
                  Rückmeldung innerhalb von 24h
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Check className="w-4 h-4 text-[#B8A67D]" />
                <span className="text-xs text-gray-700 font-medium">
                  Kostenfrei & unverbindlich
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtle vertical line accent - right side with gold */}
        <div className="hidden lg:block absolute top-0 right-16 lg:right-24 w-[1px] h-full bg-gradient-to-b from-transparent via-[#B8A67D]/20 to-transparent" />
      </section>

      {/* Maklerfloskeln Section */}
      <section className="pt-20 md:pt-40 pb-16 md:pb-32 bg-white relative overflow-hidden">
        {/* Subtle top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#B8A67D]/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-8" variants={fadeInUp}>
              <h2 className="text-2xl md:text-5xl font-bold text-black mb-8">
                Maklerfloskeln verkaufen keine Immobilien.
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700">
                Haben Sie die Maklerphrasen nicht längst satt? Heute ist jeder:
              </p>
            </motion.div>

            {/* Buzzwords as Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <motion.div
                variants={fadeInOnly}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B8A67D] group-hover:scale-110 transition-transform duration-300 text-center">
                  exklusiv
                </div>
              </motion.div>

              <motion.div
                variants={fadeInOnly}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B8A67D] group-hover:scale-110 transition-transform duration-300 text-center">
                  hochwertig
                </div>
              </motion.div>

              <motion.div
                variants={fadeInOnly}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B8A67D] group-hover:scale-110 transition-transform duration-300 text-center">
                  einzigartig
                </div>
              </motion.div>
            </div>

            {/* Final Statement */}
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <p className="text-2xl md:text-3xl text-gray-700">
                Doch verkauft das wirklich Ihre Immobilie?
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Unique Value Proposition - BLACK background */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  UNSER VERSPRECHEN
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ihre Immobilie verdient mehr
                <br />
                <span className="text-[#B8A67D]">als 0815-Vermarktung</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Persönlich",
                  description:
                    "Als inhabergeführtes Unternehmen stehen persönliche Betreuung und vertrauensvoller Service an erster Stelle.",
                },
                {
                  icon: Target,
                  title: "Durchdacht",
                  description:
                    "Individuelle Vermarktungskonzepte, exakt auf Ihre Wünsche und die Besonderheiten Ihrer Immobilie abgestimmt.",
                },
                {
                  icon: Award,
                  title: "Zielgerichtet",
                  description:
                    "Mit hochwertigen Online- und Offline-Maßnahmen sprechen wir gezielt die richtigen Käufer an.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInOnly}
                  className="bg-white/5 backdrop-blur-sm border border-[#B8A67D]/20 rounded-2xl p-8 hover:border-[#B8A67D] transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-[#B8A67D] mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center text-xl md:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <p className="mb-4">
                Von der ersten Beratung bis weit über den Notartermin hinaus
                sind wir an Ihrer Seite –{" "}
                <span className="text-white font-semibold">
                  engagiert, erreichbar und immer mit dem Blick fürs Detail
                </span>
                .
              </p>
              <p className="text-[#B8A67D] font-semibold">
                Gemeinsam bringen wir Ihre Immobilie erfolgreich zum Abschluss.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies - WHITE background */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  KERNKOMPETENZEN
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Was uns erfolgreich macht
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-[#B8A67D] hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <Target className="w-14 h-14 text-[#B8A67D] mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-black">
                  Realistisch bewerten
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ehrliche, marktgerechte Bewertungen basierend auf fundierter
                  Analyse. Wir sagen Ihnen, was Ihre Immobilie wert ist – nicht
                  was Sie hören wollen.
                </p>
              </motion.div>

              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-[#B8A67D] hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <TrendingUp className="w-14 h-14 text-[#B8A67D] mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-black">
                  Strategisch verkaufen
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Individuelle Vermarktungskonzepte, die exakt auf Ihre
                  Immobilie abgestimmt sind. Persönlich, durchdacht und
                  zielgerichtet.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Property Highlights */}
      <PropertyHighlights limit={3} />

      {/* Where We Work - Map Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, margin: "-100px" }}
            // variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                UNSER EINZUGSGEBIET
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-black"
              variants={fadeInUp}
            >
              Verankert im Nordwesten.
              <br />
              <span className="text-[#B8A67D]">
                Bundesweit aktiv für unsere Kunden.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <AnimatedMap />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Social Commitment */}
      <section className="py-12 md:py-24 bg-[#B8A67D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, margin: "-100px" }}
            // variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Heart className="w-16 h-16 mx-auto mb-6" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              Soziales Engagement
            </motion.h2>
            <motion.p
              className="text-2xl md:text-3xl font-semibold mb-6"
              variants={fadeInUp}
            >
              1% unseres Gesamtumsatzes fließt
              <br />
              in regionale Sozialprojekte
            </motion.p>
            <motion.p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Ob Sponsoring, Tierheime oder Obdachlosenhilfe – wir wollen dort
              helfen, wo es gebraucht wird. Das ist unser Beitrag zur
              Gesellschaft und ein Kernbaustein unserer Firmenphilosophie.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tippgeberprogramm */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, margin: "-100px" }}
            // variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                TIPPGEBERPROGRAMM
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-12"
              variants={fadeInUp}
            >
              Empfehlen lohnt sich.
            </motion.h2>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-8"
              variants={fadeInUp}
            >
              <p>
                Sie kennen jemanden, der seine Immobilie verkaufen möchte?
                Perfekt.
              </p>
              <p>
                Für jede erfolgreiche Vermittlung erhalten Sie eine attraktive
                Provision.
                <br />
                Einfach, transparent und fair.
              </p>
              <div className="mt-12">
                <a href="#kontakt">
                  <Button
                    size="lg"
                    className="bg-[#B8A67D] hover:bg-[#a89870] text-white text-base px-12 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Jetzt Tipp geben
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Häufig gestellte Fragen
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Wie läuft der Verkaufsprozess meiner Immobilie ab?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Wir begleiten Sie von der ersten Bewertung über die
                    professionelle Vermarktung bis hin zum Notartermin und der
                    finalen Übergabe. Dank einer maßgeschneiderten Strategie,
                    hochwertigen Exposés und zielgerichteter Käuferansprache
                    sorgen wir für einen sicheren, transparenten und
                    erfolgreichen Verkaufsprozess.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Wie wird der Wert meiner Immobilie ermittelt?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Unsere Immobilienbewertung basiert auf einer detaillierten
                    Marktanalyse, aktuellen Vergleichswerten und
                    objektspezifischen Faktoren wie Lage, Zustand und
                    Ausstattung. Unsere Bewertungen erfolgen nach den
                    zugelassenen Bewertungsmethoden gemäß §194 BauGB – dem
                    Sachwert-, Ertragswert- und Vergleichsverfahren. Zudem
                    übernehmen unsere Experten die fachkundige Beurteilung
                    besonderer Eintragungen im Grundbuch, wie Dienstbarkeiten
                    (z. B. Wegerechte oder Nießbrauch), die den Wert Ihrer
                    Immobilie beeinflussen können. So ermitteln wir einen
                    realistischen und marktgerechten Verkaufspreis für eine
                    optimale Platzierung Ihrer Immobilie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Wie lange dauert es, eine Immobilie zu verkaufen?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Die Verkaufsdauer hängt von verschiedenen Faktoren ab,
                    darunter die Marktlage, die Preisstrategie und die
                    Nachfrage. Durch unsere gezielte Vermarktung verkaufen wir
                    Immobilien in der Regel innerhalb von 2 – 3 Monaten.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Welche Kosten entstehen für mich als Verkäufer?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    In der Regel trägt der Käufer einen Teil der
                    Maklerprovision. Unsere Provision beträgt branchenüblich
                    3,57 % inklusive gesetzlicher MwSt. Oft relativiert sich
                    diese, da wir durch unsere professionelle Vermarktung in
                    vielen Fällen einen höheren Verkaufspreis erzielen als es
                    bei einem Privatverkauf möglich wäre.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Kann ich mehrere Makler gleichzeitig beauftragen?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Grundsätzlich ist das möglich, jedoch nicht empfehlenswert.
                    Mehrere Makler führen oft zu einer unseriösen
                    Außendarstellung, was potenzielle Käufer verunsichern kann.
                    Wir arbeiten ausschließlich mit einem qualifizierten
                    Alleinauftrag, der sicherstellt, dass wir all unsere
                    Ressourcen bündeln, den Verkaufsprozess gezielt steuern und
                    den maximalen Erfolg für Sie erzielen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Was ist ein qualifizierter Alleinauftrag?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Ein qualifizierter Alleinauftrag bedeutet, dass wir als Ihr
                    Makler exklusiv für den Verkauf Ihrer Immobilie zuständig
                    sind. Dadurch profitieren Sie von einer maximalen
                    Vermarktungsqualität, gezielter Betreuung und einer
                    koordinierten Strategie, die für Sie den bestmöglichen
                    Verkaufspreis erzielt.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Wie lange muss ich mich vertraglich binden?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Unsere Vertragslaufzeiten sind individuell auf Ihr Objekt
                    abgestimmt und liegen in der Regel zwischen 3 und 6 Monaten.
                    So stellen wir sicher, dass jede Immobilie den optimalen
                    Vermarktungszeitraum erhält.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-8"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Kann ich meine Immobilie auch diskret verkaufen?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Ja, wir bieten exklusive Off-Market-Verkäufe an, bei denen
                    Ihre Immobilie nur an geprüfte Interessenten vermittelt
                    wird. Diese Strategie eignet sich besonders für hochwertige
                    oder sensible Objekte und ermöglicht eine diskrete und
                    gezielte Vermarktung ohne öffentliche Inserate.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-9"
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:text-[#B8A67D]">
                    Welche Vorteile bietet ein Makler im Vergleich zum
                    Privatverkauf?
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed">
                    Ein erfahrener Makler sorgt nicht nur für eine
                    professionelle Preisermittlung und Vermarktung, sondern
                    übernimmt auch die gesamte Abwicklung – von der
                    Käuferqualifikation bis zur Vertragsverhandlung. Dadurch
                    sparen Sie Zeit, Aufwand und minimieren Risiken. Zudem
                    erzielen wir durch unsere strategische Vorgehensweise oft
                    höhere Verkaufspreise als bei Privatverkäufen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section id="kontakt" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  KONTAKT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Kontaktieren Sie uns jetzt – gemeinsam finden wir die beste
                Lösung für Ihre Situation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
