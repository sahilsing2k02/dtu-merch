"use client";

import { useState } from "react";
import { Check, Copy, Percent } from "lucide-react";

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const code = "DTU33";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <section className="pt-6 pb-2">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-[#EFE4D6] border border-[#DECBB5] shadow-sm px-6 sm:px-10 py-5">
        {/* Ticket edge notches (left & right) */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FAF6EE] border border-[#DECBB5]"
        />
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-[#FAF6EE] border border-[#DECBB5]"
        />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Offer Headline */}
          <div className="text-center md:text-left">
            <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#781215] leading-none">
              Starting ₹799
            </p>
            <p className="text-[#1E1614] text-base sm:text-lg font-semibold mt-1.5">
              Plain ₹799 <span className="line-through opacity-65">₹1,099</span> • Varsity ₹1,199 <span className="line-through opacity-65">₹1,499</span>
            </p>
          </div>

          {/* Center: Coupon Ticket Pill */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleCopy}
              className="group relative flex items-center gap-4 bg-white hover:bg-[#FAF6EE] border border-[#E2D6C3] rounded-xl px-5 py-3 shadow-xs transition-all cursor-pointer"
              title="Click to copy coupon code"
            >
              {/* Inner ticket notches */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F5E3D0] border border-[#E2D6C3]"
              />
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-[#F5E3D0] border border-[#E2D6C3]"
              />

              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6E5D53] text-left leading-tight">
                Coupon
                <br />
                Code
              </span>
              <span className="h-6 w-[1px] bg-[#E2D6C3]" />
              <span className="text-lg sm:text-xl font-extrabold tracking-[0.16em] text-[#1E1614]">
                {code}
              </span>
              <span className="ml-1 text-[#781215]">
                {copied ? <Check size={16} /> : <Copy size={15} />}
              </span>
            </button>
            <p className="text-[11px] text-[#6E5D53] mt-2 tracking-wide">
              {copied
                ? "Code copied to clipboard!"
                : "Valid on First 50 Campus Reservations | T&C Apply"}
            </p>
          </div>

          {/* Right: Decorative % Emblem */}
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/70 border border-[#E2CCB3] text-[#781215] shadow-xs">
            <Percent size={32} strokeWidth={2.2} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
