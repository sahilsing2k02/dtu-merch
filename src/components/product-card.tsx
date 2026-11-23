"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import type { HoodieProduct } from "@/data/products";

interface Props {
  product: HoodieProduct;
  onSelect: (product: HoodieProduct) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  const [view, setView] = useState<"front" | "back">("front");
  const [colorIdx, setColorIdx] = useState(0);
  const color = product.colors[colorIdx];
  const isDark = color.hex < "#888888";

  return (
    <div
      className="group bg-[#121215] border border-[#24242A] hover:border-[#3f3f46] transition-all duration-300 cursor-pointer"
      onClick={() => onSelect(product)}
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Gradient hoodie visual */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${view === "front" ? color.frontGradient : color.backGradient} transition-all duration-500 flex flex-col items-center justify-center p-6`}
        >
          {/* Hoodie text */}
          <div className={`text-center ${isDark ? "text-white/20" : "text-black/20"}`}>
            {(view === "front" ? product.frontText : product.backText).map((line, i) => (
              <p key={i} className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                {line}
              </p>
            ))}
            {view === "back" && (
              <p className={`text-[10px] mt-3 tracking-widest ${isDark ? "text-white/10" : "text-black/10"}`}>
                {product.backSubtext}
              </p>
            )}
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-[#800000] text-[9px] font-bold tracking-wider px-2 py-1">
          {product.badge}
        </div>

        {/* Front/Back toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); setView(view === "front" ? "back" : "front"); }}
          className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1.5 flex items-center gap-1 hover:bg-black/80 transition-colors"
          aria-label={`Show ${view === "front" ? "back" : "front"} view`}
        >
          <RotateCw size={12} />
          {view === "front" ? "BACK" : "FRONT"}
        </button>

        {/* Specs tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {product.specs.map((s) => (
            <span key={s} className="bg-black/60 backdrop-blur-sm text-[9px] font-semibold tracking-wider px-2 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm tracking-tight mb-1 group-hover:text-white transition-colors">
          {product.name}
        </h3>
        <p className="text-zinc-500 text-xs mb-3">{product.subtitle}</p>

        {/* Color swatches */}
        <div className="flex items-center gap-2 mb-3">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              onClick={(e) => { e.stopPropagation(); setColorIdx(i); }}
              className={`w-5 h-5 rounded-full border-2 transition-all ${
                i === colorIdx ? "border-white scale-110" : "border-[#24242A] hover:border-zinc-500"
              }`}
              style={{ backgroundColor: c.hex }}
              aria-label={c.name}
              title={c.name}
            />
          ))}
          <span className="text-zinc-600 text-[10px] ml-1">{color.name}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-black">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="text-zinc-600 text-sm line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
          <span className="text-[#800000] text-xs font-bold ml-auto">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </span>
        </div>
      </div>
    </div>
  );
}
