import { CONTACT_INFO } from "@/constants/contact";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Phone,
  Rocket,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import WhatsAppButton from "../components/WhatsAppButton";

const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
} as const;

export default function Karriere() {
  // Shared child animation: each item fades in when its parent motion container reveals it.
  // const fadeInUp = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "easeOut" as const },
  //   },
  // };

  const weOffer = [
    {
      icon: TrendingUp,
      title: "Überdurchschnittliche Vergütung",
      description:
        "Leistung wird belohnt. Top-Provisionen plus erfolgsabhängige Bonuszahlungen. Bei uns verdienen Macher, was sie verdienen.",
    },
    {
      icon: Rocket,
      title: "Echte Entwicklungsmöglichkeiten",
      description:
        "Keine Glasdecke. Wer performen kann, steigt auf. Schnell. Echt. Verdient.",
    },
    {
      icon: Users,
      title: "Team auf Augenhöhe",
      description:
        "Keine Hierarchie-Spielchen. Flache Strukturen. Direkte Kommunikation. Respekt statt Titel.",
    },
    {
      icon: Award,
      title: "Teil einer Bewegung",
      description:
        "Wir verändern die Maklerbranche. Ehrlichkeit statt Bullshit. Strategie statt Spam. Willst du dabei sein?",
    },
  ];

  const weSearch = [
    {
      title: "Machertyp",
      description:
        "Du redest nicht nur, du tust. Ergebnisse sind deine Sprache.",
    },
    {
      title: "Hunger",
      description:
        "Du willst mehr als ein 9-to-5 Job. Du willst was reißen, was aufbauen, was bewegen.",
    },
    {
      title: "Ehrlichkeit",
      description:
        "Du verkaufst keine Märchen. Du stehst zu deinem Wort. Integrität ist nicht verhandelbar.",
    },
    {
      title: "Strategisches Denken",
      description:
        "Du siehst nicht nur das Objekt, du siehst die Möglichkeiten. Du denkst in Lösungen, nicht in Problemen.",
    },
    {
      title: "Teamgeist",
      description:
        "Lone Wolf? Nicht hier. Wir sind ein Team. Gemeinsam gewinnen ist das Ziel.",
    },
    {
      title: "Lernbereitschaft",
      description:
        "Du denkst, du weißt schon alles? Falsche Adresse. Wir suchen Menschen, die wachsen wollen.",
    },
  ];

  const notForYou = [
    "Du suchst einen gemütlichen 9-to-5 Job",
    "Du willst nur Dienst nach Vorschrift",
    "Dir sind Provisionen wichtiger als Kundenzufriedenheit",
    "Du hast Angst vor Verantwortung",
    "Du brauchst ständige Anleitung",
    "Du jammerst mehr als du arbeitest",
  ];

  return (
    <div className="bg-white">
      {/* Hero - Aggressive & Direct */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
          // Parent container: orchestrates reveal order for all direct children.
          // initial="hidden"
          // animate="visible"
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: {
          //     opacity: 1,
          //     transition: {
          //       staggerChildren: 0.2,
          //     },
          //   },
          // }}
          >
            {/* Child blocks consume the shared variant for consistent hero timing. */}
            <motion.div
            // variants={fadeInUp}
            >
              <Zap className="w-20 h-20 text-[#B8A67D] mx-auto mb-8" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            // variants={fadeInUp}
            >
              Wir bieten
              <br />
              <span className="text-[#B8A67D]">keinen Job</span>
            </motion.h1>

            <motion.p
              className="text-3xl md:text-4xl font-bold mb-6"
            // variants={fadeInUp}
            >
              Wir suchen Mannschaftskollegen
              <br />
              auf Augenhöhe
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            // variants={fadeInUp}
            >
              Keine 0815-Stellenanzeige. Keine langweiligen Benefits-Listen.
              <br />
              <span className="text-white font-semibold">
                Wir suchen Machertypen, die was reißen wollen.
              </span>
              <br />
              Die Teil einer Bewegung sein wollen.
            </motion.p>

            <motion.div
            // variants={fadeInUp}
            >
              <a href="#bewerbung">
                <Button
                  size="lg"
                  className="bg-[#B8A67D] hover:bg-[#A39670] text-white text-xl px-12 py-8 h-auto"
                >
                  Zeig uns, was du drauf hast
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // Scroll-triggered container: runs once and staggers inner cards/text.
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: {
          //     opacity: 1,
          //     transition: {
          //       staggerChildren: 0.15,
          //     },
          //   },
          // }}
          >
            <motion.div
              className="text-center mb-16"
            // variants={fadeInUp}
            >
              <X className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Das hier ist nichts für dich, wenn...
              </h2>
              <p className="text-2xl opacity-95">
                Ehrlich. Direkt. Ohne Umschweife.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
            // variants={{
            //   hidden: { opacity: 0 },
            //   visible: {
            //     opacity: 1,
            //     transition: {
            //       staggerChildren: 0.1,
            //     },
            //   },
            // }}
            >
              {notForYou.map((item, idx) => (
                <motion.div
                  key={idx}
                  // variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex items-start gap-4"
                >
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center text-xl"
            // variants={fadeInUp}
            >
              <p className="font-bold">
                Wenn das auf dich zutrifft: Danke fürs Vorbeischauen. Wir passen
                nicht zusammen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            // Same pattern for this section: parent controls sequence, children stay simple.
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              className="text-center mb-16"
            // variants={fadeInUp}
            >
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  WEN WIR SUCHEN
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Du bist der/die Richtige, wenn...
              </h2>
              <p className="text-2xl text-gray-700">
                <span className="font-bold text-black">
                  Knallhart. Ehrlich. Real.
                </span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weSearch.map((item, idx) => (
                <motion.div
                  key={idx}
                  // variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300"
                >
                  <CheckCircle className="w-12 h-12 text-[#B8A67D] mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 bg-gradient-to-br from-[#B8A67D] to-[#A39670] text-white rounded-3xl p-12 text-center"
            // variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Erkennst du dich wieder?
              </h3>
              <p className="text-xl mb-8 opacity-95">
                Dann lass uns reden. Keine HR-Gespräche. Keine Standard-Fragen.
                <br />
                Ein ehrliches Gespräch zwischen Profis.
              </p>
              <a href="#bewerbung">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white text-lg px-10 py-6"
                >
                  Bewirb dich jetzt
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
          // Re-uses staggered reveal so feature cards appear one-by-one in viewport.
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: {
          //     opacity: 1,
          //     transition: {
          //       staggerChildren: 0.2,
          //     },
          //   },
          // }}
          >
            <motion.div
              className="text-center mb-16"
            // variants={fadeInUp}
            >
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  WAS WIR BIETEN
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Was du bei uns bekommst
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Keine Standard-Benefits. Keine leeren Versprechen.
                <br />
                <span className="text-white font-semibold">
                  Echte Möglichkeiten für echte Macher.
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {weOffer.map((item, idx) => (
                <motion.div
                  key={idx}
                  // variants={fadeInUp}
                  className="bg-gradient-to-br from-white/5 to-white/10 border border-[#B8A67D]/30 rounded-2xl p-10 hover:border-[#B8A67D] transition-all"
                >
                  <item.icon className="w-14 h-14 text-[#B8A67D] mb-4" />
                  <h3 className="textxl md:text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 border-2 border-[#B8A67D] rounded-2xl p-12 text-center"
            // variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4">
                Plus: Du bist Teil von etwas Größerem
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                1% unseres Umsatzes geht an soziale Projekte. Du arbeitest nicht
                nur für Geld,
                <br />
                sondern auch für einen guten Zweck.{" "}
                <span className="text-[#B8A67D] font-semibold">
                  Erfolg, der einen Unterschied macht.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section
        id="bewerbung"
        className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
          // Final CTA reveal: single container with fade-in child variant.
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-[#B8A67D] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Zeig uns, was du drauf hast
              </h2>
              <p className="text-xl text-gray-300">
                Kein langweiliges Bewerbungsformular. Keine Standardfragen.
                <br />
                <span className="font-semibold text-white">
                  Ruf an oder schreib uns eine ehrliche Mail.
                </span>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#B8A67D]/30 rounded-2xl p-12">
              <h3 className="text-2xl font-bold mb-6">So geht's:</h3>
              <ol className="space-y-4 text-lg mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#B8A67D] rounded-full flex items-center justify-center font-bold text-black">
                    1
                  </span>
                  <span>
                    Ruf uns an unter{" "}
                    <a
                      href={CONTACT_INFO.phone.telHref}
                      className="text-[#B8A67D] font-semibold hover:underline"
                    >
                      {CONTACT_INFO.phone.display}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#B8A67D] rounded-full flex items-center justify-center font-bold text-black">
                    2
                  </span>
                  <span>
                    Oder schick uns eine Mail an{" "}
                    <a
                      href="mailto:info@uenal-immobilien.de"
                      className="text-[#B8A67D] font-semibold hover:underline"
                    >
                      info@uenal-immobilien.de
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#B8A67D] rounded-full flex items-center justify-center font-bold text-black">
                    3
                  </span>
                  <span>
                    Sag uns in 3 Sätzen, warum du der/die Richtige bist
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#B8A67D] rounded-full flex items-center justify-center font-bold text-black">
                    4
                  </span>
                  <span>Wir melden uns innerhalb von 48 Stunden</span>
                </li>
              </ol>

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
            </div>

            <div className="mt-12 text-center text-gray-400">
              <p className="text-lg">
                Keine Anschreiben. Keine Lebensläufe. Keine Formalitäten.
                <br />
                <span className="text-white font-semibold">
                  Nur du und deine Story. Das reicht uns.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
