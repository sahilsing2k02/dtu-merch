"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CartProvider, useCart } from "@/store/cart-context";
import { sendEmailNotification } from "@/utils/notify";
import AnnouncementTicker from "@/components/announcement-ticker";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PromoBanner from "@/components/promo-banner";
import CartDrawer from "@/components/cart-drawer";
import SizeGuideModal from "@/components/size-guide-modal";
import WhatsAppButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";

interface DtuAddToCartDetail {
  sku: string;
  colourway: string;
  colourwayLabel: string;
  size: string;
  name: string | null;
  batch: string | null;
  price: number;
  currency: string;
  quantity: number;
}

function StorePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const { addItem } = useCart();
  const hoodieRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const applyConsistentBg = () => {
      const el = hoodieRef.current;
      const root = el?.shadowRoot;
      if (!root || root.getElementById("dtu-theme-sync")) return;
      const style = document.createElement("style");
      style.id = "dtu-theme-sync";
      style.textContent = `
        :host {
          --taupe: #FAF6EE !important;
          --paper: #FFFFFF !important;
          --line: #E2D6C3 !important;
          --ink: #1E1614 !important;
          --ink-soft: #6E5D53 !important;
          background: #FAF6EE !important;
        }
        .buy {
          background: #FAF6EE !important;
        }
        .name-trigger-wrap {
          margin-top: -0.85rem !important;
        }
        .btn-name-box {
          display: inline-flex !important;
          align-items: center !important;
          gap: .75rem !important;
          padding: .65rem .95rem !important;
          background: #FFFFFF !important;
          border: 1.5px solid #E2D6C3 !important;
          border-radius: 6px !important;
          color: #1E1614 !important;
          font-size: .9375rem !important;
          font-weight: 550 !important;
          cursor: pointer !important;
          transition: all .15s ease !important;
          box-shadow: 0 1px 3px rgba(42,23,20,.04) !important;
        }
        .btn-name-box:hover {
          border-color: #781215 !important;
          background: #F7E4D0 !important;
          color: #781215 !important;
        }
        .btn-name-box .sq-box {
          display: inline-grid !important;
          place-items: center !important;
          width: 1.5rem !important;
          height: 1.5rem !important;
          border: 1.5px solid #E2D6C3 !important;
          border-radius: 4px !important;
          background: #FAF6EE !important;
          color: #1E1614 !important;
          flex-shrink: 0 !important;
        }
        .btn-name-box:hover .sq-box {
          border-color: #781215 !important;
          background: #781215 !important;
          color: #FFFFFF !important;
        }
        .put-name-card {
          display: grid !important;
          gap: 1.25rem !important;
          padding: 1.5rem !important;
          background: #FFFFFF !important;
          border: 1.5px solid #E2D6C3 !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 16px rgba(42,23,20,.05) !important;
          max-width: 30rem !important;
        }
        @media (max-width: 820px) {
          .viewer {
            background: #FAF6EE !important;
          }
        }
      `;
      root.appendChild(style);
    };

    applyConsistentBg();
    const timer = setInterval(applyConsistentBg, 150);
    document.addEventListener("dtu:ready", applyConsistentBg);

    const handleAddToCart = (e: Event) => {
      const detail = (e as CustomEvent<DtuAddToCartDetail>).detail;
      if (!detail) return;
      const customLabel = detail.name
        ? `${detail.colourwayLabel} • ${detail.name.toUpperCase()}${detail.batch ? ` (${detail.batch})` : ""}`
        : detail.colourwayLabel;

      const chosenSize = detail.size || "L";
      const itemPrice = detail.price || 1499;

      addItem({
        productId: detail.sku || "heritage-1941",
        name: "DTU Heritage Hoodie",
        color: customLabel,
        size: chosenSize,
        price: itemPrice,
      });

      // Instantly open the cart drawer so the user immediately sees the added item
      setCartOpen(true);

      // Email notification to merchdtudce@gmail.com
      sendEmailNotification({
        subject: `🛍️ New Add-to-Cart: DTU Heritage Hoodie (${chosenSize})`,
        data: {
          Event: "Add to Cart",
          Product: "DTU Heritage Hoodie",
          Size: chosenSize,
          Customization: customLabel,
          Batch: detail.batch || "None",
          Price: `₹${itemPrice}`,
          Alert_For: "merchdtudce@gmail.com",
        },
      });
    };

    const handleVisitCart = () => setCartOpen(true);

    document.addEventListener("dtu:add-to-cart", handleAddToCart);
    document.addEventListener("dtu:visit-cart", handleVisitCart);
    return () => {
      clearInterval(timer);
      document.removeEventListener("dtu:ready", applyConsistentBg);
      document.removeEventListener("dtu:add-to-cart", handleAddToCart);
      document.removeEventListener("dtu:visit-cart", handleVisitCart);
    };
  }, [addItem]);

  return (
    <>
      <AnnouncementTicker />
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onSizeGuideOpen={() => setSizeGuideOpen(true)}
      />
      <PromoBanner />
      <HeroSection />

      {/* 360° Interactive 3D Hoodie Section */}
      <section id="collection">
        <dtu-hoodie
          ref={(node) => {
            hoodieRef.current = node;
          }}
          price="1499"
          currency="INR"
        />
        <Script src="/js/dtu-hoodie.js?v=26" strategy="afterInteractive" />
      </section>

      {/* Heritage / About section */}
      <section id="about" className="border-t border-[#E2D6C3]">
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
              signature hoodie is cut from 350 GSM heavyweight combed cotton
              with custom oxblood varsity stripes and high-density crest prints
              built to outlast your semesters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "350", label: "GSM Fleece Weight" },
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
