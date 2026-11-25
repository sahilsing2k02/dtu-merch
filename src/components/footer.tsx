"use client";

interface FooterProps {
  onSizeGuideOpen?: () => void;
}

export default function Footer({ onSizeGuideOpen }: FooterProps) {
  return (
    <footer className="border-t border-[#E2D6C3]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/images/dtu-logo.jpg"
                alt="DTU Hoodies Logo"
                className="w-9 h-9 rounded-xl object-cover border border-[#E2D6C3] shadow-xs"
              />
              <h3 className="font-serif text-xl font-bold tracking-tight text-[#1E1614]">
                DTU <span className="text-[#781215]">MERCH</span>
              </h3>
            </div>
            <p className="text-[#6E5D53] text-sm leading-relaxed max-w-xs">
              350 GSM heavyweight collegiate apparel for everyone at Delhi
              Technological University. Made by DTUites, for all DTUites.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#781215] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6E5D53]">
              <li>
                <a
                  href="#collection"
                  className="hover:text-[#781215] transition-colors"
                >
                  The Hoodie
                </a>
              </li>
              <li>
                <button
                  onClick={onSizeGuideOpen}
                  className="hover:text-[#781215] transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#781215] transition-colors"
                >
                  Heritage &amp; Craft
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#781215] mb-4">
              Campus Pick-up Point
            </h4>
            <ul className="space-y-2 text-sm text-[#6E5D53]">
              <li>AB4 (Academic Block 4)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E2D6C3] pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[#6E5D53] text-xs">
          <p>© 2026 DTU Merch. Campus exclusive — open to all DTU students &amp; alumni.</p>
          <p className="tracking-wider">
            Delhi Technological University • 28.7501°N, 77.1177°E
          </p>
        </div>
      </div>
    </footer>
  );
}
