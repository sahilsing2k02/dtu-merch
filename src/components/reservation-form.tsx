"use client";

import { useState, type FormEvent } from "react";
import { X, CheckCircle, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cart-context";
import { PICKUP_POINTS } from "@/data/products";
import { sendEmailNotification } from "@/utils/notify";

interface Props {
  onClose: () => void;
  discountedTotal?: number;
  discountAmount?: number;
  appliedCoupon?: string;
}

export default function ReservationForm({ onClose, discountedTotal, discountAmount = 0, appliedCoupon }: Props) {
  const { items, totalPrice, clearCart } = useCart();
  const effectiveTotal = typeof discountedTotal === "number" ? discountedTotal : totalPrice;
  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    rollNo: "",
    branch: "",
    pickup: PICKUP_POINTS[0],
  });

  const set = (key: string, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = `DTU-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationId(id);
    setSubmitted(true);

    // Send complete reservation confirmation email to merchdtudce@gmail.com
    sendEmailNotification({
      subject: `🎉 New Order Reserved: ${id} by ${form.name}`,
      data: {
        Event: "Campus Pickup Reservation Confirmed",
        Reservation_ID: id,
        Student_Name: form.name,
        WhatsApp_Phone: form.phone,
        DTU_Roll_Number: form.rollNo,
        Branch_and_Year: form.branch,
        Pickup_Point: form.pickup,
        Coupon_Applied: appliedCoupon || "None",
        Subtotal: `₹${totalPrice.toLocaleString("en-IN")}`,
        Discount: discountAmount > 0 ? `-₹${discountAmount.toLocaleString("en-IN")}` : "₹0",
        Items_Ordered: items.map((i) => `${i.name} (${i.color}, ${i.size}) x${i.qty} - ₹${i.price * i.qty}`).join(" | "),
        Total_Amount: `₹${effectiveTotal.toLocaleString("en-IN")}`,
        Payment_Method: "Pay on Campus Pickup (Cash/UPI)",
        Target_Email: "merchdtudce@gmail.com",
      },
    });
  };

  const handleDone = () => {
    clearCart();
    onClose();
  };

  const inputClass =
    "w-full bg-[#FAF6EE] border border-[#E2D6C3] rounded-xl px-3.5 py-2.5 text-sm text-[#1E1614] placeholder:text-[#A49486] focus:border-[#781215] focus:bg-white outline-none transition-colors";

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-[#1E1614]/60 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed z-[60] inset-4 md:inset-x-auto md:inset-y-8 md:max-w-lg md:mx-auto bg-white border border-[#E2D6C3] rounded-3xl shadow-2xl overflow-y-auto animate-scale-up">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2D6C3] bg-[#FAF6EE]">
          <h3 className="font-serif font-bold text-lg text-[#1E1614]">
            {submitted ? "Reservation Confirmed" : "Campus Pick-up Reservation"}
          </h3>
          <button
            onClick={onClose}
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
            </div>

            <div className="text-left bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-4 mb-4 text-sm space-y-1.5">
              {items.map((i) => (
                <p
                  key={`${i.productId}-${i.color}-${i.size}`}
                  className="text-[#1E1614]"
                >
                  {i.name} ({i.color}, {i.size}) × {i.qty} —{" "}
                  <strong>₹{(i.price * i.qty).toLocaleString("en-IN")}</strong>
                </p>
              ))}
              <p className="font-extrabold text-[#781215] pt-2 border-t border-[#E2D6C3] flex items-center justify-between">
                <span>Total Amount:</span>
                <span>₹{effectiveTotal.toLocaleString("en-IN")}{appliedCoupon && <span className="text-xs text-emerald-700 ml-2 font-normal">({appliedCoupon} applied)</span>}</span>
              </p>
            </div>

            <div className="bg-[#781215]/8 border border-[#781215]/25 rounded-2xl p-3.5 text-xs text-[#6E5D53] mb-4">
              <strong className="text-[#781215]">Pick-up Instructions:</strong>{" "}
              Bring your DTU Student ID card to{" "}
              <strong className="text-[#1E1614]">{form.pickup}</strong>. Pay via
              UPI or Cash on collection.
            </div>

            <a
              href="https://chat.whatsapp.com/Iv0HUZkZ8g41tZSnylZmcW"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#1E8E4E] hover:bg-[#17733E] text-white font-bold text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-colors mb-3 shadow-md shadow-[#1E8E4E]/20"
            >
              <MessageCircle size={16} />
              Join DTU Merch WhatsApp Group
            </a>

            <button
              onClick={handleDone}
              className="w-full py-3.5 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-[#6E5D53] leading-relaxed">
              Campus pick-up only. No online payment required — pay via UPI or
              Cash on collection.
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
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
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

            {/* Summary */}
            <div className="bg-[#FAF6EE] border border-[#E2D6C3] rounded-2xl p-3.5 text-xs space-y-1 text-[#6E5D53]">
              {items.map((i) => (
                <p key={`${i.productId}-${i.color}-${i.size}`}>
                  {i.name} ({i.size}) × {i.qty}
                </p>
              ))}
              <p className="font-extrabold text-[#1E1614] pt-1.5 border-t border-[#E2D6C3] flex items-center justify-between">
                <span>Total:</span>
                <span>₹{effectiveTotal.toLocaleString("en-IN")}{appliedCoupon && <span className="text-xs text-emerald-700 ml-1.5 font-normal">({appliedCoupon} applied)</span>}</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer shadow-md shadow-[#781215]/15"
            >
              Confirm Reservation (Pay on Pick-up)
            </button>
          </form>
        )}
      </div>
    </>
  );
}
