"use client";

import {
  Calendar,
  Clock,
  Home,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import {
  FormEvent,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

import { contactSubmissionSchema } from "../lib/contact-form-schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ApiResponse {
  message?: string;
  success?: boolean;
}

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const [callbackLoading, setCallbackLoading] =
    useState(false);

  const [propertyLoading, setPropertyLoading] =
    useState(false);

  const [callbackToken, setCallbackToken] =
    useState("");

  const [propertyToken, setPropertyToken] =
    useState("");

  const callbackFormRef =
    useRef<HTMLFormElement | null>(null);

  const propertyFormRef =
    useRef<HTMLFormElement | null>(null);

  const callbackTurnstileRef =
    useRef<TurnstileInstance | null>(null);

  const propertyTurnstileRef =
    useRef<TurnstileInstance | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const timeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ];

  const resetCallbackTurnstile = () => {
    setCallbackToken("");
    callbackTurnstileRef.current?.reset();
  };

  const resetPropertyTurnstile = () => {
    setPropertyToken("");
    propertyTurnstileRef.current?.reset();
  };

  async function submitContactForm(
    form: HTMLFormElement,
    formType: "callback" | "property",
    turnstileToken: string,
  ) {
    // Make sure Turnstile is completed
    if (!turnstileToken) {
      toast.error(
        "Bitte bestätigen Sie, dass Sie ein Mensch sind.",
      );
      return;
    }

    const formData = new FormData(form);

    const payload = Object.fromEntries(
      formData.entries(),
    );

    const validationResult =
      contactSubmissionSchema.safeParse({
        formType,
        ...payload,
      });

    if (!validationResult.success) {
      toast.error(
        validationResult.error.issues[0]?.message ||
          "Bitte prüfen Sie die Formularangaben.",
      );
      return;
    }

    if (formType === "callback") {
      setCallbackLoading(true);
    } else {
      setPropertyLoading(true);
    }

    try {
      let response: Response | null = await fetch(
        "https://alpa-backend-api.vercel.app/send-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...validationResult.data,

            // Cloudflare Turnstile token
            turnstileToken,
          }),
        },
      ).catch(() => null);

      // Fallback to internal /api/contact if external backend fails
      if (!response || !response.ok) {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validationResult.data),
        });
      }

      const result =
        (await response.json().catch(() => null)) as
          | ApiResponse
          | null;

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Die Anfrage konnte nicht gesendet werden.",
        );
      }

      toast.success(
        result?.message ||
          "Ihre Anfrage wurde erfolgreich versendet.",
      );

      form.reset();

      // Reset Turnstile after successful submission
      if (formType === "callback") {
        resetCallbackTurnstile();
      } else {
        resetPropertyTurnstile();
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden.";

      toast.error(message);

      // Token should not be reused
      if (formType === "callback") {
        resetCallbackTurnstile();
      } else {
        resetPropertyTurnstile();
      }
    } finally {
      if (formType === "callback") {
        setCallbackLoading(false);
      } else {
        setPropertyLoading(false);
      }
    }
  }

  function handleFormSubmit(
    event: FormEvent<HTMLFormElement>,
    formType: "callback" | "property",
  ) {
    event.preventDefault();
    event.stopPropagation();

    const token =
      formType === "callback"
        ? callbackToken
        : propertyToken;

    void submitContactForm(
      event.currentTarget,
      formType,
      token,
    );
  }

  function handleButtonSubmit(
    formType: "callback" | "property",
  ) {
    const form =
      formType === "callback"
        ? callbackFormRef.current
        : propertyFormRef.current;

    if (!form) {
      toast.error(
        "Formular konnte nicht geladen werden. Bitte Seite neu laden.",
      );
      return;
    }

    const token =
      formType === "callback"
        ? callbackToken
        : propertyToken;

    void submitContactForm(
      form,
      formType,
      token,
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* =====================================================
          CALLBACK FORM
      ====================================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <Phone className="w-8 h-8 text-[#B8A67D]" />

          <h3 className="text-2xl font-bold">
            Rückruf vereinbaren
          </h3>
        </div>

        <p className="text-gray-300 mb-8">
          Wählen Sie Ihren Wunschtermin und wir rufen Sie
          zurück – garantiert.
        </p>

        <form
          ref={callbackFormRef}
          className="space-y-6"
          onSubmit={(event) =>
            handleFormSubmit(event, "callback")
          }
          noValidate
        >
          {/* First + Last Name */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="callback-firstname"
                className="text-white mb-2 block"
              >
                Vorname *
              </Label>

              <Input
                id="callback-firstname"
                name="firstName"
                required
                placeholder="Max"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <Label
                htmlFor="callback-lastname"
                className="text-white mb-2 block"
              >
                Nachname *
              </Label>

              <Input
                id="callback-lastname"
                name="lastName"
                required
                placeholder="Mustermann"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <Label
              htmlFor="callback-phone"
              className="text-white mb-2 block"
            >
              Telefonnummer *
            </Label>

            <Input
              id="callback-phone"
              name="phone"
              type="tel"
              required
              placeholder="+49 ..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="callback-email"
              className="text-white mb-2 block"
            >
              E-Mail *
            </Label>

            <Input
              id="callback-email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Date */}
          <div>
            <Label
              htmlFor="callback-date"
              className="text-white mb-2 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B8A67D]" />
              Wunschdatum *
            </Label>

            <Input
              id="callback-date"
              name="date"
              type="date"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }
            />
          </div>

          {/* Time */}
          <div>
            <Label
              htmlFor="callback-time"
              className="text-white mb-2 flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-[#B8A67D]" />
              Gewünschte Uhrzeit *
            </Label>

            <select
              id="callback-time"
              name="time"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option
                value=""
                className="text-black"
              >
                Bitte wählen...
              </option>

              {timeSlots.map((slot) => (
                <option
                  key={slot}
                  value={slot}
                  className="text-black"
                >
                  {slot} Uhr
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <Label
              htmlFor="callback-message"
              className="text-white mb-2 block"
            >
              Ihre Nachricht (optional)
            </Label>

            <Textarea
              id="callback-message"
              name="message"
              placeholder="Worum geht es?"
              rows={3}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Turnstile */}
          <div className="flex justify-center py-2">
            {TURNSTILE_SITE_KEY ? (
              <Turnstile
                ref={callbackTurnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                options={{
                  theme: "dark",
                  size: "normal",
                  appearance: "always",
                  action: "callback",
                }}
                onSuccess={(token) => {
                  setCallbackToken(token);
                }}
                onExpire={() => {
                  setCallbackToken("");
                }}
                onError={() => {
                  setCallbackToken("");

                  toast.error(
                    "Die Sicherheitsprüfung konnte nicht geladen werden.",
                  );
                }}
              />
            ) : (
              <p className="text-red-400 text-sm">
                Sicherheitsprüfung ist nicht konfiguriert.
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="button"
            onClick={() =>
              handleButtonSubmit("callback")
            }
            disabled={
              callbackLoading ||
              !callbackToken
            }
            className="w-full bg-[#B8A67D] hover:bg-[#A39670] text-white text-lg py-6 disabled:opacity-60"
          >
            <Phone className="w-5 h-5 mr-2" />

            {callbackLoading
              ? "Wird gesendet..."
              : "Rückruf jetzt anfragen"}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            Wir melden uns zum gewünschten Zeitpunkt bei
            Ihnen.
          </p>
        </form>
      </motion.div>

      {/* =====================================================
          PROPERTY REQUEST FORM
      ====================================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-[#B8A67D] to-[#A39670] text-white rounded-2xl p-8 md:p-10"
        id="immobilienwunsch"
      >
        <div className="flex items-center gap-3 mb-6">
          <Home className="w-8 h-8 text-white" />

          <h3 className="text-2xl font-bold">
            Immobilienwunsch hinterlassen
          </h3>
        </div>

        <p className="text-white/90 mb-8">
          Teilen Sie uns mit, welche Art von Immobilie Sie
          suchen oder verkaufen möchten.
        </p>

        <form
          ref={propertyFormRef}
          className="space-y-6"
          onSubmit={(event) =>
            handleFormSubmit(event, "property")
          }
          noValidate
        >
          {/* First + Last Name */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="property-firstname"
                className="text-white mb-2 block"
              >
                Vorname *
              </Label>

              <Input
                id="property-firstname"
                name="firstName"
                required
                placeholder="Max"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>

            <div>
              <Label
                htmlFor="property-lastname"
                className="text-white mb-2 block"
              >
                Nachname *
              </Label>

              <Input
                id="property-lastname"
                name="lastName"
                required
                placeholder="Mustermann"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="property-email"
              className="text-white mb-2 block"
            >
              E-Mail *
            </Label>

            <Input
              id="property-email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
          </div>

          {/* Phone */}
          <div>
            <Label
              htmlFor="property-phone"
              className="text-white mb-2 block"
            >
              Telefon *
            </Label>

            <Input
              id="property-phone"
              name="phone"
              type="tel"
              required
              placeholder="+49 ..."
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
          </div>

          {/* Property Type */}
          <div>
            <Label
              htmlFor="property-type"
              className="text-white mb-2 block"
            >
              Ich möchte *
            </Label>

            <select
              id="property-type"
              name="propertyType"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white"
            >
              <option
                value=""
                className="text-black"
              >
                Bitte wählen...
              </option>

              <option
                value="sell"
                className="text-black"
              >
                Immobilie verkaufen
              </option>

              <option
                value="buy"
                className="text-black"
              >
                Immobilie kaufen
              </option>

              <option
                value="valuation"
                className="text-black"
              >
                Immobilie bewerten lassen
              </option>
            </select>
          </div>

          {/* Location */}
          <div>
            <Label
              htmlFor="property-location"
              className="text-white mb-2 block"
            >
              Gewünschte Region
            </Label>

            <Input
              id="property-location"
              name="location"
              placeholder="z.B. Hamburg, Bremen, Oldenburg..."
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
          </div>

          {/* Details */}
          <div>
            <Label
              htmlFor="property-details"
              className="text-white mb-2 block"
            >
              Details zu Ihrer Anfrage
            </Label>

            <Textarea
              id="property-details"
              name="details"
              placeholder="Beschreiben Sie Ihre Immobilie oder Ihren Wunsch..."
              rows={3}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
          </div>

          {/* Turnstile */}
          <div className="flex justify-center py-2">
            {TURNSTILE_SITE_KEY ? (
              <Turnstile
                ref={propertyTurnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                options={{
                  theme: "light",
                  size: "normal",
                  appearance: "always",
                  action: "property",
                }}
                onSuccess={(token) => {
                  setPropertyToken(token);
                }}
                onExpire={() => {
                  setPropertyToken("");
                }}
                onError={() => {
                  setPropertyToken("");

                  toast.error(
                    "Die Sicherheitsprüfung konnte nicht geladen werden.",
                  );
                }}
              />
            ) : (
              <p className="text-red-400 text-sm">
                Sicherheitsprüfung ist nicht konfiguriert.
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="button"
            onClick={() =>
              handleButtonSubmit("property")
            }
            disabled={
              propertyLoading ||
              !propertyToken
            }
            className="w-full bg-black hover:bg-gray-900 text-white text-lg py-6 disabled:opacity-60"
          >
            <MessageCircle className="w-5 h-5 mr-2" />

            {propertyLoading
              ? "Wird gesendet..."
              : "Anfrage senden"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}