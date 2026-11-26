import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dtu-merch.vercel.app"),
  title: "DTU Merch — Official Collegiate Hoodie",
  description:
    "400 GSM heavyweight off-white & oxblood varsity collegiate hoodies. Minimo from ₹799 • Classico from ₹1,099 • Buy 3 save ₹50/hoodie, more than 3 save ₹100/hoodie.",
  openGraph: {
    type: "website",
    url: "https://dtu-merch.vercel.app/",
    siteName: "DTU Merch",
    title: "DTU Merch — The DTU Heritage Hoodie",
    description:
      "400 GSM DTU Varsity & Minimalist Hoodies. Minimo from ₹799 • Classico from ₹1,099 with DTU33. Buy 3 get ₹50/ea off • More than 3 get ₹100/ea off.",
    images: [
      {
        url: "/images/dtu-share-hoodie.jpg",
        secureUrl: "https://dtu-merch.vercel.app/images/dtu-share-hoodie.jpg",
        type: "image/jpeg",
        width: 1024,
        height: 605,
        alt: "DTU Merch Classico Varsity Stripe Hoodie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTU Merch — The DTU Heritage Hoodie",
    description:
      "400 GSM DTU Varsity & Minimalist Hoodies. Minimo from ₹799 • Classico from ₹1,099. Campus pick-up at AB4.",
    images: [
      {
        url: "/images/dtu-share-hoodie.jpg",
        alt: "DTU Merch Classico Varsity Stripe Hoodie",
      },
    ],
  },
  icons: {
    icon: "/images/dtu-logo.jpg",
    apple: "/images/dtu-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased bg-[#FAF6EE] text-[#1E1614] selection:bg-[#781215] selection:text-[#FAF6EE]`}
      >
        {children}
      </body>
    </html>
  );
}
