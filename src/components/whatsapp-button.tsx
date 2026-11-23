"use client";

import { MessageCircle } from "lucide-react";

// shortcut: WhatsApp number placeholder, replace with real number before launch
const WHATSAPP_NUM = "919625609307";

interface Props {
  productName?: string;
}

export default function WhatsAppButton({ productName }: Props) {
  const query = productName
    ? `Hey DTU Merch team, I have a query about the ${productName}`
    : "Hey DTU Merch team, I have a query about your hoodies!";

  const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(query)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#25D366]/20 hover:bg-[#20BD5A] transition-all group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Ping indicator */}
      <span className="absolute -top-1 -right-1 w-3 h-3">
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping-slow" />
        <span className="relative block w-3 h-3 bg-[#25D366] rounded-full border-2 border-white" />
      </span>

      <MessageCircle size={20} />
      <span className="text-sm font-bold tracking-wide hidden sm:inline">Chat with us</span>
    </a>
  );
}
