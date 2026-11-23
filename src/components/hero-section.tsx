"use client";

import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#24242A]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
        {/* Tagline */}
        <p className="text-xs tracking-[0.3em] text-[#800000] font-semibold mb-6 uppercase">
          Campus Exclusive • Batch &apos;26 Collection
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          WEAR YOUR
          <br />
          <span className="text-[#800000]">LEGACY</span>
        </h1>

        <p className="text-zinc-500 max-w-md mx-auto text-sm md:text-base mb-10">
          Premium heavyweight hoodies crafted for DTU students.
          380 GSM combed cotton. Campus pick-up only. Pay on collection.
        </p>

        <a
          href="#collection"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-zinc-200 transition-colors rounded-none"
        >
          SHOP COLLECTION
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
