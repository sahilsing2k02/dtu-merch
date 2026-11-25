import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const TARGET_EMAIL = "merchdtudce@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const subject = data._subject || "DTU Merch – New Order";

    const rows = Object.entries(data)
      .filter(([k]) => !k.startsWith("_"))
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 14px;font-weight:600;border-bottom:1px solid #eee;color:#333">${k.replace(/_/g, " ")}</td><td style="padding:8px 14px;border-bottom:1px solid #eee">${v}</td></tr>`
      )
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#781215;margin-bottom:4px">${subject}</h2>
        <p style="color:#666;margin-top:0;font-size:13px">New order / reservation details from DTU Merch</p>
        <table style="border-collapse:collapse;width:100%;margin:16px 0">${rows}</table>
        <p style="color:#999;font-size:11px">Sent automatically by DTU Merch · dtu-merch.vercel.app</p>
      </div>`;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: "DTU Merch <onboarding@resend.dev>",
        to: TARGET_EMAIL,
        subject,
        html,
      });
      if (error) {
        console.error("[Notify] Resend error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, provider: "resend" });
    }

    if (process.env.GMAIL_APP_PASSWORD) {
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
      });
      return NextResponse.json({ success: true, provider: "gmail" });
    }

    console.error("[Notify] Neither RESEND_API_KEY nor GMAIL_APP_PASSWORD is set");
    return NextResponse.json({ success: false, error: "Email not configured" }, { status: 500 });
  } catch (err) {
    console.error("[Notify API error]", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
