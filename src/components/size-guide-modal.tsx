"use client";

import { X } from "lucide-react";
import { SIZE_CHART } from "@/data/products";

interface Props {
  onClose: () => void;
}

export default function SizeGuideModal({ onClose }: Props) {
  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/70" onClick={onClose} />
      <div className="fixed z-[60] inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto bg-[#121215] border border-[#24242A] p-6 animate-scale-up">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-black tracking-tight">Size Guide</h3>
          <button onClick={onClose} className="p-1 hover:bg-[#24242A] transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <p className="text-zinc-500 text-xs mb-4">All measurements in inches. Oversized/boxy fit — size up for ultra-relaxed look.</p>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#24242A] text-zinc-500 text-xs tracking-wider">
              <th className="text-left pb-2 font-semibold">SIZE</th>
              <th className="text-center pb-2 font-semibold">CHEST</th>
              <th className="text-center pb-2 font-semibold">LENGTH</th>
              <th className="text-center pb-2 font-semibold">SHOULDER</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(SIZE_CHART).map(([size, m]) => (
              <tr key={size} className="border-b border-[#24242A]/50 hover:bg-[#24242A]/30 transition-colors">
                <td className="py-2.5 font-bold">{size}</td>
                <td className="py-2.5 text-center text-zinc-400">{m.chest}&quot;</td>
                <td className="py-2.5 text-center text-zinc-400">{m.length}&quot;</td>
                <td className="py-2.5 text-center text-zinc-400">{m.shoulder}&quot;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
