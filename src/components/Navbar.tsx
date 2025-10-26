"use client";
import Image from "next/image";
import Link from "next/link";
// Import necessary hooks and components
import { useState } from "react";
import { usePathname } from "next/navigation"; // <-- New import
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- Get the current path

  // Corrected image src for public folder access
  const logoSrcWhite = "/Codullam Logo.png";
  const logoSrcBlack = "/Codullam Logo black.png"

  // Logic to determine the text color based on the current path
  // If the path is exactly '/about', use 'text-black/90', otherwise use the default color
  const codullamTextColor =
    pathname === "/about" ? "text-black/90" : "text-[#DDFA6C]";
  
  const activeImage = pathname === "/about" ? logoSrcBlack : logoSrcWhite

  return (
    <header
      className="fixed top-2.5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-3xl max-w-7xl rounded-full 
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-4 sm:px-6 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-2 sm:gap-3" href={"/"}>
          <Image
            src={activeImage}
            alt="codullam Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          {/* Apply the dynamic color class */}
          <span
            className={`font-semibold text-base sm:text-lg transition-colors ${codullamTextColor}`}
          >
            Codullam
          </span>
        </Link>

        {/* Desktop Nav Links (Visible on medium screens and up) */}
        <nav className="hidden md:flex gap-6 text-sm items-center text-black/90">
          <Link href="/about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link
            href="#CASE STUDIES"
            className="hover:text-white transition-colors"
          >
            CASE STUDIES
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#003024] text-white hover:bg-[#00523a] transition-all"
          >
            Book a call
          </Link>
        </nav>

        {/* Mobile Menu Button (Visible on small screens) */}
        <button
          className="md:hidden text-black/90 hover:text-white transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full rounded-xl bg-white/95 border border-white/20 shadow-xl p-4 md:hidden">
          <nav className="flex flex-col gap-4 text-black/90">
            <Link
              href="/about"
              className="hover:text-[#00523a] transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="#CASE STUDIES"
              className="hover:text-[#00523a] transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              CASE STUDIES
            </Link>
            <Link
              href="#contact"
              className="w-full text-center px-4 py-3 mt-2 rounded-lg bg-[#003024] text-white hover:bg-[#00523a] transition-all font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
