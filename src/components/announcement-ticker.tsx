"use client";

export default function AnnouncementTicker() {
  const text =
    "⚡ DTU BATCH '26 DROP LIVE  •  FREE CAMPUS PICK-UP  •  380 GSM HEAVYWEIGHT COMBED COTTON  •  PAY ON PICKUP  •  LIMITED 250 PIECES  •  ";

  return (
    <div className="bg-[#800000] text-white text-xs font-semibold tracking-widest overflow-hidden whitespace-nowrap select-none">
      <div className="animate-marquee inline-block py-2">
        {/* Duplicate text for seamless loop */}
        <span>{text}{text}{text}{text}</span>
      </div>
    </div>
  );
}
