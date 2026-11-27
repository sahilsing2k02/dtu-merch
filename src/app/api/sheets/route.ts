import { NextResponse } from "next/server";
import { appendToGoogleSheet, type SheetReservationPayload } from "@/utils/sheets";

export type { SheetReservationPayload };

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as SheetReservationPayload;
    const outcome = await appendToGoogleSheet(payload);
    return NextResponse.json({
      success: true,
      configured: outcome.configured,
      ...("result" in outcome ? { result: outcome.result } : {}),
    });
  } catch (err) {
    console.error("[Sheets API error]", err);
    return NextResponse.json(
      {
        success: false,
        configured: true,
        error: err instanceof Error ? err.message : "Failed to append reservation to Google Sheets",
      },
      { status: 502 }
    );
  }
}

