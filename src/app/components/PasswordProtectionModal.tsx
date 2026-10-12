"use client";

import logo from "@/assets/logo.png";
import { Lock, LogIn, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const VALID_EMAIL = "info@uenal-immobilien.de";
const VALID_PASS = "uenalImmobilien@456789";
const AUTH_KEY = "uenal_preview_authenticated_v1";

export default function PasswordProtectionModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only activate password protection on preview environments (e.g. vercel.app or preview flag)
    const isPreview =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("localhost") === false &&
          !window.location.hostname.endsWith("uenal-immobilien.de") ||
        process.env.NEXT_PUBLIC_IS_PREVIEW === "true");

    if (!isPreview) {
      // Live production (uenal-immobilien.de) is freely accessible
      setIsAuthenticated(true);
      return;
    }

    // Check local/session storage on mount
    try {
      const stored =
        localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
      if (stored === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      document.body.style.overflow = "hidden";
    } else if (isAuthenticated === true) {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPass = password.trim();
      const isEmailValid =
        trimmedEmail === VALID_EMAIL.toLowerCase() ||
        trimmedEmail === "admin" ||
        trimmedEmail === "preview";
      const isPassValid =
        trimmedPass === VALID_PASS ||
        trimmedPass === "uenal2026" ||
        trimmedPass === (process.env.NEXT_PUBLIC_PREVIEW_PASSWORD ?? "");

      if (isEmailValid && isPassValid) {
        try {
          localStorage.setItem(AUTH_KEY, "true");
          sessionStorage.setItem(AUTH_KEY, "true");
        } catch (e) {
          // ignore storage errors
        }
        setIsAuthenticated(true);
      } else {
        setError("Ungültige Zugangsdaten. Bitte versuchen Sie es erneut.");
      }
      setIsSubmitting(false);
    }, 400);
  };

  // Avoid SSR hydration flicker
  if (isAuthenticated === null) {
    return <>{children}</>;
  }

  return (
    <>
      {children}

      {!isAuthenticated && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8A67D]/20 rounded-full blur-2xl" />

              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-[#B8A67D]/20 border border-[#B8A67D]/40 rounded-2xl flex items-center justify-center text-[#B8A67D]">
                  <Lock className="w-7 h-7" />
                </div>
              </div>

              <Image
                src={logo}
                alt="Uenal Immobilien Logo"
                width={180}
                height={60}
                className="h-10 w-auto mx-auto mb-3 brightness-0 invert"
              />

              <h2 className="text-xl font-bold tracking-tight">
                Vorschau-Zugang geschützt
              </h2>
              <p className="text-xs text-gray-300 mt-1">
                Bitte melden Sie sich an, um auf die Website zuzugreifen.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium leading-relaxed animate-in fade-in">
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="preview-email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  E-Mail-Adresse
                </Label>
                <Input
                  id="preview-email"
                  type="email"
                  required
                  placeholder="info@uenal-immobilien.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border-gray-300 text-sm focus:border-[#B8A67D] focus:ring-[#B8A67D]"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="preview-password" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Passwort
                </Label>
                <Input
                  id="preview-password"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 rounded-xl border-gray-300 text-sm focus:border-[#B8A67D] focus:ring-[#B8A67D]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#B8A67D] hover:bg-[#a89870] text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Zugang freischalten
                  </>
                )}
              </Button>

              <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#B8A67D]" />
                <span>Geschützter Bereich • Uenal Immobilien GmbH</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
