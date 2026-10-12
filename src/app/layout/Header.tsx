"use client";

import logo from "@/assets/logo.png";
import { CONTACT_INFO } from "@/constants/contact";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/immobilien", label: "Immobilien" },
    { path: "/leistungen", label: "Leistungen" },
    { path: "/referenzen", label: "Referenzen" },
    { path: "/ueber-uns", label: "Über uns" },
    { path: "/karriere", label: "Karriere" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#B8A67D]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="Uenal Immobilien Logo"
              width={220}
              height={72}
              priority
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-black tracking-tight">
                Uenal Immobilien GmbH
              </div>
              <div className="text-xs text-[#B8A67D] font-medium">
                Die Dealmaker aus dem Nordwesten
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Immobilien", path: "/immobilien" },
              { name: "Leistungen", path: "/leistungen" },
              { name: "Referenzen", path: "/referenzen" },
              { name: "Über uns", path: "/ueber-uns" },
              { name: "Karriere", path: "/karriere" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#B8A67D] ${isActive(link.path) ? "text-[#B8A67D]" : "text-black"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CONTACT_INFO.phone.telHref}
              aria-label={`Jetzt anrufen ${CONTACT_INFO.phone.display}`}
            >
              <Button className="bg-[#B8A67D] hover:bg-[#A39670] text-white">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Navigation schließen" : "Navigation öffnen"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden pt-4 pb-2 flex flex-col gap-4"
            id="mobile-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-[#B8A67D] ${isActive(item.path) ? "text-[#B8A67D]" : "text-black"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={CONTACT_INFO.phone.telHref} className="mt-2">
              <Button className="w-full bg-[#B8A67D] hover:bg-[#A39670] text-white">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
