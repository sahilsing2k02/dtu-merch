import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const TARGET_EMAIL = "merchdtudce@gmail.com";

function parseDataUrl(dataUrl: string): { mime: string; buffer: Buffer; base64: string } | null {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return null;
  const base64 = match[2];
  return { mime: match[1], base64, buffer: Buffer.from(base64, "base64") };
}

async function sendViaWeb3Forms(
  accessKey: string,
  subject: string,
  fields: Record<string, unknown>,
  parsedAttachment: { mime: string; buffer: Buffer } | null,
  attachmentName: string
) {
  // Attempt multipart upload first (works on Web3Forms Pro with file attachments)
  if (parsedAttachment) {
    try {
      const form = new FormData();
      form.append("access_key", accessKey);
      form.append("subject", subject);
      form.append("from_name", "DTU Merch Store");
      for (const [k, v] of Object.entries(fields)) {
        if (v != null) form.append(k, String(v));
      }
      const blob = new Blob([new Uint8Array(parsedAttachment.buffer)], { type: parsedAttachment.mime });
      form.append("attachment", blob, attachmentName);

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) return { ok: true as const, withAttachment: true };
      // If attachment is blocked on free tier, fall through to JSON submission
      console.warn("[Notify] Web3Forms multipart failed, falling back to text payload:", json?.message || res.status);
    } catch (err) {
      console.warn("[Notify] Web3Forms multipart error:", err);
    }
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "DTU Merch Store",
      ...fields,
      ...(parsedAttachment ? { Payment_Screenshot_File: attachmentName } : {}),
    }),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success) {
    throw new Error(json?.message || `Web3Forms HTTP ${res.status}`);
  }
  return { ok: true as const, withAttachment: false };
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const subject = String(data._subject || "DTU Merch – New Order");
    const attachmentDataUrl = typeof data._attachmentDataUrl === "string" ? data._attachmentDataUrl : "";
    const attachmentName = typeof data._attachmentName === "string" ? data._attachmentName : "payment-screenshot.jpg";
    const parsedAttachment = attachmentDataUrl ? parseDataUrl(attachmentDataUrl) : null;

    const fields = Object.fromEntries(Object.entries(data).filter(([k]) => !k.startsWith("_")));

    const rows = Object.entries(fields)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 14px;font-weight:600;border-bottom:1px solid #eee;color:#333">${k.replace(/_/g, " ")}</td><td style="padding:8px 14px;border-bottom:1px solid #eee">${String(v ?? "")}</td></tr>`
      )
      .join("");

    const screenshotHtml = parsedAttachment
      ? `<div style="margin-top:16px"><p style="font-weight:600;color:#333;margin-bottom:8px">Payment Screenshot (${attachmentName}):</p><p style="color:#666;font-size:12px">See attached image file.</p></div>`
      : "";

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#781215;margin-bottom:4px">${subject}</h2>
        <p style="color:#666;margin-top:0;font-size:13px">New order / payment details from DTU Merch</p>
        <table style="border-collapse:collapse;width:100%;margin:16px 0">${rows}</table>
        ${screenshotHtml}
        <p style="color:#999;font-size:11px">Sent automatically by DTU Merch · dtu-merch.vercel.app</p>
      </div>`;

    const providers: string[] = [];
    const errors: string[] = [];

    const web3Key = (process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "").trim();
    if (web3Key && !data._skipWeb3Forms) {
      try {
        await sendViaWeb3Forms(web3Key, subject, fields, parsedAttachment, attachmentName);
        providers.push("web3forms");
      } catch (err) {
        errors.push(`web3forms: ${err instanceof Error ? err.message : String(err)}`);
      }
    } else if (data._skipWeb3Forms) {
      providers.push("web3forms-client");
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: "DTU Merch <onboarding@resend.dev>",
          to: TARGET_EMAIL,
          subject,
          html,
          ...(parsedAttachment
            ? { attachments: [{ filename: attachmentName, content: parsedAttachment.buffer }] }
            : {}),
        });
        if (error) throw new Error(error.message);
        providers.push("resend");
      } catch (err) {
        errors.push(`resend: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (process.env.GMAIL_APP_PASSWORD && providers.length === 0) {
      try {
        const user = (process.env.GMAIL_USER || TARGET_EMAIL).trim();
        const pass = process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, "");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user, pass },
        });
        await transporter.sendMail({
          from: `"DTU Merch" <${user}>`,
          to: TARGET_EMAIL,
          subject,
          html,
          ...(parsedAttachment
            ? {
                attachments: [
                  { filename: attachmentName, content: parsedAttachment.buffer, contentType: parsedAttachment.mime },
                ],
              }
            : {}),
        });
        providers.push("gmail");
      } catch (err) {
        errors.push(`gmail: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (providers.length > 0) {
      return NextResponse.json({ success: true, providers });
    }

    console.error("[Notify] No provider succeeded:", errors.length ? errors : ["No WEB3FORMS_ACCESS_KEY / RESEND_API_KEY / GMAIL_APP_PASSWORD configured"]);
    return NextResponse.json(
      { success: false, error: errors[0] || "Email not configured (set WEB3FORMS_ACCESS_KEY)" },
      { status: 500 }
    );
  } catch (err) {
    console.error("[Notify API error]", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
