"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUM = "919625609307";

interface Props {
  productName?: string;
}

export default function WhatsAppButton({ productName }: Props) { 
  const query = productName
    ? `Hey DTU Merch team, I have a query about the ${productName}`
    : "Hey DTU Merch team, I have a query about the DTU '41 hoodie!";

  const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(query)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#781215] text-[#FAF6EE] pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#781215]/25 hover:bg-[#5E0D10] border border-[#9E2A2D]/40 transition-all group"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute -top-0.5 -right-0.5 w-3 h-3">
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping-slow" />
        <span className="relative block w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#FAF6EE]" />
      </span>

      <MessageCircle size={18} />
      <span className="text-xs font-bold tracking-[0.12em] uppercase hidden sm:inline">
        Campus Concierge
      </span>
    </a>
  );
}
