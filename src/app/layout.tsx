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
  title: "DTU Merch — Official Collegiate Hoodie",
  description:
    "350 GSM heavyweight cream & oxblood collegiate hoodie for all Delhi Technological University students and alumni. Campus pick-up only.",
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
