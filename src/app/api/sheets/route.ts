import { NextResponse } from "next/server";

export interface SheetReservationPayload {
  reservationId: string;
  customerName: string;
  whatsappNumber: string;
  advanceAmount: number;
  utr: string;
  hoodieType: string;
  hasCustomization: boolean;
  customizationDetails: string;
  balanceAmount: number;
  orderSummary: string;
  rollNoAndBranch: string;
  upiAppAndPayer: string;
  totalAmount: number;
  pickupPoint: string;
  timestampIst: string;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as SheetReservationPayload;
    const webhookUrl = (process.env.GOOGLE_SHEETS_WEBHOOK_URL || "").trim();

    if (!webhookUrl) {
      console.warn("[Sheets] GOOGLE_SHEETS_WEBHOOK_URL is not configured; skipping sheet append.");
      return NextResponse.json({ success: true, configured: false });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Sheets] Webhook HTTP error:", res.status, text.slice(0, 300));
      return NextResponse.json(
        { success: false, configured: true, error: `Webhook returned HTTP ${res.status}` },
        { status: 502 }
      );
    }

    const json = await res.json().catch(() => ({ ok: true }));
    return NextResponse.json({ success: true, configured: true, result: json });
  } catch (err) {
    console.error("[Sheets API error]", err);
    return NextResponse.json(
      { success: false, error: "Failed to append reservation to Google Sheets" },
      { status: 500 }
    );
  }
}

