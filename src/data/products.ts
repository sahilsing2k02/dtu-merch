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
  discountPerUnit: number;
  specs: string[];
  colors: HoodieColor[];
  sizes: string[];
  badge: string;
  frontText: string[];
  backText: string[];
  backSubtext: string;
  image?: string;
}

export interface HoodieDesignSpec {
  id: string;
  editionNumber: string;
  editionTag: string;
  title: string;
  subtitle: string;
  colourwayKey: "cream" | "plain" | "sand";
  mrp: number;
  salePrice: number;
  baseAdvance: number;
  discountPerUnit: number;
  highlights: { label: string; detail: string; highlight?: boolean }[];
  gallery?: { src: string; alt: string; label: string }[];
  isReplicaPlaceholder?: boolean;
}

export interface ComparisonRow {
  feature: string;
  design1: string;
  design2: string;
  isDifferent?: boolean;
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

export const HOODIE_DESIGNS: HoodieDesignSpec[] = [
  {
    id: "heritage-design-2",
    editionNumber: "Minimo",
    editionTag: "Base Edition • Clean Sleeves",
    title: "Minimo",
    subtitle:
      "Off-white 400 GSM fleece with clean stripeless sleeves, arched DTU Delhi front print & DelTech back seal.",
    colourwayKey: "sand",
    mrp: 1099,
    salePrice: 799,
    baseAdvance: 600,
    discountPerUnit: 300,
    isReplicaPlaceholder: false,
    gallery: [
      {
        src: "/images/minimo-detail-front.jpg",
        alt: "Minimo front DTU Delhi collegiate print and red woven DTU collar tag close-up",
        label: "Front & Collar Tag",
      },
      {
        src: "/images/minimo-detail-back.jpg",
        alt: "Minimo back DelTech university circular crest and double maroon lines close-up",
        label: "Back Seal",
      },
      {
        src: "/images/minimo-detail-fabric.jpg",
        alt: "Minimo 400 GSM heavy brushed cotton fleece and ribbed cuff stitching close-up",
        label: "400 GSM Fleece",
      },
    ],
    highlights: [
      { label: "400 GSM Fleece", detail: "Heavyweight combed cotton" },
      { label: "High-Density Prints", detail: "Crisp, fade-proof crest & arch" },
      { label: "Brushed Comfort", detail: "Soft fleece & ribbed cuffs" },
      { label: "Clean Sleeves", detail: "Minimalist stripeless look" },
    ],
  },
  {
    id: "heritage-1941",
    editionNumber: "Classico",
    editionTag: "Premium Edition • Stitched Stripes",
    title: "Classico",
    subtitle:
      "400 GSM heavyweight brushed fleece with oxblood varsity sleeve stripes, front collegiate mark & DelTech back seal.",
    colourwayKey: "cream",
    mrp: 1399,
    salePrice: 1099,
    baseAdvance: 850,
    discountPerUnit: 300,
    gallery: [
      {
        src: "/images/classico-detail-front.jpg",
        alt: "Classico front DTU Delhi collegiate print, stitched oxblood sleeve stripe, and red woven DTU collar tag close-up",
        label: "Front & Collar Tag",
      },
      {
        src: "/images/classico-detail-back.jpg",
        alt: "Classico back DelTech university circular crest, double maroon lines, and oxblood sleeve stripes close-up",
        label: "Back Seal",
      },
      {
        src: "/images/classico-detail-stripe.jpg",
        alt: "Classico cut-and-sewn stitched oxblood sleeve stripe and ribbed cuff close-up",
        label: "Stitched Stripe",
      },
    ],
    highlights: [
      { label: "400 GSM Fleece", detail: "Heavyweight combed cotton" },
      { label: "High-Density Prints", detail: "Crisp, fade-proof crest & arch" },
      { label: "Brushed Comfort", detail: "Soft fleece & ribbed cuffs" },
      {
        label: "Stitched Sleeve Stripes",
        detail: "Cut & sewn oxblood stripes — not printed",
        highlight: true,
      },
    ],
  },
];

export const COMPARISON_CHECKLIST: ComparisonRow[] = [
  {
    feature: "3D Fit & Fabric",
    design1: "400 GSM Brushed Cotton Fleece",
    design2: "400 GSM Brushed Cotton Fleece",
    isDifferent: false,
  },
  {
    feature: "Sleeve & Trim Styling",
    design1: "Oxblood Varsity Arm Stripes",
    design2: "Replica Preview (New Design Pending)",
    isDifferent: true,
  },
  {
    feature: "Front & Back Artwork",
    design1: "Varsity Chest Mark + DelTech Seal",
    design2: "Replica Preview (Design 02 Coming Soon)",
    isDifferent: true,
  },
  {
    feature: "Custom Name & B.Tech Batch",
    design1: "Included (Printed Under Back Seal)",
    design2: "Included (Printed Under Back Seal)",
    isDifferent: false,
  },
  {
    feature: "Sizes Available",
    design1: "S, M, L, XL, XXL",
    design2: "S, M, L, XL, XXL",
    isDifferent: false,
  },
  {
    feature: "Launch Price",
    design1: "₹1,199 (MRP ₹1,499)",
    design2: "₹1,199 (MRP ₹1,499) • Final TBD",
    isDifferent: true,
  },
];

export const products: HoodieProduct[] = [
  {
    id: "heritage-1941",
    name: "Classico",
    subtitle:
      "Off-white 400 GSM fleece with oxblood sleeve stripes, varsity chest typography & DelTech back seal",
    price: 1399,
    originalPrice: 1399,
    discountPerUnit: 300,
    specs: ["400 GSM FLEECE", "OXBLOOD STRIPE", "PUFF & CREST PRINT"],
    image: "/images/dtu-cream-hoodie.jpg",
    colors: [
      {
        name: "Off White • Classico",
        hex: "#F5F2EB",
        stripeHex: "#781215",
        frontGradient: "from-[#F7EBDC] via-[#F2E2CC] to-[#E9D5BA]",
        backGradient: "from-[#F2E2CC] via-[#EBD9C1] to-[#E2CCB0]",
        isCreamTheme: true,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "CLASSICO",
    frontText: ["DTU", "DELHI", "DELTECH"],
    backText: ["DELTECH", "SEAL"],
    backSubtext: "Delhi Technological University",
  },
  {
    id: "heritage-design-2",
    name: "Minimo",
    subtitle:
      "Off-white 400 GSM fleece without sleeve stripes, arched DTU Delhi front print & DelTech back seal",
    price: 1099,
    originalPrice: 1099,
    discountPerUnit: 300,
    specs: ["400 GSM FLEECE", "CLEAN SLEEVES", "CUSTOM NAME & BATCH"],
    image: "/images/dtu-cream-hoodie.jpg",
    colors: [
      {
        name: "Off White • Minimo",
        hex: "#F5F2EB",
        stripeHex: "#781215",
        frontGradient: "from-[#F7EBDC] via-[#F2E2CC] to-[#E9D5BA]",
        backGradient: "from-[#F2E2CC] via-[#EBD9C1] to-[#E2CCB0]",
        isCreamTheme: true,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "MINIMO",
    frontText: ["DTU", "DELHI", "DELTECH"],
    backText: ["DELTECH", "SEAL"],
    backSubtext: "Delhi Technological University",
  },
  {
    id: "heritage-plain",
    name: "DTU '41 Classic Hoodie (No Stripes)",
    subtitle:
      "Minimalist off-white 400 GSM fleece without sleeve stripes, varsity chest typography & DelTech back seal",
    price: 1099,
    originalPrice: 1099,
    discountPerUnit: 300,
    specs: ["400 GSM FLEECE", "CLEAN SLEEVES", "PUFF & CREST PRINT"],
    image: "/images/dtu-cream-hoodie.jpg",
    colors: [
      {
        name: "Off White (No Stripes)",
        hex: "#F5F2EB",
        frontGradient: "from-[#F7EBDC] via-[#F2E2CC] to-[#E9D5BA]",
        backGradient: "from-[#F2E2CC] via-[#EBD9C1] to-[#E2CCB0]",
        isCreamTheme: true,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "MINIMAL DTU EDITION",
    frontText: ["DTU", "DELHI", "DELTECH"],
    backText: ["DELTECH", "SEAL"],
    backSubtext: "Delhi Technological University",
  },
];
