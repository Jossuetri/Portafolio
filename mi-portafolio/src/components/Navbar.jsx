import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].id);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition-colors hover:text-fg ${active === id ? "text-accent" : "text-muted"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-sm text-bg">
            {PROFILE.initials}
          </span>
          {PROFILE.name}
        </a>

        <nav className="hidden gap-6 text-sm lg:flex">
          {NAV_LINKS.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105 lg:inline-flex"
        >
          Hablemos <ArrowUpRight size={16} />
        </a>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/5 px-6 py-4 lg:hidden">
          {NAV_LINKS.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
