import { NextResponse } from "next/server";

const TARGET_EMAIL = "merchdtudce@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const origin = req.headers.get("origin") || req.headers.get("referer") || "http://localhost:3000";

    // Forward to FormSubmit from server with proper Referer
    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: origin,
          Origin: origin,
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error("[Notify API server-side dispatch error]", e);
    }

    console.log(`[DTU Merch] Notification logged for ${TARGET_EMAIL}:`, data._subject || "Add to Cart");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Notify API route error]", err);
    return NextResponse.json({ success: false, error: "Failed to dispatch notification" }, { status: 500 });
  }
}
