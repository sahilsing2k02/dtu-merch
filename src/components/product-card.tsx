"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCw, ArrowUpRight } from "lucide-react";
import type { HoodieProduct } from "@/data/products";

interface Props {
  product: HoodieProduct;
  onSelect: (product: HoodieProduct) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  const [view, setView] = useState<"front" | "back">("front");
  const [colorIdx, setColorIdx] = useState(0);
  const color = product.colors[colorIdx];
  const isLightFabric = color.isCreamTheme;
  const showRealPhoto = Boolean(product.image && colorIdx === 0);

  return (
    <div
      className="group bg-white rounded-2xl border border-[#E2D6C3] hover:border-[#781215]/40 hover:shadow-xl hover:shadow-[#1E1614]/5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
      onClick={() => onSelect(product)}
    >
      {/* Visual Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F3ECE0]">
        {showRealPhoto ? (
          <div className="relative w-full h-full bg-[#C8AB92]">
            <Image
              src={product.image!}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                view === "front" ? "object-[14%_center]" : "object-[88%_center]"
              }`}
            />
          </div>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              view === "front" ? color.frontGradient : color.backGradient
            } transition-all duration-500 flex flex-col items-center justify-center p-6`}
          >
            {/* Varsity sleeve stripe motif on left & right */}
            {color.stripeHex && (
              <>
                <span
                  className="absolute left-3 top-6 bottom-6 w-1.5 rounded-full opacity-80"
                  style={{ backgroundColor: color.stripeHex }}
                />
                <span
                  className="absolute right-3 top-6 bottom-6 w-1.5 rounded-full opacity-80"
                  style={{ backgroundColor: color.stripeHex }}
                />
              </>
            )}

            {/* Collegiate Typography Preview */}
            <div
              className={`text-center px-4 ${
                isLightFabric ? "text-[#781215]/85" : "text-[#FAF6EE]/85"
              }`}
            >
              {view === "front" ? (
                <div className="space-y-1.5">
                  <p className="font-serif text-4xl font-black tracking-tight leading-none">
                    {product.frontText[0]}
                  </p>
                  <div className="flex items-center justify-center gap-2 my-1.5">
                    <span className="h-[1px] w-5 bg-current opacity-60" />
                    <span className="text-[10px] font-bold tracking-[0.28em] uppercase">
                      {product.frontText[1] ?? "DELHI"}
                    </span>
                    <span className="h-[1px] w-5 bg-current opacity-60" />
                  </div>
                  {product.frontText[2] && (
                    <p className="text-[10px] font-semibold tracking-[0.22em] uppercase opacity-75">
                      {product.frontText[2]}
                    </p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-current/60 flex flex-col items-center justify-center p-2">
                    <span className="font-serif text-xs font-black tracking-wider">
                      {product.backText[0]}
                    </span>
                    <span className="text-[8px] tracking-[0.18em] uppercase opacity-75 mt-0.5">
                      DELHI
                    </span>
                  </div>
                  <p className="text-[9px] mt-2 tracking-[0.18em] uppercase opacity-70 max-w-[180px] mx-auto">
                    {product.backSubtext}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-[#781215] text-[#FAF6EE] text-[9px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full shadow-xs">
          {product.badge}
        </div>

        {/* Front/Back toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setView(view === "front" ? "back" : "front");
          }}
          className="absolute top-3 right-3 bg-[#FAF6EE]/90 backdrop-blur-sm text-[#1E1614] border border-[#E2D6C3] text-[10px] font-bold tracking-wider px-2.5 py-1.5 rounded-full flex items-center gap-1 hover:bg-white transition-colors cursor-pointer"
          aria-label={`Show ${view === "front" ? "back" : "front"} view`}
        >
          <RotateCw size={11} className="text-[#781215]" />
          {view === "front" ? "BACK" : "FRONT"}
        </button>

        {/* Bottom quick-view pill */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1E1614]/85 text-[#FAF6EE] text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
          QUICK VIEW
          <ArrowUpRight size={12} />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-serif font-bold text-base text-[#1E1614] tracking-tight mb-1 group-hover:text-[#781215] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#6E5D53] text-xs leading-relaxed mb-4 line-clamp-2">
          {product.subtitle}
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              onClick={(e) => {
                e.stopPropagation();
                setColorIdx(i);
              }}
              className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                i === colorIdx
                  ? "ring-2 ring-[#781215] ring-offset-2 ring-offset-white border-[#781215]"
                  : "border-[#D4C5B2] hover:scale-110"
              }`}
              style={{ backgroundColor: c.hex }}
              aria-label={c.name}
              title={c.name}
            />
          ))}
          <span className="text-[#6E5D53] text-[11px] ml-1.5 truncate">
            {color.name}
          </span>
        </div>

        {/* Price */}
        <div className="pt-3 border-t border-[#F0E6D6] flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-[#1E1614]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-[#9B8B7E] text-xs line-through">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-[#781215] text-[11px] font-bold ml-auto bg-[#781215]/10 px-2 py-0.5 rounded-full">
            {Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            )}
            % OFF
          </span>
        </div>
      </div>
    </div>
  );
}
