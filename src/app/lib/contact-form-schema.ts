import { z } from "zod";

const optionalText = z.preprocess((value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}, z.string().optional());

const requiredText = z
  .string()
  .trim()
  .min(1, "Bitte füllen Sie alle Pflichtfelder aus.");

const requiredEmailField = z.preprocess((value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  return trimmed;
}, z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an."));

const callbackSubmissionSchema = z.object({
  formType: z.literal("callback"),
  firstName: requiredText,
  lastName: requiredText,
  email: requiredEmailField,
  phone: requiredText,
  date: requiredText,
  time: requiredText,
  message: optionalText,
});

const propertySubmissionSchema = z.object({
  formType: z.literal("property"),
  firstName: requiredText,
  lastName: requiredText,
  email: requiredEmailField,
  phone: requiredText,
  propertyType: z.enum(["sell", "buy", "valuation"] as const, {
    message: "Bitte wählen Sie ein Anliegen aus.",
  }),
  location: optionalText,
  details: optionalText,
});

export const contactSubmissionSchema = z.discriminatedUnion("formType", [
  callbackSubmissionSchema,
  propertySubmissionSchema,
]);

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
