"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { CartProvider } from "@/store/cart-context";
import { HOODIE_DESIGNS } from "@/data/products";
import AnnouncementTicker from "@/components/announcement-ticker";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PromoBanner from "@/components/promo-banner";
import HoodieShowcaseCard from "@/components/hoodie-showcase-card";
import CartDrawer from "@/components/cart-drawer";
import SizeGuideModal from "@/components/size-guide-modal";
import WhatsAppButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";

function StorePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const handleItemAdded = useCallback(() => {
    setCartOpen(true);
  }, []);

  useEffect(() => {
    const handleVisitCart = () => setCartOpen(true);
    document.addEventListener("dtu:visit-cart", handleVisitCart);
    return () => {
      document.removeEventListener("dtu:visit-cart", handleVisitCart);
    };
  }, []);

  return (
    <>
      <AnnouncementTicker />
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onSizeGuideOpen={() => setSizeGuideOpen(true)}
      />
      <PromoBanner />
      <HeroSection />

      {/* Side-by-Side 360° Interactive 3D Hoodie Cards & Difference Checklist */}
      <section
        id="collection"
        className="scroll-mt-20 max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-[#781215] font-bold uppercase mb-1.5">
              Compare &amp; Customize
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1E1614]">
              Two Editions. Custom Name &amp; Batch.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6E5D53] max-w-md">
            Rotate both 3D hoodies side by side, preview your name &amp; B.Tech
            batch on the back, and compare what each design includes below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {HOODIE_DESIGNS.map((design) => (
            <HoodieShowcaseCard
              key={design.id}
              design={design}
              onItemAdded={handleItemAdded}
            />
          ))}
        </div>

        <Script src="/js/dtu-hoodie.js?v=47" strategy="afterInteractive" />
      </section>

      {/* Heritage / About section */}
      <section id="about" className="scroll-mt-20 border-t border-[#E2D6C3]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-[#781215] font-bold uppercase mb-2">
              Delhi Technological University
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#1E1614] mb-5 leading-tight">
              Made for DTU,
              <br />
              <span className="italic font-semibold text-[#781215]">
                Crafted for Legacy.
              </span>
            </h2>
            <p className="text-[#6E5D53] text-sm md:text-base leading-relaxed">
              We&apos;re a student-run collective bringing quiet-luxury
              collegiate streetwear to Delhi Technological University. Our
              signature hoodie is cut from 400 GSM heavyweight combed cotton
              with custom oxblood varsity stripes and high-density crest prints
              built to outlast your semesters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "400", label: "GSM Fleece Weight" },
              { num: "ALL", label: "DTU Students & Alumni" },
              { num: "AB4", label: "Campus Pick-up Point" },
              { num: "₹0", label: "Delivery Charges" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E2D6C3] rounded-2xl p-6 text-center shadow-xs"
              >
                <p className="font-serif text-4xl font-bold text-[#781215]">
                  {stat.num}
                </p>
                <p className="text-[#6E5D53] text-xs font-medium mt-1.5 tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onSizeGuideOpen={() => setSizeGuideOpen(true)} />

      {/* Modals & overlays */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {sizeGuideOpen && (
        <SizeGuideModal onClose={() => setSizeGuideOpen(false)} />
      )}
      <WhatsAppButton />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <StorePage />
    </CartProvider>
  );
}
