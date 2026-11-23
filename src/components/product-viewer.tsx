"use client";

import { useState } from "react";
import { X, RotateCw, Minus, Plus, ShoppingBag } from "lucide-react";
import type { HoodieProduct } from "@/data/products";
import { useCart } from "@/store/cart-context";
import SizeGuideModal from "./size-guide-modal";

interface Props {
  product: HoodieProduct;
  onClose: () => void;
}

export default function ProductViewer({ product, onClose }: Props) {
  const { addItem } = useCart();
  const [view, setView] = useState<"front" | "back">("front");
  const [colorIdx, setColorIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(2); // default L
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const color = product.colors[colorIdx];
  const size = product.sizes[sizeIdx];
  const isDark = color.hex < "#888888";

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ productId: product.id, name: product.name, color: color.name, size, price: product.price });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:max-w-4xl md:mx-auto z-50 bg-[#121215] border border-[#24242A] overflow-y-auto animate-scale-up flex flex-col lg:flex-row">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 p-2 hover:bg-black/80 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Image area */}
        <div className="relative lg:w-1/2 aspect-[4/5] lg:aspect-auto flex-shrink-0">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              view === "front" ? color.frontGradient : color.backGradient
            } transition-all duration-500 flex flex-col items-center justify-center p-8`}
          >
            <div className={`text-center ${isDark ? "text-white/20" : "text-black/20"}`}>
              {(view === "front" ? product.frontText : product.backText).map((line, i) => (
                <p key={i} className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">{line}</p>
              ))}
              {view === "back" && (
                <p className={`text-xs mt-4 tracking-widest ${isDark ? "text-white/10" : "text-black/10"}`}>
                  {product.backSubtext}
                </p>
              )}
            </div>
          </div>

          {/* View toggle */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-black/60 backdrop-blur-sm">
            {(["front", "back"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 text-xs font-bold tracking-wider flex items-center gap-1.5 transition-colors ${
                  view === v ? "bg-white text-black" : "text-white hover:bg-white/10"
                }`}
              >
                {v === "back" && <RotateCw size={12} />}
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#800000] text-[10px] font-bold tracking-wider px-2.5 py-1">
            {product.badge}
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl font-black tracking-tight mb-1">{product.name}</h2>
          <p className="text-zinc-500 text-sm mb-4">{product.subtitle}</p>

          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.specs.map((s) => (
              <span key={s} className="border border-[#24242A] text-[10px] font-semibold tracking-wider px-2.5 py-1 text-zinc-400">
                {s}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-black">₹{product.price.toLocaleString("en-IN")}</span>
            <span className="text-zinc-600 text-lg line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
            <span className="text-[#800000] text-sm font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>

          {/* Color selector */}
          <div className="mb-5">
            <label className="text-xs text-zinc-500 tracking-wider block mb-2">COLOUR — {color.name}</label>
            <div className="flex gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColorIdx(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    i === colorIdx ? "border-white scale-110" : "border-[#24242A] hover:border-zinc-500"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-zinc-500 tracking-wider">SIZE — {size}</label>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="text-xs text-[#800000] hover:text-[#A3272A] font-semibold transition-colors"
              >
                Size Guide
              </button>
            </div>
            <div className="flex gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSizeIdx(i)}
                  className={`w-12 h-10 text-xs font-bold border transition-all ${
                    i === sizeIdx
                      ? "border-white bg-white text-black"
                      : "border-[#24242A] text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="mb-6">
            <label className="text-xs text-zinc-500 tracking-wider block mb-2">QUANTITY</label>
            <div className="inline-flex items-center border border-[#24242A]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-[#24242A] transition-colors" aria-label="Decrease">
                <Minus size={14} />
              </button>
              <span className="px-4 text-sm font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-[#24242A] transition-colors" aria-label="Increase">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to bag */}
          <button
            onClick={handleAdd}
            className={`mt-auto w-full py-4 font-bold tracking-wider text-sm flex items-center justify-center gap-2 transition-all ${
              added
                ? "bg-green-600 text-white"
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            <ShoppingBag size={16} />
            {added ? "ADDED TO BAG ✓" : `ADD TO BAG — ₹${(product.price * qty).toLocaleString("en-IN")}`}
          </button>
        </div>
      </div>

      {showSizeGuide && <SizeGuideModal onClose={() => setShowSizeGuide(false)} />}
    </>
  );
}
