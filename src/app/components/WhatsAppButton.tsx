import { CONTACT_INFO } from "@/constants/contact";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline" | "large";
  text?: string;
  className?: string;
}

export default function WhatsAppButton({
  variant = "inline",
  text = "Per WhatsApp kontaktieren",
  className = "",
}: WhatsAppButtonProps) {
  const phoneNumber = CONTACT_INFO.phone.whatsapp; // ohne + und Leerzeichen für WhatsApp Link
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp kontaktieren"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Schreiben Sie uns!
        </span>
      </a>
    );
  }

  if (variant === "large") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text}
        className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        <span>{text}</span>
      </a>
    );
  }

  // inline variant
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
}
