export interface HoodieColor {
  name: string;
  hex: string;
  frontGradient: string;
  backGradient: string;
}

export interface HoodieProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  specs: string[];
  colors: HoodieColor[];
  sizes: string[];
  badge: string;
  frontText: string[];
  backText: string[];
  backSubtext: string;
}

export const SIZE_CHART: Record<string, { chest: string; length: string; shoulder: string }> = {
  S:   { chest: "40", length: "26", shoulder: "19" },
  M:   { chest: "42", length: "27", shoulder: "20" },
  L:   { chest: "44", length: "28", shoulder: "21" },
  XL:  { chest: "46", length: "29", shoulder: "22" },
  XXL: { chest: "48", length: "30", shoulder: "23" },
};

export const PICKUP_POINTS = [
  "OAT (Open Air Theatre)",
  "Mechanical Dept Foyer",
  "Mic-Mac Canteen Area",
  "Hostel Quad (Mess Area)",
  "Raj Soin Hall / Sports Complex",
] as const;

export const products: HoodieProduct[] = [
  {
    id: "heritage-1941",
    name: "DTU 1941 Heritage Hoodie",
    subtitle: "Collegiate varsity chest crest + giant back typographic print",
    price: 1499,
    originalPrice: 1999,
    specs: ["380 GSM FLEECE", "OVERSIZED BOXY FIT", "HIGH-DENSITY PUFF PRINT"],
    colors: [
      { name: "Obsidian Black", hex: "#1a1a1a", frontGradient: "from-zinc-900 to-neutral-800", backGradient: "from-neutral-800 to-zinc-900" },
      { name: "DTU Maroon", hex: "#800000", frontGradient: "from-red-950 to-red-900", backGradient: "from-red-900 to-red-950" },
      { name: "Storm Grey", hex: "#4a4a4a", frontGradient: "from-zinc-700 to-zinc-600", backGradient: "from-zinc-600 to-zinc-700" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "BATCH 1 DROP • PICK-UP NEXT WEEK",
    frontText: ["DTU", "EST. 1941"],
    backText: ["DELHI", "TECHNOLOGICAL", "UNIVERSITY"],
    backSubtext: "Excellence in Engineering Since 1941 • 28.7501°N 77.1177°E",
  },
  {
    id: "cyber-void",
    name: "Cyber Void Tech Hoodie",
    subtitle: "Tech/coding aesthetic with campus coordinates",
    price: 1599,
    originalPrice: 2199,
    specs: ["380 GSM COMBED COTTON", "DROP SHOULDER", "REFLECTIVE PRINT"],
    colors: [
      { name: "Void Black", hex: "#0d0d0d", frontGradient: "from-black to-zinc-900", backGradient: "from-zinc-900 to-black" },
      { name: "Cyber White", hex: "#e5e5e5", frontGradient: "from-zinc-200 to-zinc-300", backGradient: "from-zinc-300 to-zinc-200" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED • 250 PIECES ONLY",
    frontText: ["CYBER", "VOID"],
    backText: ["28.7501°N", "77.1177°E", "DTU//TECH"],
    backSubtext: "sudo make excellence • Delhi Technological University",
  },
  {
    id: "dce-classic",
    name: "The DCE Classic Heavyweight",
    subtitle: "Retro Delhi College of Engineering varsity arch",
    price: 1399,
    originalPrice: 1899,
    specs: ["400 GSM HEAVYWEIGHT", "RELAXED FIT", "VINTAGE WASH FINISH"],
    colors: [
      { name: "Heritage Navy", hex: "#0B132B", frontGradient: "from-blue-950 to-indigo-950", backGradient: "from-indigo-950 to-blue-950" },
      { name: "Classic Black", hex: "#171717", frontGradient: "from-neutral-900 to-neutral-800", backGradient: "from-neutral-800 to-neutral-900" },
      { name: "Varsity Maroon", hex: "#6b1010", frontGradient: "from-red-950 to-rose-950", backGradient: "from-rose-950 to-red-950" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "RETRO DROP • FAN FAVOURITE",
    frontText: ["DCE", "DELHI"],
    backText: ["DELHI COLLEGE", "OF", "ENGINEERING"],
    backSubtext: "Established 1941 • Now DTU • Forever DCE",
  },
  {
    id: "minimal-crest",
    name: "Minimalist Crest Core Hoodie",
    subtitle: "Clean understated left-chest emblem",
    price: 1299,
    originalPrice: 1699,
    specs: ["360 GSM FRENCH TERRY", "REGULAR FIT", "EMBROIDERED CREST"],
    colors: [
      { name: "Stealth Black", hex: "#141414", frontGradient: "from-zinc-900 to-zinc-800", backGradient: "from-zinc-800 to-zinc-900" },
      { name: "Ash Grey", hex: "#52525b", frontGradient: "from-zinc-600 to-zinc-500", backGradient: "from-zinc-500 to-zinc-600" },
      { name: "Off White", hex: "#d4d4d8", frontGradient: "from-zinc-300 to-zinc-200", backGradient: "from-zinc-200 to-zinc-300" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "EVERYDAY ESSENTIAL",
    frontText: ["DTU", "•"],
    backText: ["DTU"],
    backSubtext: "Delhi Technological University",
  },
];
