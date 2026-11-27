"use client";

import { useState, type FormEvent } from "react";
import { X, CheckCircle, MessageCircle, Minus, Plus } from "lucide-react";
import { useCart, getItemAdvancePerUnit, calculateCheckoutTotals } from "@/store/cart-context";
import { HOODIE_DESIGNS, PICKUP_POINTS } from "@/data/products";
import { sendEmailNotification } from "@/utils/notify";

function createReservationId(): string {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return `DTU-${1000 + (bytes[0] % 9000)}`;
}

interface Props {
  onClose: () => void;
  appliedCoupon?: string;
}

export default function ReservationForm({ onClose, appliedCoupon }: Props) {
  const { items, updateQty, clearCart } = useCart();
  const {
    totalItems,
    subtotal,
    couponDiscount,
    bulkPerUnit,
    bulkDiscount,
    finalTotal: effectiveTotal,
    advancePayable,
    balanceAmount,
  } = calculateCheckoutTotals(items, !!appliedCoupon);

  // Compute jersey / hoodie counts grouped by each product edition
  const productCounts = HOODIE_DESIGNS.map((design) => ({
    id: design.id,
    title: design.title,
    tag: design.editionTag,
    qty: items
      .filter((i) => i.productId === design.id || i.name.toLowerCase() === design.title.toLowerCase())
      .reduce((s, i) => s + i.qty, 0),
  }));
  const matchedIds = new Set(productCounts.map((p) => p.id));
  const matchedNames = new Set(productCounts.map((p) => p.title.toLowerCase()));
  const extraQty = items
    .filter((i) => !matchedIds.has(i.productId) && !matchedNames.has(i.name.toLowerCase()))
    .reduce((s, i) => s + i.qty, 0);
  if (extraQty > 0) {
    productCounts.push({ id: "other", title: "Other Edition", tag: "Custom", qty: extraQty });
  }
  const productSummaryLabel = productCounts
    .filter((p) => p.qty > 0)
    .map((p) => `${p.title}: ${p.qty}`)
    .join(", ");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [reservationId, setReservationId] = useState("");
  const [formError, setFormError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    rollNo: "",
    branch: "",
    pickup: PICKUP_POINTS[0],
    utr: "",
    upiApp: "Google Pay (GPay)",
    payerUpiId: "",
  });

  const set = (key: string, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handlePhoneChange = (raw: string) => {
    let digits = raw.replace(/\D/g, "");
    if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
    set("phone", digits.slice(0, 10));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (items.length === 0 || totalItems === 0) {
      setFormError("Your bag is empty. Add at least one hoodie before confirming.");
      return;
    }

    const cleanName = form.name.trim();
    const cleanRollNo = form.rollNo.trim();
    const cleanBranch = form.branch.trim();
    const cleanUtr = form.utr.trim();
    if (!cleanName || !cleanRollNo || !cleanBranch || !cleanUtr) {
      setFormError("Please fill in your name, roll number, branch & year, and UPI UTR.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setFormError("Please enter an exact 10-digit WhatsApp number after +91.");
      return;
    }

    setSubmitting(true);
    const id = createReservationId();
    setReservationId(id);

    const fullPhone = `+91 ${form.phone}`;
    const timestampIst = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const uniqueTypes = Array.from(
      new Set(
        items.map((i) => {
          const low = `${i.productId} ${i.name}`.toLowerCase();
          if (low.includes("minimo") || low.includes("design-2") || low.includes("plain")) return "Minimo";
          if (low.includes("classico") || low.includes("1941")) return "Classico";
          return i.name;
        })
      )
    );
    const hoodieTypeLabel = uniqueTypes.join(" + ") || productSummaryLabel || "Hoodie";

    const itemCustomParts = items.map((i) => {
      const hasCustom =
        typeof i.customName === "string"
          ? i.customName.trim().length > 0
          : i.color.includes("•") && !i.color.endsWith("• Standard");
      const customText = hasCustom
        ? i.color.replace(/^(Minimo|Classico)\s*•\s*/i, "").trim()
        : "No customization";
      return `${i.name} (${i.size} × ${i.qty}): ${hasCustom ? `Yes — ${customText}` : "No customization"}`;
    });
    const anyCustomization = items.some((i) =>
      typeof i.customName === "string"
        ? i.customName.trim().length > 0
        : i.color.includes("•") && !i.color.endsWith("• Standard")
    );

    const sheetPayload = {
      reservationId: id,
      customerName: cleanName,
      whatsappNumber: form.phone,
      advanceAmount: advancePayable,
      utr: cleanUtr,
      hoodieType: hoodieTypeLabel,
      hasCustomization: anyCustomization,
      customizationDetails: itemCustomParts.join(" | "),
      balanceAmount,
      orderSummary: `${totalItems} total (${productSummaryLabel || items.map((i) => `${i.name}: ${i.qty}`).join(", ")}) • ₹${effectiveTotal.toLocaleString("en-IN")}`,
      rollNoAndBranch: `${cleanRollNo} • ${cleanBranch}`,
      upiAppAndPayer: form.payerUpiId.trim()
        ? `${form.upiApp} (${form.payerUpiId.trim()})`
        : form.upiApp,
      totalAmount: effectiveTotal,
      pickupPoint: form.pickup,
      timestampIst,
    };

    let sheetsOk = false;
    try {
      const sheetsRes = await fetch("/api/sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload),
      });
      const sheetsJson = await sheetsRes.json().catch(() => null);
      sheetsOk = !!(sheetsRes.ok && sheetsJson?.success && sheetsJson?.configured);
      if (!sheetsOk) {
        console.warn("[Sheets] Primary sync incomplete, falling back via /api/notify-cart:", sheetsJson);
      }
    } catch (err) {
      console.warn("[Sheets] Request error, falling back via /api/notify-cart:", err);
    }

    const ok = await sendEmailNotification({
      subject: `🎉 New Paid Order ${id} by ${cleanName} (${totalItems} hoodies • UTR: ${cleanUtr})`,
      skipSheets: sheetsOk,
      data: {
        Event: "Campus Pick-up Reservation",
        Reservation_ID: id,
        Student_Name: cleanName,
        WhatsApp_Phone: fullPhone,
        DTU_Roll_Number: cleanRollNo,
        Branch_and_Year: cleanBranch,
        Pickup_Point: form.pickup,
        Total_Hoodies_Jerseys: totalItems,
        Jerseys_By_Product: productSummaryLabel || `${totalItems}`,
        Coupon_Applied: appliedCoupon || "None",
        Subtotal_MRP: `₹${subtotal.toLocaleString("en-IN")}`,
        Coupon_Discount: couponDiscount > 0 ? `-₹${couponDiscount.toLocaleString("en-IN")}` : "₹0",
        Bundle_Discount: bulkDiscount > 0 ? `-₹${bulkDiscount.toLocaleString("en-IN")} (₹${bulkPerUnit} off × ${totalItems})` : "₹0",
        Items_Ordered: items.map((i) => `${i.name} (${i.color}, ${i.size}) x${i.qty} - ₹${i.price * i.qty}`).join(" | "),
        Total_Amount: `₹${effectiveTotal.toLocaleString("en-IN")}`,
        Advance_Paid_Now: `₹${advancePayable.toLocaleString("en-IN")}`,
        Balance_On_Collection: `₹${balanceAmount.toLocaleString("en-IN")}`,
        UPI_Transaction_ID_UTR: cleanUtr,
        Payment_App: form.upiApp,
        Payer_Name_Or_UPI_ID: form.payerUpiId.trim() || "Not specified",
        Payment_Method: `₹${advancePayable.toLocaleString("en-IN")} UPI Advance (agrawalharshit324@oksbi) + ₹${balanceAmount.toLocaleString("en-IN")} Balance on Pick-up`,
        Target_Email: "merchdtudce@gmail.com",
      },
    });

    setSubmitting(false);
    if (!ok && !sheetsOk) {
      setFormError("Could not submit reservation right now. Please check your internet and try again.");
      return;
    }
    setSubmitted(true);
  };

  const handleDone = () => {
    clearCart();
    onClose();
  };

  const inputClass =
    "w-full bg-[#FAF6EE] border border-[#E2D6C3] rounded-xl px-3.5 py-2.5 text-sm text-[#1E1614] placeholder:text-[#A49486] focus:border-[#781215] focus:bg-white outline-none transition-colors";

  const dismissModal = submitted ? handleDone : onClose;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-[#1E1614]/60 backdrop-blur-xs animate-fade-in"
        onClick={dismissModal}
      />
      <div className="fixed z-[60] inset-4 md:inset-x-0 md:inset-y-8 md:max-w-lg md:mx-auto bg-white border border-[#E2D6C3] rounded-3xl shadow-2xl overflow-y-auto animate-scale-up">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-[#E2D6C3] bg-[#FAF6EE]">
          <h3 className="font-serif font-bold text-lg text-[#1E1614]">
            {submitted ? "Reservation Confirmed" : "Campus Pick-up Reservation"}
          </h3>
          <button
            onClick={dismissModal}
            className="p-1.5 rounded-full hover:bg-[#EAE0D0] text-[#1E1614] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <CheckCircle size={48} className="mx-auto text-emerald-700 mb-3" />
            <p className="text-[10px] font-bold text-[#6E5D53] tracking-[0.22em] uppercase mb-1">
              Reservation ID
            </p>
            <p className="font-serif text-3xl font-black text-[#781215] mb-6">
              {reservationId}
            </p>

            <div className="text-left bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-4 mb-4 text-sm space-y-1.5">
              <p>
                <span className="text-[#6E5D53]">Name:</span>{" "}
                <strong className="text-[#1E1614]">{form.name}</strong>
              </p>
              <p>
                <span className="text-[#6E5D53]">WhatsApp:</span>{" "}
                <strong className="text-[#1E1614]">+91 {form.phone}</strong>
              </p>
              <p>
                <span className="text-[#6E5D53]">Roll No:</span>{" "}
                <strong className="text-[#1E1614]">{form.rollNo}</strong>
              </p>
              <p>
                <span className="text-[#6E5D53]">Branch:</span>{" "}
                <strong className="text-[#1E1614]">{form.branch}</strong>
              </p>
              <p>
                <span className="text-[#6E5D53]">Pick-up:</span>{" "}
                <strong className="text-[#1E1614]">{form.pickup}</strong>
              </p>
              <p>
                <span className="text-[#6E5D53]">UTR / Ref ID:</span>{" "}
                <strong className="text-[#1E1614]">{form.utr}</strong>{" "}
                <span className="text-xs text-[#6E5D53]">({form.upiApp})</span>
              </p>
            </div>

            <div className="text-left bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-4 mb-4 text-sm space-y-1.5">
              <p className="text-xs font-bold text-[#781215] uppercase tracking-[0.12em]">
                {totalItems} {totalItems === 1 ? "Hoodie / Jersey" : "Hoodies / Jerseys"} ({productSummaryLabel})
              </p>
              {items.map((i) => (
                <p
                  key={`${i.productId}-${i.color}-${i.size}`}
                  className="text-[#1E1614]"
                >
                  {i.name} ({i.color}, {i.size}) × {i.qty} —{" "}
                  <strong>₹{(i.price * i.qty).toLocaleString("en-IN")}</strong>
                </p>
              ))}
              {couponDiscount > 0 && (
                <p className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Coupon Discount ({appliedCoupon}):</span>
                  <span>-₹{couponDiscount.toLocaleString("en-IN")}</span>
                </p>
              )}
              {bulkDiscount > 0 && (
                <p className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Bundle Discount (₹{bulkPerUnit} off × {totalItems}):</span>
                  <span>-₹{bulkDiscount.toLocaleString("en-IN")}</span>
                </p>
              )}
              <p className="font-extrabold text-[#781215] pt-2 border-t border-[#E2D6C3] flex items-center justify-between">
                <span>Total Amount:</span>
                <span>₹{effectiveTotal.toLocaleString("en-IN")}</span>
              </p>
              <p className="font-bold text-[#1E1614] flex items-center justify-between text-xs pt-1">
                <span>{balanceAmount > 0 ? "Advance Payable (UPI):" : "Advance Payable (Full):"}</span>
                <span>₹{advancePayable.toLocaleString("en-IN")}</span>
              </p>
              <p className="font-bold text-[#6E5D53] flex items-center justify-between text-xs">
                <span>Balance on Collection:</span>
                <span>₹{balanceAmount.toLocaleString("en-IN")}</span>
              </p>
            </div>

            <div className="bg-[#781215]/8 border border-[#781215]/25 rounded-2xl p-3.5 text-xs text-[#6E5D53] mb-4">
              <strong className="text-[#781215]">Pick-up Instructions:</strong>{" "}
              Bring your DTU Student ID card to{" "}
              <strong className="text-[#1E1614]">{form.pickup}</strong>. Pay the remaining{" "}
              <strong className="text-[#1E1614]">₹{balanceAmount.toLocaleString("en-IN")}</strong>{" "}
              via UPI or Cash on collection.
            </div>

            <div className="bg-[#1E8E4E]/8 border border-[#1E8E4E]/25 rounded-2xl p-4 mb-4 text-left space-y-3">
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#1E8E4E] mb-1">
                  Stay Updated on Your Order
                </p>
                <p className="text-xs text-[#1E1614] leading-relaxed">
                  Please join the official DTU Merch WhatsApp group for{" "}
                  <strong>delivery updates, batch readiness, and campus pick-up timings</strong>.
                </p>
              </div>
              <a
                href="https://chat.whatsapp.com/Iv0HUZkZ8g41tZSnylZmcW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#1E8E4E] hover:bg-[#17733E] text-white font-bold text-xs tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#1E8E4E]/20"
              >
                <MessageCircle size={16} />
                Join WhatsApp Group for Delivery Updates
              </a>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3.5 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : totalItems === 0 ? (
          <div className="p-8 text-center space-y-4">
            <p className="font-serif text-xl font-bold text-[#1E1614]">
              Your bag is empty
            </p>
            <p className="text-xs text-[#6E5D53]">
              Add at least one hoodie from the collection before completing a campus pick-up reservation.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.16em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-[#6E5D53] leading-relaxed">
              Pay the advance via UPI to reserve (<strong className="text-[#1E1614]">Minimo: ₹600</strong> / ₹700 w/ name • <strong className="text-[#1E1614]">Classico: ₹850</strong> / ₹950 w/ name) and pay the remaining balance when collecting your hoodie.
            </p>

            <div>
              <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                Full Name *
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputClass}
                placeholder="Rahul Sharma"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                WhatsApp Phone Number *
              </label>
              <div className="flex items-stretch gap-2">
                <span
                  aria-label="Country code +91"
                  className="inline-flex items-center px-3.5 bg-[#EFE6D8] border border-[#E2D6C3] rounded-xl text-sm font-bold text-[#1E1614] select-none shrink-0"
                >
                  +91
                </span>
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  minLength={10}
                  pattern="[0-9]{10}"
                  title="Enter exact 10-digit WhatsApp mobile number"
                  value={form.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={inputClass}
                  placeholder="9876543210"
                />
              </div>
              <p className="text-[11px] text-[#6E5D53] mt-1">
                +91 is fixed — enter your 10-digit WhatsApp number ({form.phone.length}/10 digits)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                  DTU Roll No. *
                </label>
                <input
                  required
                  value={form.rollNo}
                  onChange={(e) => set("rollNo", e.target.value)}
                  className={inputClass}
                  placeholder="2K23/CO/123"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                  Branch &amp; Year *
                </label>
                <input
                  required
                  value={form.branch}
                  onChange={(e) => set("branch", e.target.value)}
                  className={inputClass}
                  placeholder="COE 3rd Year"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                Campus Pick-up Point *
              </label>
              <select
                required
                value={form.pickup}
                onChange={(e) => set("pickup", e.target.value)}
                className={inputClass}
              >
                {PICKUP_POINTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Jerseys / Hoodies Based on Products */}
            <div className="bg-white border border-[#E2D6C3] rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-bold text-[#781215] tracking-[0.14em] uppercase">
                  Number of Jerseys by Product
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] border border-[#E2D6C3] text-[11px] font-bold text-[#1E1614] whitespace-nowrap shrink-0">
                  Total: {totalItems}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productCounts.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl bg-[#FAF6EE] border border-[#E2D6C3] px-3 py-2 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#1E1614] truncate">{p.title}</p>
                      <p className="text-[10px] text-[#6E5D53] truncate">{p.tag}</p>
                    </div>
                    <span className="font-serif text-lg font-extrabold text-[#781215] shrink-0">
                      {p.qty}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-medium text-[#6E5D53]">
                {totalItems >= 4
                  ? `✓ More than 3 Bundle Active: ₹100 off per hoodie (-₹${bulkDiscount.toLocaleString("en-IN")} total)`
                  : totalItems === 3
                  ? `✓ Buy 3 Bundle Active: ₹50 off per hoodie (-₹${bulkDiscount.toLocaleString("en-IN")} total) • Add 1 more for ₹100 off each`
                  : `Bundle offer: Buy 3 for ₹50 off/hoodie • More than 3 for ₹100 off/hoodie`}
              </p>
            </div>

            {/* Summary & Live Quantity Adjuster */}
            <div className="bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-4 text-xs space-y-2 text-[#6E5D53]">
              {items.map((i) => {
                const itemAdv = getItemAdvancePerUnit(i) * i.qty;
                return (
                  <div
                    key={`${i.productId}-${i.color}-${i.size}`}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-[#1E1614] font-medium truncate">
                        {i.name} ({i.color}, {i.size})
                      </p>
                      <p className="text-[11px] text-[#6E5D53]">
                        ₹{i.price.toLocaleString("en-IN")} × {i.qty} · Adv. ₹{itemAdv.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="flex items-center border border-[#E2D6C3] rounded-full bg-white shrink-0">
                      <button
                        type="button"
                        onClick={() => updateQty(i.productId, i.color, i.size, i.qty - 1)}
                        className="p-1.5 hover:text-[#781215] transition-colors cursor-pointer"
                        aria-label={`Decrease quantity for ${i.name}`}
                      >
                        <Minus size={11} />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#1E1614]">{i.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(i.productId, i.color, i.size, i.qty + 1)}
                        className="p-1.5 hover:text-[#781215] transition-colors cursor-pointer"
                        aria-label={`Increase quantity for ${i.name}`}
                      >
                        <Plus size={11} />
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 border-t border-[#E2D6C3] space-y-1">
                <p className="flex items-center justify-between">
                  <span>Subtotal (MRP):</span>
                  <span className="font-medium text-[#1E1614]">₹{subtotal.toLocaleString("en-IN")}</span>
                </p>
                {couponDiscount > 0 && (
                  <p className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>Coupon Discount ({appliedCoupon}):</span>
                    <span>-₹{couponDiscount.toLocaleString("en-IN")}</span>
                  </p>
                )}
                {bulkDiscount > 0 && (
                  <p className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>Bundle Discount (₹{bulkPerUnit} off × {totalItems}):</span>
                    <span>-₹{bulkDiscount.toLocaleString("en-IN")}</span>
                  </p>
                )}
                <p className="font-semibold text-[#1E1614] pt-1 border-t border-[#E2D6C3]/70 flex items-center justify-between">
                  <span>Order Total:</span>
                  <span>₹{effectiveTotal.toLocaleString("en-IN")}</span>
                </p>
                <p className="font-extrabold text-[#781215] flex items-center justify-between text-sm">
                  <span>Amount Payable Now (UPI Advance):</span>
                  <span>₹{advancePayable.toLocaleString("en-IN")}</span>
                </p>
                <p className="font-bold text-[#1E1614] flex items-center justify-between">
                  <span>Balance Due on Collection:</span>
                  <span>₹{balanceAmount.toLocaleString("en-IN")}</span>
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E2D6C3] rounded-2xl p-4 text-center space-y-2">
              <p className="text-[11px] font-bold text-[#781215] tracking-[0.14em] uppercase">
                Scan QR to Pay ₹{advancePayable.toLocaleString("en-IN")} Advance
              </p>
              <img
                src="/images/upi-qr.jpg"
                alt="UPI Payment QR Code - Harshit Agrawal"
                className="w-44 sm:w-48 max-w-full mx-auto rounded-xl border border-[#E2D6C3] shadow-xs"
              />
              <p className="text-[11px] text-[#6E5D53]">
                UPI ID: <strong className="text-[#1E1614] select-all">agrawalharshit324@oksbi</strong>
              </p>
              <a
                href={`upi://pay?pa=agrawalharshit324@oksbi&pn=Harshit%20Agrawal&am=${advancePayable}&cu=INR`}
                className="inline-block text-[11px] font-bold text-[#781215] underline hover:text-[#5E0D10]"
              >
                Open UPI App to Pay ₹{advancePayable.toLocaleString("en-IN")}
              </a>
            </div>

            {/* Payment Verification Details */}
            <div className="bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-4 space-y-3">
              <div>
                <p className="text-[11px] font-bold text-[#781215] tracking-[0.14em] uppercase">
                  Payment Details *
                </p>
                <p className="text-[11px] text-[#6E5D53] mt-0.5">
                  After paying ₹{advancePayable.toLocaleString("en-IN")}, enter your UPI transaction details below to confirm.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                    UTR / Transaction ID *
                  </label>
                  <input
                    required
                    value={form.utr}
                    onChange={(e) => set("utr", e.target.value)}
                    className={`${inputClass} bg-white`}
                    placeholder="e.g. 431298765432"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                    Paid Via App *
                  </label>
                  <select
                    required
                    value={form.upiApp}
                    onChange={(e) => set("upiApp", e.target.value)}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="Google Pay (GPay)">Google Pay (GPay)</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="Paytm">Paytm</option>
                    <option value="BHIM / Bank UPI">BHIM / Bank UPI</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.14em] uppercase block mb-1.5">
                  Payer Name / UPI ID (Optional)
                </label>
                <input
                  value={form.payerUpiId}
                  onChange={(e) => set("payerUpiId", e.target.value)}
                  className={`${inputClass} bg-white`}
                  placeholder="e.g. rahul@okaxis or Account Holder Name"
                />
              </div>
            </div>

            {formError && (
              <p className="text-xs font-semibold text-[#781215] bg-[#781215]/10 border border-[#781215]/25 rounded-xl px-3.5 py-2.5">
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || totalItems === 0}
              className="w-full py-3.5 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#5E0D10] disabled:opacity-65 transition-colors cursor-pointer shadow-md shadow-[#781215]/15"
            >
              {submitting
                ? "Submitting Reservation..."
                : `Confirm Reservation (Paid ₹${advancePayable.toLocaleString("en-IN")})`}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
