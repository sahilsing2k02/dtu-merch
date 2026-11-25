"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart-context";

interface NavbarProps {
  onCartOpen: () => void;
  onSizeGuideOpen?: () => void;
}

export default function Navbar({ onCartOpen, onSizeGuideOpen }: NavbarProps) {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#E2D6C3]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-18">
        {/* Crest / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/dtu-logo.jpg"
            alt="DTU Hoodies Logo"
            className="w-12 h-12 rounded-xl object-cover border border-[#E2D6C3] shadow-xs group-hover:scale-105 transition-transform"
          />
          <span className="font-serif text-xl font-extrabold tracking-tight text-[#1E1614]">
            DTU <span className="text-[#781215]">MERCH</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-semibold tracking-[0.16em] uppercase text-[#6E5D53]">
          <button
            onClick={onSizeGuideOpen}
            className="hover:text-[#781215] transition-colors uppercase cursor-pointer"
          >
            Size Guide
          </button>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FAF6EE] border border-[#E2D6C3] text-[#1E1614] transition-all cursor-pointer"
            aria-label="Open bag"
          >
            <ShoppingBag size={16} className="text-[#781215]" />
            <span className="text-xs font-semibold tracking-wider hidden sm:inline">BAG</span>
            {totalItems > 0 && (
              <span className="bg-[#781215] text-[#F7F1E8] text-[10px] font-bold min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/60 text-[#1E1614] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#E2D6C3] bg-[#F7F1E8] animate-fade-in px-5 py-3 space-y-1">
          <button
            onClick={() => {
              setMenuOpen(false);
              onSizeGuideOpen?.();
            }}
            className="block w-full text-left py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#6E5D53] hover:text-[#781215] transition-colors"
          >
            Size Guide
          </button>
        </nav>
      )}
    </header>
  );
}
