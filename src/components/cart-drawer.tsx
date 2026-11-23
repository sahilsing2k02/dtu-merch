"use client";

import { useState } from "react";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cart-context";
import ReservationForm from "./reservation-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, updateQty, removeItem, totalItems, totalPrice } = useCart();
  const [showForm, setShowForm] = useState(false);

  if (!open) return null;

  // shortcut: WhatsApp number is a placeholder, replace with real number before launch
  const WHATSAPP_NUM = "919625609307";

  const buildWhatsAppOrder = () => {
    const lines = items.map(
      (i) => `• ${i.name} (${i.color}, ${i.size}) × ${i.qty} — ₹${(i.price * i.qty).toLocaleString("en-IN")}`
    );
    const msg = `🛒 *DTU Merch Order*\n\n${lines.join("\n")}\n\n*Total: ₹${totalPrice.toLocaleString("en-IN")}*\n\nPlease confirm my reservation!`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/70 animate-fade-in" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#0A0A0B] border-l border-[#24242A] animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#24242A]">
          <h2 className="font-black tracking-tight text-lg">YOUR BAG ({totalItems})</h2>
          <button onClick={onClose} className="p-1 hover:bg-[#121215] transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zinc-500 text-sm">Your bag is empty</p>
              <button onClick={onClose} className="mt-4 text-xs text-[#800000] font-semibold hover:text-[#A3272A] transition-colors">
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-4 bg-[#121215] border border-[#24242A] p-4">
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate">{item.name}</h4>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      {item.color} · {item.size}
                    </p>
                    <p className="font-bold text-sm mt-2">₹{(item.price * item.qty).toLocaleString("en-IN")}</p>
                  </div>

                  {/* Qty + Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => removeItem(item.productId, item.color, item.size)} className="text-zinc-600 hover:text-red-500 transition-colors" aria-label="Remove">
                      <Trash2 size={14} />
                    </button>
                    <div className="flex items-center border border-[#24242A]">
                      <button onClick={() => updateQty(item.productId, item.color, item.size, item.qty - 1)} className="p-1.5 hover:bg-[#24242A] transition-colors" aria-label="Decrease">
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.productId, item.color, item.size, item.qty + 1)} className="p-1.5 hover:bg-[#24242A] transition-colors" aria-label="Increase">
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#24242A] px-5 py-4 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-zinc-400">Subtotal</span>
              <span className="text-lg font-black">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <p className="text-[10px] text-zinc-600 tracking-wider">PAY ON CAMPUS PICK-UP • NO ONLINE PAYMENT REQUIRED</p>

            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 bg-white text-black font-bold text-sm tracking-wider hover:bg-zinc-200 transition-colors"
            >
              RESERVE FOR PICK-UP
            </button>

            <a
              href={buildWhatsAppOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-[#25D366] text-[#25D366] font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-[#25D366]/10 transition-colors"
            >
              <MessageCircle size={16} />
              ORDER VIA WHATSAPP
            </a>
          </div>
        )}
      </div>

      {/* Reservation form modal */}
      {showForm && <ReservationForm onClose={() => setShowForm(false)} />}
    </>
  );
}
