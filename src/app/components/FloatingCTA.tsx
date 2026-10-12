"use client";

import { CONTACT_INFO } from "@/constants/contact";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div
          className="mb-4 bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-[90vw] sm:w-80 max-w-80 border border-[#B8A67D]/20"
          id="floating-cta-menu"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Wie können wir helfen?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg"
              aria-label="Menü schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <a href={CONTACT_INFO.phone.telHref} className="block">
              <Button className="w-full bg-[#B8A67D] hover:bg-[#A39670] text-white">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
            <a href="/#kontakt" className="block">
              <button className="w-full bg-black hover:bg-gray-800 text-white inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium transition-all">
                <MessageCircle className="w-4 h-4" />
                Rückruf anfordern
              </button>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#B8A67D] hover:bg-[#A39670] text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110"
        aria-label={isOpen ? "Support-Menü schließen" : "Support-Menü öffnen"}
        aria-expanded={isOpen}
        aria-controls="floating-cta-menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
}
