import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { logoImage } from "@/assets/contenido";

export function EncabezadoSitio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (isHome && currentScrollY < 120) {
        setVisible(false);
      } else {
        if (currentScrollY < lastScrollY) {
          setVisible(true); // Scroll up -> show
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false); // Scroll down -> hide
        }
      }
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    if (!isHome) {
      setVisible(true);
    } else {
      setVisible(window.scrollY > 120);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 left-0 right-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur-md transition-all duration-500 ease-in-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <img
            src={logoImage}
            alt="Logo FIPQ"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl uppercase tracking-tight leading-none">
            FIPQ <span className="text-carmine">·</span> Metáfora
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em]">
          <Link
            to="/festival"
            activeProps={{
              className: "text-carmine font-bold underline underline-offset-4 decoration-2",
            }}
            className="hover:text-carmine transition-colors"
          >
            Festival
          </Link>
          <Link
            to="/editorial"
            activeProps={{
              className: "text-ink font-bold underline underline-offset-4 decoration-2",
            }}
            className="hover:text-ink transition-colors"
          >
            Editorial
          </Link>

          <Link
            to="/festival/manifiesto"
            activeProps={{ className: "bg-carmine border-carmine" }}
            className="rounded-none border-2 border-ink bg-ink px-3 py-1.5 text-cream hover:bg-carmine hover:border-carmine transition-colors"
          >
            Información
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t-2 border-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] bg-cream"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link
              to="/festival"
              activeProps={{ className: "bg-carmine text-cream font-bold" }}
              className="px-3 py-3 hover:bg-carmine hover:text-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Festival
            </Link>
            <Link
              to="/editorial"
              activeProps={{ className: "bg-ink text-cream font-bold" }}
              className="px-3 py-3 hover:bg-ink hover:text-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Editorial
            </Link>

            <Link
              to="/festival/manifiesto"
              activeProps={{ className: "bg-carmine border-carmine" }}
              className="mt-2 border-2 border-ink bg-ink px-3 py-3 text-cream hover:bg-carmine hover:border-carmine transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Información
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
