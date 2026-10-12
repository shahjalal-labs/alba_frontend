import { motion } from "motion/react";
import Image from "next/image";

export default function PortalLogos() {
  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Wir inserieren Ihre Immobilie auf
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* ImmoScout24 */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop"
                alt="ImmoScout24"
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Kleinanzeigen */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=80&fit=crop"
                alt="Kleinanzeigen"
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* immowelt */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=80&fit=crop"
                alt="immowelt"
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* immonet */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=80&fit=crop"
                alt="immonet"
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-gray-600 mt-8 text-sm">
            + weitere Premium-Portale für maximale Reichweite
          </p>
        </motion.div>
      </div>
    </section>
  );
}
