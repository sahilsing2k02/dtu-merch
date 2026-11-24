"use client";

export default function HeroSection() {
  return (
    <section className="relative border-b border-[#E2D6C3]">
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
        {/* Collegiate Tagline */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2D6C3] shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#781215]" />
          <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#781215]">
            For All DTUites • Campus Exclusive
          </span>
        </div>

        {/* Main Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E1614] leading-[0.95]">
          Wear Your{" "}
          <span className="italic font-semibold text-[#781215]">Heritage.</span>
        </h1>
      </div>
    </section>
  );
}
