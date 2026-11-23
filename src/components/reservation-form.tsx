"use client";

import { useState, type FormEvent } from "react";
import { X, CheckCircle } from "lucide-react";
import { useCart } from "@/store/cart-context";
import { PICKUP_POINTS } from "@/data/products";

interface Props {
  onClose: () => void;
}

export default function ReservationForm({ onClose }: Props) {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    rollNo: "",
    branch: "",
    pickup: PICKUP_POINTS[0],
  });

  const set = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Generate pseudo-unique reservation ID
    const id = `DTU-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationId(id);
    setSubmitted(true);
  };

  const handleDone = () => {
    clearCart();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/70" onClick={onClose} />
      <div className="fixed z-[60] inset-4 md:inset-x-auto md:inset-y-8 md:max-w-lg md:mx-auto bg-[#121215] border border-[#24242A] overflow-y-auto animate-scale-up">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#24242A]">
          <h3 className="font-black tracking-tight">{submitted ? "Reservation Confirmed" : "Campus Pick-up Reservation"}</h3>
          <button onClick={onClose} className="p-1 hover:bg-[#24242A] transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          /* Confirmation */
          <div className="p-6 text-center">
            <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
            <p className="text-xs text-zinc-500 tracking-widest mb-1">RESERVATION ID</p>
            <p className="text-3xl font-black mb-6">{reservationId}</p>

            <div className="text-left bg-[#0A0A0B] border border-[#24242A] p-4 mb-4 text-sm space-y-1">
              <p><span className="text-zinc-500">Name:</span> {form.name}</p>
              <p><span className="text-zinc-500">Roll No:</span> {form.rollNo}</p>
              <p><span className="text-zinc-500">Branch:</span> {form.branch}</p>
              <p><span className="text-zinc-500">Pick-up:</span> {form.pickup}</p>
            </div>

            <div className="text-left bg-[#0A0A0B] border border-[#24242A] p-4 mb-4 text-sm space-y-1">
              {items.map((i) => (
                <p key={`${i.productId}-${i.color}-${i.size}`}>
                  {i.name} ({i.color}, {i.size}) × {i.qty} — ₹{(i.price * i.qty).toLocaleString("en-IN")}
                </p>
              ))}
              <p className="font-bold pt-2 border-t border-[#24242A]">Total: ₹{totalPrice.toLocaleString("en-IN")}</p>
            </div>

            <div className="bg-[#800000]/10 border border-[#800000]/30 p-3 text-xs text-zinc-400 mb-6">
              <strong className="text-white">Pick-up Instructions:</strong> Bring your DTU Student ID card to <strong className="text-white">{form.pickup}</strong>. Pay via UPI or Cash on collection.
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3.5 bg-white text-black font-bold text-sm tracking-wider hover:bg-zinc-200 transition-colors"
            >
              DONE
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <p className="text-xs text-zinc-500 mb-2">Campus pick-up only. No online payment required — pay via UPI or Cash on collection.</p>

            <div>
              <label className="text-xs text-zinc-500 tracking-wider block mb-1">FULL NAME *</label>
              <input
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="w-full bg-[#0A0A0B] border border-[#24242A] px-3 py-2.5 text-sm focus:border-[#800000] outline-none transition-colors"
                placeholder="Rahul Sharma"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500 tracking-wider block mb-1">WHATSAPP PHONE NUMBER *</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className="w-full bg-[#0A0A0B] border border-[#24242A] px-3 py-2.5 text-sm focus:border-[#800000] outline-none transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-zinc-500 tracking-wider block mb-1">DTU ROLL NO. *</label>
                <input
                  required
                  value={form.rollNo}
                  onChange={(e) => set("rollNo", e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-[#24242A] px-3 py-2.5 text-sm focus:border-[#800000] outline-none transition-colors"
                  placeholder="2K23/CO/123"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-500 tracking-wider block mb-1">BRANCH & YEAR *</label>
                <input
                  required
                  value={form.branch}
                  onChange={(e) => set("branch", e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-[#24242A] px-3 py-2.5 text-sm focus:border-[#800000] outline-none transition-colors"
                  placeholder="COE 3rd Year"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-500 tracking-wider block mb-1">CAMPUS PICK-UP POINT *</label>
              <select
                required
                value={form.pickup}
                onChange={(e) => set("pickup", e.target.value)}
                className="w-full bg-[#0A0A0B] border border-[#24242A] px-3 py-2.5 text-sm focus:border-[#800000] outline-none transition-colors"
              >
                {PICKUP_POINTS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Summary */}
            <div className="bg-[#0A0A0B] border border-[#24242A] p-3 text-xs space-y-1 text-zinc-400">
              {items.map((i) => (
                <p key={`${i.productId}-${i.color}-${i.size}`}>
                  {i.name} ({i.size}) × {i.qty}
                </p>
              ))}
              <p className="font-bold text-white pt-1 border-t border-[#24242A]">Total: ₹{totalPrice.toLocaleString("en-IN")}</p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#800000] text-white font-bold text-sm tracking-wider hover:bg-[#A3272A] transition-colors"
            >
              CONFIRM RESERVATION (PAY ON PICK-UP)
            </button>
          </form>
        )}
      </div>
    </>
  );
}
