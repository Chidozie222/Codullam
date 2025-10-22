"use client";

export default function Navbar() {
  return (
    <header
      className="fixed top-2.5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-3xl rounded-full 
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-6 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#00b07f] to-[#00523a] flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-semibold text-lg text-white">Codullam</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm items-center text-black/90">
          <a href="/about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#CASE STUDIES" className="hover:text-white transition-colors">
            CASE STUDIES
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#003024] text-white hover:bg-[#00523a] transition-all"
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
