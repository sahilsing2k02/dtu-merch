"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart-context";

interface NavbarProps {
  onCartOpen: () => void;
}

export default function Navbar({ onCartOpen }: NavbarProps) {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Collection", "About", "Size Guide"];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#24242A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tighter">
            DTU<span className="text-[#800000]">MERCH</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartOpen}
            className="relative p-2 hover:bg-[#121215] rounded-lg transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#800000] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 hover:bg-[#121215] rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#24242A] bg-[#0A0A0B] animate-fade-in">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#121215] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
