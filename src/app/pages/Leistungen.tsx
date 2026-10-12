import { CONTACT_INFO } from "@/constants/contact";
import {
  ArrowRight,
  BarChart,
  Camera,
  CheckCircle,
  Eye,
  FileText,
  Heart,
  Home,
  Map,
  Paintbrush,
  Phone,
  Plane,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Link from "next/link";
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

export default function Leistungen() {
  // Shared child reveal used with parent stagger containers.
  // const fadeInUp = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "easeOut" as const },
  //   },
  // };

  const services = [
    {
      icon: TrendingUp,
      title: "Verkauf von Immobilien",
      subtitle: "Strategisch. Zielgerichtet. Erfolgreich.",
      description:
        "Wir verkaufen Ihre Immobilie nicht einfach – wir entwickeln eine maßgeschneiderte Strategie, die exakt auf Ihre Immobilie und Ihre Ziele abgestimmt ist.",
      features: [
        "Individuelle Vermarktungsstrategie",
        "Professionelle Immobilienfotografie",
        "Hochwertige Online- und Offline-Vermarktung",
        "Qualifizierte Käuferansprache",
        "Professionelle Besichtigungsorganisation",
        "Verhandlungsführung auf Augenhöhe",
        "Begleitung bis zur Eigentumsübertragung",
        "After-Sales-Betreuung",
      ],
      color: "from-[#B8A67D] to-[#A39670]",
    },
    {
      icon: Target,
      title: "Bewertung von Immobilien",
      subtitle: "Realistisch. Fundiert. Marktgerecht.",
      description:
        "Keine Schönfärberei, keine übertriebenen Werte. Wir bewerten Ihre Immobilie auf Basis aktueller Marktdaten und jahrelanger Erfahrung – ehrlich und transparent.",
      features: [
        "Umfassende Marktanalyse",
        "Bewertung nach aktuellen Marktstandards",
        "Berücksichtigung von Lage und Zustand",
        "Vergleich mit ähnlichen Objekten",
        "Detaillierter Bewertungsbericht",
        "Persönliche Beratung zur Wertoptimierung",
        "Empfehlungen für Verkaufsstrategie",
        "Kostenlose Erstberatung",
      ],
      color: "from-black to-gray-800",
    },
  ];

  const extendedServices = [
    {
      icon: Camera,
      title: "Immobilienfotografie",
      description:
        "Professionelle Aufnahmen, die Ihre Immobilie ins beste Licht rücken",
    },
    {
      icon: Plane,
      title: "Luftbildaufnahmen & Videos",
      description: "Beeindruckende Perspektiven aus der Vogelperspektive",
    },
    {
      icon: Map,
      title: "Grundrissservice",
      description: "Präzise und anschauliche Grundrisspläne",
    },
    {
      icon: Eye,
      title: "Virtuelle Rundgänge",
      description: "360°-Touren für maximale Transparenz",
    },
    {
      icon: Zap,
      title: "Energieausweis",
      description: "Professionelle Erstellung und Beratung",
    },
    {
      icon: Shield,
      title: "Diskrete Off-Market Vermittlung",
      description: "Höchste Diskretion für exklusive Objekte",
    },
    {
      icon: BarChart,
      title: "Marktwertermittlung",
      description: "Fundierte Analyse Ihrer Immobilie",
    },
    {
      icon: FileText,
      title: "Erstellung von Exposés",
      description: "Hochwertige Verkaufsunterlagen",
    },
    {
      icon: Video,
      title: "Immobilienvideos",
      description: "Emotionale Bewegtbilder für mehr Reichweite",
    },
    {
      icon: Target,
      title: "Zielgruppenorientiertes Marketing",
      description: "Maßgeschneiderte Ansprache der richtigen Käufer",
    },
    {
      icon: TrendingUp,
      title: "Veröffentlichung auf Immobilienportalen",
      description: "ImmoScout24, Kleinanzeigen, immowelt, immonet",
    },
    {
      icon: Users,
      title: "Organisation & Durchführung von Besichtigungen",
      description: "Professionelle Objektpräsentation",
    },
    {
      icon: Search,
      title: "Verhandlungsführung",
      description: "Erfahrene Verhandler auf Ihrer Seite",
    },
    {
      icon: CheckCircle,
      title: "Begleitung beim Kaufvertrag",
      description: "Sicherheit bis zur Unterschrift",
    },
    {
      icon: Heart,
      title: "After-Sales-Service",
      description: "Betreuung auch nach dem Verkauf",
    },
    {
      icon: Home,
      title: "Beratung bei Erb- oder Scheidungsimmobilien",
      description: "Sensible Begleitung in besonderen Situationen",
    },
    {
      icon: TrendingUp,
      title: "Investmentberatung & Projektentwicklung",
      description: "Strategische Unterstützung für Investoren",
    },
    {
      icon: Paintbrush,
      title: "Homestaging",
      description: "Optimale Inszenierung Ihrer Immobilie",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Erstgespräch & Analyse",
      description:
        "Wir lernen Sie und Ihre Immobilie kennen. Kostenlos und unverbindlich.",
      icon: Users,
    },
    {
      step: "02",
      title: "Bewertung & Strategie",
      description:
        "Marktgerechte Bewertung und Entwicklung einer individuellen Verkaufsstrategie.",
      icon: Search,
    },
    {
      step: "03",
      title: "Professionelle Aufbereitung",
      description:
        "Hochwertige Fotos, aussagekräftige Exposés und zielgerichtete Vermarktung.",
      icon: Camera,
    },
    {
      step: "04",
      title: "Vermarktung & Verhandlung",
      description:
        "Wir finden die richtigen Käufer und verhandeln den besten Preis für Sie.",
      icon: TrendingUp,
    },
    {
      step: "05",
      title: "Abwicklung & Übergabe",
      description:
        "Vom Kaufvertrag bis zur Schlüsselübergabe – wir begleiten Sie bis zum Ende.",
      icon: FileText,
    },
    {
      step: "06",
      title: "After-Sales-Service",
      description:
        "Auch nach dem Verkauf sind wir für Sie da. Langfristige Partnerschaft statt One-Hit-Wonder.",
      icon: CheckCircle,
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
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full"
              // variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                UNSERE LEISTUNGEN
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              // variants={fadeInUp}
            >
              Leistungsspektrum
              <br />
              <span className="text-[#B8A67D]">für Ihren Erfolg</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              // variants={fadeInUp}
            >
              Über Jahre haben wir unser Leistungsspektrum ausgebaut, um unseren
              Kunden das Maximum zu bieten. Jede Leistung ist darauf
              ausgerichtet, Ihre Immobilie erfolgreich zu vermitteln.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true, margin: "-100px" }}
                // variants={fadeInUp}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5">
                  <div
                    className={`md:col-span-2 bg-gradient-to-br ${service.color} p-12 flex flex-col justify-center text-white`}
                  >
                    <service.icon className="w-16 h-16 mb-6" />
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl mb-6">{service.subtitle}</p>
                    <p className="text-lg opacity-90">{service.description}</p>
                  </div>

                  <div className="md:col-span-3 p-12">
                    <h3 className="text-2xl font-bold mb-6 text-black">
                      Was Sie erwarten können:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#B8A67D] flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link href="/#kontakt">
                        <Button className="bg-[#B8A67D] hover:bg-[#A39670] text-white">
                          Jetzt anfragen
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
            <motion.div
              className="text-center mb-16"
              // variants={fadeInUp}
            >
              <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full">
                <span className="text-[#B8A67D] text-sm font-semibold">
                  UNSER PROZESS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                So arbeiten wir
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ein klarer Prozess, transparent und nachvollziehbar – von der
                ersten Beratung bis weit über den Verkauf hinaus.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, idx) => (
                <motion.div
                  key={idx}
                  // variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#B8A67D] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl font-bold text-[#B8A67D]/20">
                      {item.step}
                    </div>
                    <item.icon className="w-10 h-10 text-[#B8A67D]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
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

      {/* Extended Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
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
                  ZUSÄTZLICHE LEISTUNGEN
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Mehr als nur Verkauf
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir bieten Ihnen eine Vielzahl zusätzlicher Leistungen, um Ihren
                Immobilienverkauf noch erfolgreicher zu gestalten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedServices.map((item, idx) => (
                <motion.div
                  key={idx}
                  // variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#B8A67D] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="w-10 h-10 text-[#B8A67D]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
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

      {/* Off-Market Fokus */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/10 rounded-full"
              // variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">
                OFF-MARKET
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-12 text-black"
              // variants={fadeInUp}
            >
              Diskreter Verkauf.
              <br />
              Kaufstarke Investoren.
            </motion.h2>

            <motion.div
              className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed space-y-8"
              // variants={fadeInUp}
            >
              <p>
                Mehrfamilienhäuser, Gewerbeimmobilien oder renditestarke Objekte
                erfordern eine andere Strategie. Nicht jeder Verkauf gehört ins
                öffentliche Schaufenster.
              </p>
              <p>
                Wir verfügen über ein Netzwerk kaufstarker Investoren, die
                gezielt nach Off-Market-Objekten suchen. Diskret, schnell,
                professionell – ohne öffentliche Ausschreibung.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-black">
                Ihr Vorteil:{" "}
                <span className="text-[#B8A67D]">
                  Maximale Diskretion. Minimaler Aufwand.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für den Deal Ihres Lebens?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Lassen Sie uns gemeinsam Ihre Immobilie erfolgreich verkaufen oder
              bewerten.
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
