import logo from "@/assets/logo.png";
import TrustlocalWidget from "@/components/TrustlocalWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO } from "@/constants/contact";
import { Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  // Alle Städte alphabetisch sortiert
  const cities = [
    { name: "Apen", slug: "apen" },
    { name: "Bad Zwischenahn", slug: "bad-zwischenahn" },
    { name: "Bockhorn", slug: "bockhorn" },
    { name: "Brake", slug: "brake" },
    { name: "Butjadingen", slug: "butjadingen" },
    { name: "Edewecht", slug: "edewecht" },
    { name: "Elsfleth", slug: "elsfleth" },
    { name: "Großenkneten", slug: "grossenkneten" },
    { name: "Hatten", slug: "hatten" },
    { name: "Hude", slug: "hude" },
    { name: "Jever", slug: "jever" },
    { name: "Nordenham", slug: "nordenham" },
    { name: "Oldenburg", slug: "oldenburg" },
    { name: "Ovelgönne", slug: "ovelgoenne" },
    { name: "Rastede", slug: "rastede" },
    { name: "Sande", slug: "sande" },
    { name: "Schortens", slug: "schortens" },
    { name: "Stadland", slug: "stadland" },
    { name: "Varel", slug: "varel" },
    { name: "Wangerland", slug: "wangerland" },
    { name: "Wangerooge", slug: "wangerooge" },
    { name: "Wardenburg", slug: "wardenburg" },
    { name: "Westerstede", slug: "westerstede" },
    { name: "Wiefelstede", slug: "wiefelstede" },
    { name: "Wilhelmshaven", slug: "wilhelmshaven" },
    { name: "Zetel", slug: "zetel" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src={logo}
              alt="Uenal Immobilien Logo"
              width={260}
              height={84}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-bold mb-2">Uenal Immobilien GmbH</h3>
            <p className="text-[#B8A67D] mb-4">
              Die Dealmaker aus dem Nordwesten
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Wir sind keine gewöhnlichen Makler. Wir sind Dealmaker, die dort
              anfangen, wo andere aufhören. Mit realistischer Bewertung und
              strategischem Verkauf bringen wir Ihre Immobilie zum Erfolg.
            </p>

            {/* Trustlocal Widget */}
            <TrustlocalWidget
              containerClassName="mb-8 w-full max-w-[500px] rounded-2xl p-3"
              widgetClassName="trustlocal-widget min-h-[96px] w-full"
            />

            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-3 text-sm">Folgen Sie uns</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/uenal.immobilien"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Instagram"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#B8A67D] transition-all group"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-[#B8A67D] transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alparslan-uenal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf LinkedIn"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#B8A67D] transition-all group"
                >
                  <FaLinkedinIn className="w-4 h-4 text-gray-400 group-hover:text-[#B8A67D] transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@uenalimmobilien5829"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie unseren YouTube-Kanal"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#B8A67D] transition-all group"
                >
                  <FaYoutube className="w-5 h-5 text-gray-400 group-hover:text-[#B8A67D] transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/uenal.immobilien"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Facebook"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#B8A67D] transition-all group"
                >
                  <FaFacebookF className="w-4 h-4 text-gray-400 group-hover:text-[#B8A67D] transition-colors" />
                </a>
                <a
                  href="https://www.tiktok.com/@uenal.immobilien"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf TikTok"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#B8A67D] transition-all group"
                >
                  <FaTiktok className="w-5 h-5 text-gray-400 group-hover:text-[#B8A67D] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Immobilien
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/referenzen"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Referenzen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Beide Adressen */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Standort */}
              <li>
                <div className="flex items-start gap-2 border-b border-gray-800 pb-1">
                  <MapPin className="w-4 h-4 mt-1 text-[#B8A67D] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">
                      Uenal Immobilien GmbH
                    </div>
                    <span>
                      Carl-Benz-Str. 5<br />
                      26655 Westerstede
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-2 ">
                <Smartphone className="w-4 h-4 text-[#B8A67D] flex-shrink-0" />
                <a
                  href={CONTACT_INFO.phone.telHref}
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li className="pt-2 border-t border-gray-800">
                <WhatsAppButton
                  variant="inline"
                  text="Per WhatsApp schreiben"
                  className="w-full justify-center"
                />
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B8A67D] flex-shrink-0" />
                <a
                  href="mailto:info@uenal-immobilien.de"
                  className="hover:text-[#B8A67D] transition-colors"
                >
                  info@uenal-immobilien.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional SEO Links - 5 Kategorien - ganz unten */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Immobilienmakler */}
            <div>
              <h4 className="font-bold mb-4 text-[#B8A67D]">
                Immobilienmakler in
              </h4>
              <div className="flex flex-col gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/immobilienmakler/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-[#B8A67D] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Immobilie verkaufen */}
            <div>
              <h4 className="font-bold mb-4 text-[#B8A67D]">
                Immobilie verkaufen in
              </h4>
              <div className="flex flex-col gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/immobilie-verkaufen/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-[#B8A67D] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Haus verkaufen */}
            <div>
              <h4 className="font-bold mb-4 text-[#B8A67D]">
                Haus verkaufen in
              </h4>
              <div className="flex flex-col gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/haus-verkaufen/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-[#B8A67D] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Wohnung verkaufen */}
            <div>
              <h4 className="font-bold mb-4 text-[#B8A67D]">
                Wohnung verkaufen in
              </h4>
              <div className="flex flex-col gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/wohnung-verkaufen/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-[#B8A67D] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Immobilienbewertung */}
            <div>
              <h4 className="font-bold mb-4 text-[#B8A67D]">
                Immobilienbewertung in
              </h4>
              <div className="flex flex-col gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/immobilienbewertung/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-[#B8A67D] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Uenal Immobilien GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-[#B8A67D] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-[#B8A67D] transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="hover:text-[#B8A67D] transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/widerrufsbelehrung"
              className="hover:text-[#B8A67D] transition-colors"
            >
              Widerrufsbelehrung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
