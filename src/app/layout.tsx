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
    "400 GSM heavyweight off-white & oxblood varsity collegiate hoodie for all Delhi Technological University students and alumni. Varsity Stripe ₹1,199 (MRP ₹1,499) • Classic Plain ₹799.",
  openGraph: {
    type: "website",
    url: "https://dtu-merch.vercel.app",
    siteName: "DTU Merch",
    title: "DTU Merch — The DTU Heritage Hoodie",
    description:
      "400 GSM DTU Varsity Stripe Hoodie with oxblood sleeve strips & university seal. ₹1,199 with DTU33 (MRP ₹1,499). Campus pick-up at AB4.",
    images: [
      {
        url: "/images/dtu-cream-hoodie.jpg",
        width: 1024,
        height: 682,
        alt: "DTU '41 Varsity Stripe Heritage Hoodie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTU Merch — The DTU Heritage Hoodie",
    description:
      "400 GSM DTU Varsity Stripe Hoodie with oxblood sleeve strips & university seal. ₹1,199 with DTU33 (MRP ₹1,499).",
    images: ["/images/dtu-cream-hoodie.jpg"],
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
