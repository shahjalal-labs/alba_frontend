import alpaImage from "@/assets/alpa.JPG";
import logo from "@/assets/logo.png";
import partnerImage from "@/assets/partner_update.png";
import { CONTACT_INFO } from "@/constants/contact";
import {
  Award,
  CheckCircle,
  Handshake,
  Heart,
  Mail,
  Network,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
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


export default function UeberUns() {
  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const values = [
    {
      icon: Shield,
      title: "Ehrlichkeit",
      description:
        "Keine Schönfärberei, keine falschen Versprechungen. Wir sagen, was ist – nicht was Sie hören wollen. Ehrlichkeit ist die Basis für Vertrauen und langfristige Partnerschaften.",
      principle: "Wir lügen nicht für Provision",
    },
    {
      icon: Target,
      title: "Realismus",
      description:
        "Wir sind Dealmaker, keine Zauberer. Wir können und wollen niemals für unrealistische Preise stehen, die wir selbst nicht vertreten können. Marktgerechte Bewertungen sind unser Fundament.",
      principle: "Marktwert vor Wunschdenken",
    },
    {
      icon: TrendingUp,
      title: "Strategie",
      description:
        "Jede Immobilie ist einzigartig und verdient eine individuelle Strategie. Keine 0815-Vermarktung, sondern durchdachte Konzepte, die auf Ihre Ziele und Ihre Immobilie abgestimmt sind.",
      principle: "Individuelle Lösungen statt Massenware",
    },
    {
      icon: Users,
      title: "Partnerschaft",
      description:
        "Als inhabergeführtes Unternehmen stehen persönliche Betreuung und vertrauensvoller Service an erster Stelle. Sie sind nicht Kunde, sondern Partner auf Augenhöhe.",
      principle: "Langfristig statt schnell",
    },
    {
      icon: Award,
      title: "Qualität",
      description:
        "Von der ersten Beratung bis weit über den Notartermin hinaus – wir arbeiten mit dem Blick fürs Detail. Unser Anspruch ist es, jeden Deal perfekt abzuwickeln.",
      principle: "Excellence in execution",
    },
    {
      icon: Heart,
      title: "Verantwortung",
      description:
        "1% unseres Gesamtumsatzes fließt in regionale Sozialprojekte. Wir nehmen unsere gesellschaftliche Verantwortung ernst und geben der Gemeinschaft etwas zurück.",
      principle: "Erfolg verpflichtet",
    },
  ];

  const socialProjects = [
    {
      title: "Tierheim-Unterstützung",
      description:
        "Regelmäßige Spenden und Sachspenden an lokale Tierheime in Nordwestdeutschland",
      impact: "3 unterstützte Einrichtungen",
    },
    {
      title: "Obdachlosenhilfe",
      description:
        "Unterstützung von Einrichtungen und Projekten für obdachlose Menschen",
      impact: "Winterhilfe-Pakete & Lebensmittelspenden",
    },
    {
      title: "Kinder- und Jugendförderung",
      description:
        "Sponsoring von Sportvereinen und Bildungsprojekten für benachteiligte Kinder",
      impact: "5 aktive Partnerschaften",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
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
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Image
                src={logo}
                alt="Uenal Immobilien Logo"
                width={300}
                height={96}
                priority
                className="h-24 w-auto mx-auto brightness-0 invert"
              />
            </motion.div>

            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                ÜBER UNS
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Die Dealmaker
              <br />
              <span className="text-[#B8A67D]">aus dem Nordwesten</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Wir sind keine gewöhnlichen Makler. Wir sind ein Team von
              Experten, die dort anfangen, wo andere aufhören – mit Ehrlichkeit,
              Strategie und Leidenschaft.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
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
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  UNSER TEAM
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Die Menschen hinter den Deals
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Gemeinsam mit unserem Team setzen wir neue Maßstäbe in der
                Immobilienvermittlung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Alparslan Ünal */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <Image
                    src={alpaImage}
                    alt="Alparslan Ünal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-1">
                    Alparslan Ünal
                  </h3>
                  <p className="text-[#B8A67D] font-semibold mb-4">
                    Gründer & Geschäftsführer
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Der Kopf hinter den Dealmakers. Mit unternehmerischer Vision
                    und strategischem Weitblick führt er das Unternehmen zu
                    neuen Höhen.
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                    <a
                      href="mailto:info@uenal-immobilien.de"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B8A67D] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#B8A67D]" />
                      info@uenal-immobilien.de
                    </a>
                    <a
                      href={CONTACT_INFO.phone.telHref}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B8A67D] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#B8A67D]" />
                      {CONTACT_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Berkan-Mert Saka */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <Image
                    src={partnerImage}
                    alt="Berkan-Mert Saka"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-1">
                    Berkan-Mert Saka
                  </h3>
                  <p className="text-[#B8A67D] font-semibold mb-4">
                    Dualer Student Immobilienwirtschaft (B.A.)
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Kombiniert akademisches Wissen mit praktischer Erfahrung.
                    Bringt frische Perspektiven und innovative Ansätze ins Team.
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                    <a
                      href="mailto:b.saka@uenal-immobilien.de"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B8A67D] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#B8A67D]" />
                      b.saka@uenal-immobilien.de
                    </a>
                    <a
                      href="tel:+4915560846516"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B8A67D] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#B8A67D]" />
                      +49 1556 0846516
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Netzwerk-Karte */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#B8A67D] to-[#A39670] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center p-8 text-white"
              >
                <Network className="w-24 h-24 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Unser Netzwerk
                </h3>
                <p className="text-center text-lg leading-relaxed opacity-95">
                  Gemeinsam mit zahlreichen Dienstleistern,
                  Kooperationspartnern, Freelancern, Architekten und
                  Spezialisten verschiedener Fachbereiche
                </p>
              </motion.div>
            </div>

            {/* Hinweis-Box */}
            <motion.div
              className="bg-white border-2 border-[#B8A67D]/20 rounded-2xl p-10 text-center"
              variants={fadeInUp}
            >
              <Users className="w-12 h-12 text-[#B8A67D] mx-auto mb-4" />
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-bold text-black">
                  Eigentlich gehören auf diese Seite noch viel mehr Bilder.
                </span>
                <br />
                Denn wir sehen unsere Partner – ob Fotografen, Gutachter,
                Architekten, Handwerker oder Marketing-Experten – stets als{" "}
                <span className="text-[#B8A67D] font-semibold">
                  vollwertige Teamkollegen
                </span>
                , auch wenn sie selbstständig sind. Gemeinsam bilden wir ein
                starkes Netzwerk, das jedem Deal die Aufmerksamkeit gibt, die er
                verdient.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
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
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  UNSERE MISSION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Wofür wir stehen
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  title: "Keine leeren Floskeln",
                  description:
                    "Wir reden Klartext. Ehrliche Worte statt Marketing-Blabla.",
                },
                {
                  title: "Keine großen Versprechen",
                  description:
                    "Wir versprechen nur, was wir halten können. Verlässlichkeit ist unser Maßstab.",
                },
                {
                  title: "Nur Ergebnisse",
                  description:
                    "Am Ende zählt der Deal. Messbare Erfolge statt leerer Worte.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
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
              className="bg-gradient-to-br from-[#B8A67D] to-[#A39670] text-white rounded-3xl p-12 text-center"
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Wir fangen an, wo andere aufhören.
                <br />
                Wir vermitteln, wo andere aufgeben.
              </h3>
              <p className="text-xl opacity-90">
                Das ist nicht nur ein Slogan – das ist unser Versprechen an Sie.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values - Wertekanon */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
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
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  WERTEKANON
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Unsere Grundwerte
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Für uns ist die Einigung auf gewisse Grundwerte{" "}
                <span className="font-bold text-black">
                  Bedingung für eine Zusammenarbeit
                </span>
                . Kein Geld oder Auftrag ist es uns wert, unsere Werte über Bord
                zu werfen –
                <span className="text-[#B8A67D] font-bold">
                  {" "}
                  das wäre Betrug an uns selbst
                </span>
                .
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300 group"
                >
                  <value.icon className="w-14 h-14 text-[#B8A67D] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[#B8A67D] font-semibold italic">
                      "{value.principle}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 bg-black text-white rounded-2xl p-12 text-center"
              variants={fadeInUp}
            >
              <CheckCircle className="w-16 h-16 text-[#B8A67D] mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Werte sind nicht verhandelbar
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Wenn Sie nach einem Makler suchen, der seine Prinzipien für
                Provision verkauft, sind wir nicht die Richtigen. Wenn Sie aber
                einen Partner suchen, der mit Integrität und Leidenschaft für
                Ihren Erfolg arbeitet – willkommen bei den Dealmakers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Commitment */}
      <section className="py-24 bg-gradient-to-br from-[#B8A67D] via-[#A39670] to-[#B8A67D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
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
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Heart className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Soziales Engagement
              </h2>
              <p className="text-2xl md:text-3xl font-bold mb-4">
                1% unseres Gesamtumsatzes fließt
                <br />
                in regionale Sozialprojekte
              </p>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Soziales Engagement ist ein Kernbaustein unserer
                Firmenphilosophie. Wir verpflichten uns konsequent, einen
                Prozent unseres gesamten Umsatzes in caritative Zwecke in der
                Region zu investieren, in der wir tätig sind.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {socialProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-lg opacity-90 mb-4">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="font-semibold">{project.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center"
              variants={fadeInUp}
            >
              <p className="text-2xl mb-4">
                <span className="font-bold">
                  Wir wollen dort helfen, wo es gebraucht wird.
                </span>
              </p>
              <p className="text-xl opacity-90">
                Ob Sponsoring, Tierheime oder Obdachlosenhilfe – das ist unser
                Beitrag zur Gesellschaft. Erfolg verpflichtet, und wir nehmen
                diese Verpflichtung ernst.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={fadeInUp}
          >
            <Handshake className="w-16 h-16 text-[#B8A67D] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für eine ehrliche Partnerschaft?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Wenn unsere Werte zu Ihnen passen, freuen wir uns auf das
              Gespräch.
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
