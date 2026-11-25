"use client";

import { useState } from "react";
import Image from "next/image";
import { X, RotateCw, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import type { HoodieProduct } from "@/data/products";
import { useCart } from "@/store/cart-context";
import { sendEmailNotification } from "@/utils/notify";
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
  const isLightFabric = color.isCreamTheme;
  const showRealPhoto = Boolean(product.image && colorIdx === 0);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        color: color.name,
        size,
        price: product.price,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);

    sendEmailNotification({
      subject: `🛍️ New Add-to-Cart: ${product.name} (${size})`,
      data: {
        Event: "Item Added from Product Viewer",
        Product: product.name,
        Color: color.name,
        Size: size,
        Quantity: qty,
        Price_Per_Item: `₹${product.price}`,
        Total_Price: `₹${product.price * qty}`,
        Alert_For: "merchdtudce@gmail.com",
      },
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-[#1E1614]/60 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:max-w-4xl md:mx-auto z-50 bg-[#FAF6EE] border border-[#E2D6C3] rounded-3xl shadow-2xl overflow-y-auto animate-scale-up flex flex-col lg:flex-row">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-[#1E1614] border border-[#E2D6C3] p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Image area */}
        <div className="relative lg:w-1/2 aspect-[4/5] lg:aspect-auto flex-shrink-0 bg-[#F3ECE0] overflow-hidden">
          {showRealPhoto ? (
            <div className="relative w-full h-full bg-[#C8AB92]">
              <Image
                src={product.image!}
                alt={product.name}
                fill
                className={`object-cover transition-all duration-500 ${
                  view === "front" ? "object-[14%_center]" : "object-[88%_center]"
                }`}
              />
            </div>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                view === "front" ? color.frontGradient : color.backGradient
              } transition-all duration-500 flex flex-col items-center justify-center p-8`}
            >
              {color.stripeHex && (
                <>
                  <span
                    className="absolute left-5 top-8 bottom-8 w-2 rounded-full opacity-80"
                    style={{ backgroundColor: color.stripeHex }}
                  />
                  <span
                    className="absolute right-5 top-8 bottom-8 w-2 rounded-full opacity-80"
                    style={{ backgroundColor: color.stripeHex }}
                  />
                </>
              )}
              <div
                className={`text-center ${
                  isLightFabric ? "text-[#781215]/85" : "text-[#FAF6EE]/85"
                }`}
              >
                {(view === "front" ? product.frontText : product.backText).map(
                  (line, i) => (
                    <p
                      key={i}
                      className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight"
                    >
                      {line}
                    </p>
                  )
                )}
                {view === "back" && (
                  <p className="text-xs mt-4 tracking-[0.22em] uppercase opacity-70">
                    {product.backSubtext}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* View toggle */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-[#FAF6EE]/95 backdrop-blur-sm p-1 rounded-full border border-[#E2D6C3] shadow-sm">
            {(["front", "back"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                  view === v
                    ? "bg-[#781215] text-[#FAF6EE]"
                    : "text-[#1E1614] hover:bg-[#F3ECE0]"
                }`}
              >
                {v === "back" && <RotateCw size={11} />}
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#781215] text-[#FAF6EE] text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full">
            {product.badge}
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-1/2 p-6 md:p-8 flex flex-col bg-white">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#781215] mb-1.5">
            Delhi Technological University
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-[#1E1614] mb-2">
            {product.name}
          </h2>
          <p className="text-[#6E5D53] text-sm mb-5 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.specs.map((s) => (
              <span
                key={s}
                className="bg-[#FAF6EE] border border-[#E2D6C3] rounded-full text-[10px] font-semibold tracking-wider px-3 py-1 text-[#6E5D53]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6 pb-5 border-b border-[#F0E6D6]">
            <span className="text-3xl font-black text-[#1E1614]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[#9B8B7E] text-base line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-[#781215] text-xs font-bold bg-[#781215]/10 px-2.5 py-1 rounded-full">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % OFF
            </span>
          </div>

          {/* Color selector */}
          <div className="mb-5">
            <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.16em] uppercase block mb-2.5">
              Colour — <span className="text-[#1E1614]">{color.name}</span>
            </label>
            <div className="flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColorIdx(i)}
                  className={`w-8 h-8 rounded-full border transition-all cursor-pointer ${
                    i === colorIdx
                      ? "ring-2 ring-[#781215] ring-offset-2 ring-offset-white border-[#781215] scale-105"
                      : "border-[#D4C5B2] hover:scale-105"
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
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.16em] uppercase">
                Size — <span className="text-[#1E1614]">{size}</span>
              </label>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="text-xs text-[#781215] hover:underline font-semibold transition-colors cursor-pointer"
              >
                Size Guide
              </button>
            </div>
            <div className="flex gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSizeIdx(i)}
                  className={`w-12 h-10 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    i === sizeIdx
                      ? "border-[#781215] bg-[#781215] text-[#FAF6EE]"
                      : "border-[#E2D6C3] text-[#1E1614] hover:border-[#781215]/50 bg-[#FAF6EE]/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="mb-6">
            <label className="text-[11px] font-bold text-[#6E5D53] tracking-[0.16em] uppercase block mb-2.5">
              Quantity
            </label>
            <div className="inline-flex items-center border border-[#E2D6C3] rounded-full bg-[#FAF6EE]/60 px-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-2 hover:text-[#781215] transition-colors cursor-pointer"
                aria-label="Decrease"
              >
                <Minus size={14} />
              </button>
              <span className="px-4 text-sm font-bold text-[#1E1614]">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 hover:text-[#781215] transition-colors cursor-pointer"
                aria-label="Increase"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to bag */}
          <button
            onClick={handleAdd}
            className={`mt-auto w-full py-4 rounded-full font-bold tracking-[0.16em] uppercase text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
              added
                ? "bg-emerald-700 text-white shadow-emerald-700/15"
                : "bg-[#781215] text-[#FAF6EE] hover:bg-[#5E0D10] shadow-[#781215]/15"
            }`}
          >
            {added ? <Check size={16} /> : <ShoppingBag size={16} />}
            {added
              ? "ADDED TO BAG"
              : `ADD TO BAG — ₹${(product.price * qty).toLocaleString("en-IN")}`}
          </button>
        </div>
      </div>

      {showSizeGuide && (
        <SizeGuideModal onClose={() => setShowSizeGuide(false)} />
      )}
    </>
  );
}
