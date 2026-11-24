"use client";

export default function AnnouncementTicker() {
  const text =
    "DTU OFFICIAL COLLEGIATE DROP  •  350 GSM CREAM & OXBLOOD FLEECE  •  FOR ALL DTUITES  •  FREE CAMPUS PICK-UP  •  PAY ON COLLECTION  •  ";

  return (
    <div className="bg-[#781215] text-[#FAF6EE] text-[11px] font-medium tracking-[0.22em] uppercase overflow-hidden whitespace-nowrap select-none border-b border-[#5E0D10]">
      <div className="animate-marquee inline-block py-2.5">
        <span>{text}{text}{text}{text}</span>
      </div>
    </div>
  );
}
