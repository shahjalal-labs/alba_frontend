import { CONTACT_INFO } from "@/constants/contact";
import { Phone } from "lucide-react";
import PropertyHighlights from "../components/PropertyHighlights";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/button";

export default function Immobilien() {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div>
            <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full">
              <span className="text-[#B8A67D] text-sm font-semibold">
                UNSER PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alle Immobilien im Überblick
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Von exklusiven Villen bis zu modernen Stadtwohnungen – hier finden
              Sie unser vollständiges Angebot
            </p>
          </div>
        </div>
      </section>

      {/* All Properties */}
      <PropertyHighlights />

      {/* Contact CTA Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ihre Traumimmobilie nicht dabei?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Wir arbeiten täglich an neuen Objekten. Kontaktieren Sie uns – wir
            finden gemeinsam Ihre perfekte Immobilie.
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
        </div>
      </section>
    </div>
  );
}
