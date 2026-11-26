"use client";

import { X } from "lucide-react";
import { SIZE_CHART } from "@/data/products";

interface Props {
  onClose: () => void;
}

export default function SizeGuideModal({ onClose }: Props) {
  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-[#1E1614]/60 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed z-[60] inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto bg-[#FAF6EE] border border-[#E2D6C3] rounded-3xl p-5 sm:p-6 shadow-2xl animate-scale-up">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#781215]">
              Collegiate Fit
            </p>
            <h3 className="font-serif text-xl font-black text-[#1E1614]">
              Size Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EAE0D0] text-[#1E1614] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-[#6E5D53] text-xs mb-5 leading-relaxed">
          All measurements in inches. Tailored oversized boxy fit — size up for
          an ultra-relaxed drape.
        </p>

        <div className="bg-white rounded-2xl border border-[#E2D6C3] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E2D6C3] bg-[#F3ECE0] text-[#781215] text-[11px] tracking-[0.16em] uppercase">
                <th className="text-left py-3 px-4 font-bold">Size</th>
                <th className="text-center py-3 px-3 font-bold">Chest</th>
                <th className="text-center py-3 px-3 font-bold">Length</th>
                <th className="text-center py-3 px-4 font-bold">Shoulder</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(SIZE_CHART).map(([size, m]) => (
                <tr
                  key={size}
                  className="border-b last:border-b-0 border-[#F0E6D6] hover:bg-[#FAF6EE] transition-colors"
                >
                  <td className="py-3 px-4 font-bold text-[#1E1614]">{size}</td>
                  <td className="py-3 px-3 text-center text-[#6E5D53]">
                    {m.chest}&quot;
                  </td>
                  <td className="py-3 px-3 text-center text-[#6E5D53]">
                    {m.length}&quot;
                  </td>
                  <td className="py-3 px-4 text-center text-[#6E5D53]">
                    {m.shoulder}&quot;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
