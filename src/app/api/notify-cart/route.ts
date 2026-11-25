import { NextResponse } from "next/server";
import { Resend } from "resend";

const TARGET_EMAIL = "merchdtudce@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const subject = data._subject || "DTU Merch – New Order";

    if (!process.env.RESEND_API_KEY) {
      console.error("[Notify] RESEND_API_KEY env var is not set");
      return NextResponse.json({ success: false, error: "Email not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build a readable HTML table from the payload
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
        <p style="color:#666;margin-top:0;font-size:13px">You have a new order on DTU Merch</p>
        <table style="border-collapse:collapse;width:100%;margin:16px 0">${rows}</table>
        <p style="color:#999;font-size:11px">Sent automatically by DTU Merch · dtu-merch.vercel.app</p>
      </div>`;

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

    console.log(`[DTU Merch] Email sent: ${subject}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Notify API error]", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
