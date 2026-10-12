import { Award, Clock, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const stats = [
    {
      icon: TrendingUp,
      value: 100,
      suffix: "+",
      label: "Erfolgreich vermittelte Immobilien",
      description: "Messbare Erfolge, keine leeren Versprechen",
    },
    {
      icon: Users,
      value: 100,
      suffix: "%",
      label: "Zufriedene Kunden",
      description: "Jeder Kunde würde uns weiterempfehlen",
    },
    {
      icon: Award,
      value: 98.2,
      suffix: "%",
      decimals: 1,
      label: "Durchschnittlicher Verkaufspreis",
      description: "Im Verhältnis zum realistischen Marktwert",
    },
    {
      icon: Clock,
      value: 42,
      suffix: " Tage",
      label: "Durchschnittliche Verkaufszeit",
      description: "Deutlich unter dem Marktdurchschnitt",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full">
              <span className="text-[#B8A67D] text-sm font-semibold">
                UENAL IN ZAHLEN
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transparenz ist kein Risiko.
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#B8A67D] mb-6">
              Sondern ein Qualitätsmerkmal.
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Wir verstecken keine Zahlen. Wir zeigen Ergebnisse.
              <br />
              <span className="font-semibold text-white">
                Wollen Sie einen unerfolgreichen Makler engagieren oder
                jemanden, der messbar auf Erfolge zurückblickt?
              </span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-[#B8A67D]/20 rounded-2xl p-8 hover:border-[#B8A67D] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 text-[#B8A67D] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#B8A67D] transition-colors">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
