"use client";

import { useState } from "react";
import { CartProvider } from "@/store/cart-context";
import AnnouncementTicker from "@/components/announcement-ticker";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import ProductViewer from "@/components/product-viewer";
import CartDrawer from "@/components/cart-drawer";
import WhatsAppButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";
import { products, type HoodieProduct } from "@/data/products";

function StorePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<HoodieProduct | null>(null);

  return (
    <>
      <AnnouncementTicker />
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <HeroSection />

      {/* Collection grid */}
      <section id="collection" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] text-[#800000] font-semibold mb-2">THE DROP</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">BATCH &apos;26 COLLECTION</h2>
          <p className="text-zinc-500 text-sm mt-2">4 designs. Limited run. Campus pick-up only.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onSelect={setSelectedProduct} />
          ))}
        </div>
      </section>

      {/* About section */}
      <section id="about" className="border-t border-[#24242A]">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#800000] font-semibold mb-2">ABOUT</p>
            <h2 className="text-3xl font-black tracking-tighter mb-4">MADE FOR DTU,<br/>BY DTU.</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We&apos;re a student-run initiative delivering premium quality campus streetwear 
              to Delhi Technological University. Every hoodie is crafted with 380 GSM+ heavyweight 
              combed cotton, oversized boxy fits, and high-density prints that last years — not semesters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "380+", label: "GSM Fabric Weight" },
              { num: "250", label: "Pieces Per Drop" },
              { num: "5", label: "Campus Pick-up Points" },
              { num: "₹0", label: "Delivery Charges" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#121215] border border-[#24242A] p-5 text-center">
                <p className="text-2xl font-black text-[#800000]">{stat.num}</p>
                <p className="text-zinc-500 text-xs mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals & overlays */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {selectedProduct && (
        <ProductViewer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
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
