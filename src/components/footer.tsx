"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#24242A] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-black tracking-tighter mb-3">
              DTU<span className="text-[#800000]">MERCH</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium heavyweight campus streetwear for Delhi Technological University.
              Made by DTU students, for DTU students.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-zinc-500 mb-3">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#size-guide" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About DTU Merch</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-zinc-500 mb-3">CAMPUS PICK-UP</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>OAT (Open Air Theatre)</li>
              <li>Mechanical Dept Foyer</li>
              <li>Mic-Mac Canteen Area</li>
              <li>Hostel Quad (Mess Area)</li>
              <li>Raj Soin Hall / Sports Complex</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#24242A] pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-zinc-600 text-xs">
          <p>© 2026 DTU Merch. Campus exclusive — not for resale.</p>
          <p>Delhi Technological University • 28.7501°N, 77.1177°E</p>
        </div>
      </div>
    </footer>
  );
}
