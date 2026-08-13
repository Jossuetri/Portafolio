import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B0E1A]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#F4763A] to-[#FF8C42] text-sm">
            JA
          </span>
          Jossue Eugenio
        </div>

        <nav className="hidden gap-6 text-sm text-[#9BA3BF] lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition-colors hover:text-white ${i === 0 ? "text-[#F4763A]" : ""}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1 rounded-full bg-gradient-to-r from-[#F4763A] to-[#FF8C42] px-5 py-2 text-sm font-medium shadow-lg shadow-[#F4763A]/20 transition-transform hover:scale-105 lg:inline-flex"
        >
          Hablemos <ArrowUpRight size={16} />
        </a>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-white/5 px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#9BA3BF]">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
