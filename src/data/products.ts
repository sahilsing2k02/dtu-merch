export interface HoodieColor {
  name: string;
  hex: string;
  stripeHex?: string;
  frontGradient: string;
  backGradient: string;
  isCreamTheme?: boolean;
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
  image?: string;
}

export const SIZE_CHART: Record<string, { chest: string; length: string; shoulder: string }> = {
  S:   { chest: "40", length: "26", shoulder: "19" },
  M:   { chest: "42", length: "27", shoulder: "20" },
  L:   { chest: "44", length: "28", shoulder: "21" },
  XL:  { chest: "46", length: "29", shoulder: "22" },
  XXL: { chest: "48", length: "30", shoulder: "23" },
};

export const PICKUP_POINTS = [
  "AB4 (Academic Block 4)",
] as const;

export const products: HoodieProduct[] = [
  {
    id: "heritage-1941",
    name: "DTU '41 Varsity Stripe Hoodie",
    subtitle:
      "Warm cream 400 GSM fleece with oxblood sleeve stripes, varsity chest typography & DelTech back seal",
    price: 999,
    originalPrice: 1999,
    specs: ["400 GSM FLEECE", "OXBLOOD STRIPE", "PUFF & CREST PRINT"],
    image: "/images/dtu-cream-hoodie.jpg",
    colors: [
      {
        name: "Ivory Cream / Oxblood",
        hex: "#F4E5CE",
        stripeHex: "#781215",
        frontGradient: "from-[#F7EBDC] via-[#F2E2CC] to-[#E9D5BA]",
        backGradient: "from-[#F2E2CC] via-[#EBD9C1] to-[#E2CCB0]",
        isCreamTheme: true,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "OFFICIAL DTU EDITION",
    frontText: ["DTU", "DELHI", "DELTECH"],
    backText: ["DELTECH", "SEAL"],
    backSubtext: "Delhi Technological University",
  },
];
