import {
  Award,
  CheckCircle,
  Heart,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

export default function TrustBadges() {
  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const badges = [
    {
      icon: Shield,
      title: "100% Transparenz",
      description: "Ehrliche Bewertungen",
    },
    {
      icon: Award,
      title: "Messbare Erfolge",
      description: "127+ vermittelte Objekte",
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Inhabergeführt",
    },
    {
      icon: TrendingUp,
      title: "98,2% Erfolgsquote",
      description: "Vom Marktwert",
    },
    {
      icon: Heart,
      title: "1% für Soziales",
      description: "Gesellschaftliches Engagement",
    },
    {
      icon: CheckCircle,
      title: "Bundesweit tätig",
      description: "Wo Sie uns brauchen",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-3 rounded-full bg-[#B8A67D]/10 group-hover:bg-[#B8A67D]/20 transition-colors">
                <badge.icon className="w-7 h-7 text-[#B8A67D]" />
              </div>
              <h4 className="font-bold text-sm text-black mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
