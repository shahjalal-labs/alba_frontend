"use client";

import mapImage from "@/assets/map.png";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnimatedMap() {
  const [visiblePins, setVisiblePins] = useState<number[]>([]);

  // 16 Pins für alle Bundesländer Deutschlands (x, y in Prozent der Map-Größe)
  const pins = [
    // Schleswig-Holstein (Norden)
    { id: 1, x: 50, y: 15, delay: 0.1, label: "Schleswig-Holstein" },
    // Hamburg
    { id: 2, x: 50, y: 20, delay: 0.2, label: "Hamburg" },
    // Mecklenburg-Vorpommern (Nordosten)
    { id: 3, x: 58, y: 20, delay: 0.3, label: "Mecklenburg-Vorpommern" },
    // Bremen
    { id: 4, x: 45, y: 25, delay: 0.4, label: "Bremen" },
    // Niedersachsen (Nordwesten)
    { id: 5, x: 48, y: 32, delay: 0.5, label: "Niedersachsen" },
    // Brandenburg (Osten)
    { id: 6, x: 60, y: 33, delay: 0.6, label: "Brandenburg" },
    // Berlin
    { id: 7, x: 62, y: 31, delay: 0.7, label: "Berlin" },
    // Sachsen-Anhalt (Mitte-Ost)
    { id: 8, x: 55, y: 38, delay: 0.8, label: "Sachsen-Anhalt" },
    // Nordrhein-Westfalen (Westen)
    { id: 9, x: 42, y: 42, delay: 0.9, label: "Nordrhein-Westfalen" },
    // Sachsen (Osten)
    { id: 10, x: 60, y: 45, delay: 1.0, label: "Sachsen" },
    // Thüringen (Mitte)
    { id: 11, x: 52, y: 48, delay: 1.1, label: "Thüringen" },
    // Hessen (Mitte-West)
    { id: 12, x: 46, y: 50, delay: 1.2, label: "Hessen" },
    // Rheinland-Pfalz (Südwesten)
    { id: 13, x: 42, y: 58, delay: 1.3, label: "Rheinland-Pfalz" },
    // Saarland (Südwesten)
    { id: 14, x: 40, y: 62, delay: 1.4, label: "Saarland" },
    // Bayern (Südosten)
    { id: 15, x: 54, y: 68, delay: 1.5, label: "Bayern" },
    // Baden-Württemberg (Südwesten)
    { id: 16, x: 46, y: 70, delay: 1.6, label: "Baden-Württemberg" },
  ];

  useEffect(() => {
    const timerIds: number[] = [];

    pins.forEach((pin) => {
      const timerId = window.setTimeout(() => {
        setVisiblePins((prev) => [...prev, pin.id]);
      }, pin.delay * 1000);

      timerIds.push(timerId);
    });

    return () => {
      timerIds.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-white rounded-3xl overflow-hidden border border-gray-200">
      {/* Deutschland Karte - Schwarze Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={mapImage}
          alt="Deutschland Karte"
          width={mapImage.width}
          height={mapImage.height}
          className="h-[90%] w-auto object-contain"
        />
      </div>

      {/* Goldene Pins */}
      {pins.map((pin) => (
        <motion.div
          key={pin.id}
          className="absolute"
          style={{
            left: `${pin.x}%`,
            top: `${pin.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            visiblePins.includes(pin.id)
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          {/* Pulsierender Punkt */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          >
            <div className="w-4 h-4 bg-[#B8A67D] rounded-full shadow-lg" />
          </motion.div>

          {/* Glow-Effekt */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#B8A67D]/40 rounded-full blur-md"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
