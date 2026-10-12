import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  contactSubmissionSchema,
  type ContactSubmission,
} from "../../lib/contact-form-schema";

export const runtime = "nodejs";
export const maxDuration = 15;

const recipientEmail =
  process.env.CONTACT_RECIPIENT_EMAIL || "info@uenal-immobilien.de";
const rawSmtpHosts = process.env.SMTP_HOSTS || process.env.SMTP_HOST || "mx2ea5.netcup.net";
const smtpHosts = rawSmtpHosts
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);
const smtpUser = process.env.SMTP_USER || "info@uenal-immobilien.de";
const smtpPass = process.env.SMTP_PASS || "fWck*4918";
const smtpConnectionTimeout = Number(
  process.env.SMTP_CONNECTION_TIMEOUT_MS || 12000,
);
const smtpGreetingTimeout = Number(
  process.env.SMTP_GREETING_TIMEOUT_MS || 15000,
);
const smtpSocketTimeout = Number(process.env.SMTP_SOCKET_TIMEOUT_MS || 20000);
const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value?: string) {
  const trimmed = value?.trim();

  return trimmed ? escapeHtml(trimmed) : "Nicht angegeben";
}

type SmtpTarget = {
  host: string;
  port: number;
  secure: boolean;
  requireTLS?: boolean;
};

function getSmtpTargets(): SmtpTarget[] {
  const explicitPort = Number(process.env.SMTP_PORT || 587);

  if (smtpHosts.length === 0 || !smtpUser || !smtpPass) {
    throw new Error("SMTP configuration is incomplete.");
  }

  return smtpHosts.flatMap((host) => {
    if (explicitPort === 465) {
      return [
        { host, port: 465, secure: true },
        { host, port: 587, secure: false, requireTLS: false },
      ];
    }

    if (explicitPort === 587) {
      return [
        { host, port: 587, secure: false, requireTLS: false },
        { host, port: 465, secure: true },
      ];
    }

    if (explicitPort > 0) {
      return [{ host, port: explicitPort, secure: explicitPort === 465 }];
    }

    return [
      { host, port: 587, secure: false, requireTLS: false },
      { host, port: 465, secure: true },
    ];
  });
}

async function sendMailWithFallback(mailOptions: nodemailer.SendMailOptions) {
  let lastError: unknown;

  for (const target of getSmtpTargets()) {
    const transporter = nodemailer.createTransport({
      host: target.host,
      port: target.port,
      secure: target.secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: smtpConnectionTimeout,
      greetingTimeout: smtpGreetingTimeout,
      socketTimeout: smtpSocketTimeout,
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.sendMail(mailOptions);
      return;
    } catch (error) {
      lastError = error;
      console.error("SMTP attempt failed", {
        host: target.host,
        port: target.port,
        secure: target.secure,
        code: (error as { code?: string })?.code,
        responseCode: (error as { responseCode?: number })?.responseCode,
        message: (error as Error)?.message,
      });
    }
  }

  throw lastError || new Error("SMTP send failed.");
}

async function sendMailWithSendmail(mailOptions: nodemailer.SendMailOptions) {
  const sendmailPath = process.env.SENDMAIL_PATH || "/usr/sbin/sendmail";
  const transporter = nodemailer.createTransport({
    sendmail: true,
    path: sendmailPath,
    newline: "unix",
  });

  await transporter.sendMail(mailOptions);
}

async function sendMailWithResend(mailOptions: nodemailer.SendMailOptions) {
  if (!resendApiKey || !resendFromEmail) {
    throw new Error("Resend fallback is not configured.");
  }

  const to = Array.isArray(mailOptions.to)
    ? mailOptions.to
    : [mailOptions.to].filter(Boolean);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to,
      subject: mailOptions.subject,
      html: mailOptions.html,
      text: mailOptions.text,
      reply_to: mailOptions.replyTo,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${body}`);
  }
}

async function deliverMail(mailOptions: nodemailer.SendMailOptions) {
  const errors: string[] = [];

  try {
    await sendMailWithFallback(mailOptions);
    return;
  } catch (error) {
    const message = (error as Error)?.message || "Unknown SMTP error";
    errors.push(`smtp: ${message}`);
  }

  try {
    await sendMailWithSendmail(mailOptions);
    return;
  } catch (error) {
    const message = (error as Error)?.message || "Unknown sendmail error";
    errors.push(`sendmail: ${message}`);
  }

  try {
    await sendMailWithResend(mailOptions);
    return;
  } catch (error) {
    const message = (error as Error)?.message || "Unknown resend error";
    errors.push(`resend: ${message}`);
  }

  throw new Error(errors.join(" | "));
}

function buildRows(rows: Array<{ label: string; value?: string }>) {
  return rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding: 0 0 12px; color: #6b7280; width: 180px; vertical-align: top;">${escapeHtml(label)}</td>
          <td style="padding: 0 0 12px; color: #111827; font-weight: 600; vertical-align: top;">${formatValue(value)}</td>
        </tr>
      `,
    )
    .join("");
}

function buildHtmlEmail(submission: ContactSubmission) {
  const isCallback = submission.formType === "callback";
  const title = isCallback
    ? "Neuer Rückrufwunsch über das Kontaktformular"
    : "Neue Immobilienanfrage über das Kontaktformular";

  const leadName =
    [submission.firstName, submission.lastName].filter(Boolean).join(" ") ||
    "Unbekannt";

  const rows = isCallback
    ? buildRows([
        { label: "Name", value: leadName },
        { label: "E-Mail", value: submission.email },
        { label: "Telefon", value: submission.phone },
        { label: "Wunschdatum", value: submission.date },
        { label: "Wunschzeit", value: submission.time },
        { label: "Nachricht", value: submission.message },
      ])
    : buildRows([
        { label: "Name", value: leadName },
        { label: "E-Mail", value: submission.email },
        { label: "Telefon", value: submission.phone },
        { label: "Anliegen", value: submission.propertyType },
        { label: "Region", value: submission.location },
        { label: "Details", value: submission.details },
      ]);

  const summary = isCallback
    ? "Ein Besucher möchte einen Rückruf zu einem frei gewählten Zeitpunkt vereinbaren."
    : "Ein Besucher hat eine Immobilienanfrage oder einen Verkaufswunsch eingereicht.";

  const accent = isCallback ? "#111111" : "#B8A67D";

  return `
    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(title)}</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 20px 40px rgba(17,24,39,0.08);">
                <tr>
                  <td style="background:linear-gradient(135deg, ${accent} 0%, #1f2937 100%);padding:32px 36px;color:#ffffff;">
                    <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.8;margin-bottom:12px;">Uenal Immobilien GmbH</div>
                    <div style="font-size:28px;font-weight:700;line-height:1.2;margin:0 0 8px;">${escapeHtml(title)}</div>
                    <div style="font-size:15px;line-height:1.6;opacity:.92;max-width:560px;">${escapeHtml(summary)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${rows}
                    </table>
                    <div style="margin-top:20px;padding:18px 20px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;color:#374151;line-height:1.7;">
                      <div style="font-weight:700;color:#111827;margin-bottom:6px;">Schnelle Einordnung</div>
                      ${isCallback ? "Der Interessent erwartet einen Rückruf zum angegebenen Termin." : "Die Anfrage sollte zeitnah persönlich bearbeitet werden."}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 36px 32px;color:#6b7280;font-size:13px;line-height:1.6;">
                    Diese Nachricht wurde automatisch über das Kontaktformular auf uenal-immobilien.de erstellt.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function buildTextEmail(submission: ContactSubmission) {
  const leadName =
    [submission.firstName, submission.lastName].filter(Boolean).join(" ") ||
    "Unbekannt";

  return [
    submission.formType === "callback"
      ? "Neuer Rückrufwunsch über das Kontaktformular"
      : "Neue Immobilienanfrage über das Kontaktformular",
    "",
    `Name: ${leadName}`,
    `E-Mail: ${submission.email || "Nicht angegeben"}`,
    `Telefon: ${submission.phone || "Nicht angegeben"}`,
    submission.formType === "callback"
      ? `Wunschdatum: ${submission.date || "Nicht angegeben"}`
      : `Anliegen: ${submission.propertyType || "Nicht angegeben"}`,
    submission.formType === "callback"
      ? `Wunschzeit: ${submission.time || "Nicht angegeben"}`
      : `Region: ${submission.location || "Nicht angegeben"}`,
    submission.formType === "callback"
      ? `Nachricht: ${submission.message || "Nicht angegeben"}`
      : `Details: ${submission.details || "Nicht angegeben"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const payloadResult = contactSubmissionSchema.safeParse(
      await request.json(),
    );

    if (!payloadResult.success) {
      return NextResponse.json(
        {
          message:
            payloadResult.error.issues[0]?.message ||
            "Bitte prüfen Sie die Formularangaben.",
        },
        { status: 400 },
      );
    }

    const payload: ContactSubmission = payloadResult.data;

    const senderName = "Uenal Immobilien Website";
    const replyTo = payload.email?.trim();
    const senderEmail = smtpUser || resendFromEmail || recipientEmail;

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${senderName}" <${senderEmail}>`,
      to: recipientEmail,
      replyTo,
      subject:
        payload.formType === "callback"
          ? `Rückrufanfrage von ${payload.firstName.trim()} ${payload.lastName.trim()}`
          : `Immobilienanfrage von ${payload.firstName.trim()} ${payload.lastName.trim()}`,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    };

    await deliverMail(mailOptions);

    return NextResponse.json({
      message: "Ihre Anfrage wurde erfolgreich versendet.",
    });
  } catch (error) {
    console.error("Contact form mail error:", {
      code: (error as { code?: string })?.code,
      responseCode: (error as { responseCode?: number })?.responseCode,
      message: (error as Error)?.message,
    });

    return NextResponse.json(
      {
        message:
          "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }
}
