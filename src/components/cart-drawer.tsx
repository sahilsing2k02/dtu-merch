"use client";

import { useState } from "react";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart-context";
import { sendEmailNotification } from "@/utils/notify";
import ReservationForm from "./reservation-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, updateQty, removeItem, totalItems, totalPrice } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [couponCode, setCouponCode] = useState("DTU33");
  const [appliedCode, setAppliedCode] = useState("DTU33");
  const [discountApplied, setDiscountApplied] = useState(true);
  const [couponMsg, setCouponMsg] = useState("✓ DTU33 pre-applied! Varsity ₹1,199 • Plain ₹799");

  if (!open) return null;

  const WHATSAPP_NUM = "919625609307";

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = couponCode.trim().toUpperCase();
    if (normalized === "DTU33" || normalized === "DTU10") {
      setAppliedCode(normalized);
      setDiscountApplied(true);
      setCouponMsg(`✓ ${normalized} applied! Varsity ₹1,199 • Plain ₹799`);
    } else {
      setAppliedCode("");
      setDiscountApplied(false);
      setCouponMsg("Invalid code. Try 'DTU33'");
    }
  };

  const discountAmount = discountApplied
    ? Math.min(totalPrice, items.reduce((s, i) => s + (i.discountPerUnit ?? 300) * i.qty, 0))
    : 0;
  const finalPrice = Math.max(0, totalPrice - discountAmount);

  const buildWhatsAppOrder = () => {
    const lines = items.map(
      (i) =>
        `• ${i.name} (${i.color}, ${i.size}) × ${i.qty} — ₹${(
          i.price * i.qty
        ).toLocaleString("en-IN")}`
    );
    const couponLine = discountApplied ? `\n🏷️ *Coupon ${appliedCode} applied: -₹${discountAmount.toLocaleString("en-IN")}*` : "";
    const msg = `🛒 *DTU Merch Order*\n\n${lines.join(
      "\n"
    )}${couponLine}\n\n*Final Total: ₹${finalPrice.toLocaleString(
      "en-IN"
    )}*\n\nPlease confirm my reservation!`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[#1E1614]/55 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FAF6EE] border-l border-[#E2D6C3] shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2D6C3] bg-white/70">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-[#781215]" />
            <h2 className="font-serif font-bold text-2xl text-[#1E1614]">
              Your Bag <span className="text-[#781215]">({totalItems})</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3ECE0] text-[#1E1614] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F3ECE0] border border-[#E2D6C3] flex items-center justify-center text-[#781215]">
                <ShoppingBag size={22} />
              </div>
              <p className="font-serif text-xl font-bold text-[#1E1614] mb-1">
                Your bag is empty
              </p>
              <p className="text-[#6E5D53] text-xs mb-5">
                Explore the Off-White DTU &apos;41 hoodie.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#781215] text-[#FAF6EE] text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="flex gap-4 bg-white rounded-2xl border border-[#E2D6C3] p-4 shadow-xs"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-base text-[#1E1614] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[#6E5D53] text-xs mt-0.5">
                      {item.color} · Size {item.size}
                    </p>
                    <p className="font-bold text-sm text-[#781215] mt-2">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() =>
                        removeItem(item.productId, item.color, item.size)
                      }
                      className="text-[#9B8B7E] hover:text-[#781215] transition-colors cursor-pointer p-1"
                      aria-label="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                    <div className="flex items-center border border-[#E2D6C3] rounded-full bg-[#FAF6EE]">
                      <button
                        onClick={() =>
                          updateQty(
                            item.productId,
                            item.color,
                            item.size,
                            item.qty - 1
                          )
                        }
                        className="p-1.5 hover:text-[#781215] transition-colors cursor-pointer"
                        aria-label="Decrease"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-[#1E1614]">
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          updateQty(
                            item.productId,
                            item.color,
                            item.size,
                            item.qty + 1
                          )
                        }
                        className="p-1.5 hover:text-[#781215] transition-colors cursor-pointer"
                        aria-label="Increase"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#E2D6C3] bg-white px-6 py-5 space-y-3">
            {/* Coupon input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon code (e.g. DTU33)"
                className="flex-1 bg-[#FAF6EE] border border-[#E2D6C3] rounded-xl px-3 py-1.5 text-xs text-[#1E1614] uppercase tracking-wider placeholder:normal-case placeholder:text-[#A49486] focus:border-[#781215] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#FAF6EE] hover:bg-[#F3ECE0] border border-[#E2D6C3] rounded-xl text-xs font-bold text-[#781215] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>
            {couponMsg && (
              <p className={`text-[11px] font-semibold ${discountApplied ? "text-emerald-700" : "text-[#781215]"}`}>
                {couponMsg}
              </p>
            )}

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs text-[#6E5D53]">
                <span className="font-semibold uppercase tracking-[0.14em]">Subtotal (MRP)</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              {discountApplied && (
                <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Coupon Discount ({appliedCode})</span>
                  <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex items-center justify-between pt-1 border-t border-[#E2D6C3]">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#1E1614]">
                  Total
                </span>
                <span className="font-serif text-2xl font-bold text-[#781215]">
                  ₹{finalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-[#6E5D53] tracking-[0.14em] uppercase">
              Up to ₹850/hoodie advance to reserve • Balance on campus pick-up
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 rounded-full bg-[#781215] text-[#FAF6EE] font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#5E0D10] transition-colors cursor-pointer shadow-md shadow-[#781215]/15"
            >
              Reserve for Pick-up
            </button>

            <a
              href={buildWhatsAppOrder()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sendEmailNotification({
                  subject: `💬 WhatsApp Order Initiated (₹${finalPrice.toLocaleString("en-IN")})`,
                  data: {
                    Event: "Order via WhatsApp Clicked",
                    Coupon_Applied: discountApplied ? appliedCode : "None",
                    Items: items.map((i) => `${i.name} (${i.color}, ${i.size}) x${i.qty} - ₹${i.price * i.qty}`).join(" | "),
                    Total_Amount: `₹${finalPrice.toLocaleString("en-IN")}`,
                  },
                });
              }}
              className="w-full py-3 rounded-full border border-[#1E8E4E] text-[#1E8E4E] font-bold text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 hover:bg-[#1E8E4E]/10 transition-colors"
            >
              <MessageCircle size={15} />
              Order via WhatsApp
            </a>
          </div>
        )}
      </div>

      {showForm && (
        <ReservationForm
          discountedTotal={finalPrice}
          discountAmount={discountAmount}
          appliedCoupon={discountApplied ? appliedCode : undefined}
          onClose={() => {
            setShowForm(false);
            onClose();
          }}
        />
      )}
    </>
  );
}
