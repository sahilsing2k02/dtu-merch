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

function parseRupeeAmount(val: unknown): number {
  const digits = String(val ?? "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

export function sheetPayloadFromNotifyFields(
  fields: Record<string, unknown>
): SheetReservationPayload {
  const itemsOrdered = String(fields.Items_Ordered || "");
  const jerseysByProduct = String(fields.Jerseys_By_Product || "");
  const low = `${jerseysByProduct} ${itemsOrdered}`.toLowerCase();

  const types: string[] = [];
  if (low.includes("minimo") || low.includes("plain")) types.push("Minimo");
  if (low.includes("classico") || low.includes("1941")) types.push("Classico");
  const hoodieType = types.join(" + ") || "Hoodie";

  const hasCustomization =
    itemsOrdered.includes("•") && !itemsOrdered.split("|").every((p) => p.includes("• Standard"));

  const payer = String(fields.Payer_Name_Or_UPI_ID || "").trim();
  const paymentApp = String(fields.Payment_App || "").trim();
  const upiAppAndPayer =
    payer && payer.toLowerCase() !== "not specified"
      ? `${paymentApp} (${payer})`
      : paymentApp;

  const totalQty = String(fields.Total_Hoodies_Jerseys || "").trim();
  const totalAmountStr = String(fields.Total_Amount || "").trim();

  return {
    reservationId: String(fields.Reservation_ID || ""),
    customerName: String(fields.Student_Name || ""),
    whatsappNumber: String(fields.WhatsApp_Phone || "").replace(/^\+?91\s*/, "").trim(),
    advanceAmount: parseRupeeAmount(fields.Advance_Paid_Now),
    utr: String(fields.UPI_Transaction_ID_UTR || ""),
    hoodieType,
    hasCustomization,
    customizationDetails: itemsOrdered || "No customization",
    balanceAmount: parseRupeeAmount(fields.Balance_On_Collection),
    orderSummary: `${totalQty || "1"} total (${jerseysByProduct || hoodieType}) • ${totalAmountStr}`,
    rollNoAndBranch: `${String(fields.DTU_Roll_Number || "")} • ${String(fields.Branch_and_Year || "")}`,
    upiAppAndPayer,
    totalAmount: parseRupeeAmount(fields.Total_Amount),
    pickupPoint: String(fields.Pickup_Point || ""),
    timestampIst: String(fields["Timestamp (IST)"] || ""),
  };
}

export async function appendToGoogleSheet(payload: SheetReservationPayload) {
  const webhookUrl = (process.env.GOOGLE_SHEETS_WEBHOOK_URL || "").trim();
  if (!webhookUrl) {
    console.warn("[Sheets] GOOGLE_SHEETS_WEBHOOK_URL is not configured; skipping sheet append.");
    return { ok: true as const, configured: false as const };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Webhook returned HTTP ${res.status}: ${text.slice(0, 200)}`);
  }

  const text = await res.text();
  let json: { ok?: boolean; row?: number; error?: string } | null = null;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Webhook returned non-JSON response: ${text.slice(0, 120)}`);
  }

  if (!json?.ok) {
    throw new Error(json?.error || "Apps Script returned ok: false");
  }

  return { ok: true as const, configured: true as const, result: json };
}
