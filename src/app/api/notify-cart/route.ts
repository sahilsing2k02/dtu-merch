import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TARGET_EMAIL = "merchdtudce@gmail.com";

// Gmail SMTP with App Password — set these in Vercel env vars + .env.local
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || TARGET_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD || "",
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const subject = data._subject || "DTU Merch – New Order";

    // Build a readable HTML table from the payload
    const rows = Object.entries(data)
      .filter(([k]) => !k.startsWith("_"))
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;border-bottom:1px solid #eee">${k.replace(/_/g, " ")}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${v}</td></tr>`)
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#781215">${subject}</h2>
        <table style="border-collapse:collapse;width:100%">${rows}</table>
        <p style="margin-top:16px;color:#666;font-size:12px">Sent automatically by DTU Merch</p>
      </div>`;

    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("[Notify] GMAIL_APP_PASSWORD env var is not set — email skipped");
      return NextResponse.json({ success: false, error: "Email not configured" }, { status: 500 });
    }

    await transporter.sendMail({
      from: `"DTU Merch" <${process.env.GMAIL_USER || TARGET_EMAIL}>`,
      to: TARGET_EMAIL,
      subject,
      html,
    });

    console.log(`[DTU Merch] Email sent for: ${subject}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Notify API error]", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
