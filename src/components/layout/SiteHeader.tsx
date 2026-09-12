import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { logoImage, imagenesSitio } from "@/assets/contenido";

export function EncabezadoSitio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileFestivalOpen, setMobileFestivalOpen] = useState(false);
  const [mobileEditorialOpen, setMobileEditorialOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isArchive = location.pathname.includes("/archivo");
  const isFestival = location.pathname.includes("/festival");
  const isEditorial = location.pathname.includes("/editorial");
  
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const threshold = 50;

      setIsAtTop(currentScrollY < threshold);

      if (isArchive) {
        setVisible(true);
      } else {
        if (currentScrollY < lastScrollY || currentScrollY < threshold) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > threshold) {
          setVisible(false);
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

    setIsAtTop(window.scrollY < 50);
    setVisible(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isArchive]);

  // Close mobile accordions on menu close
  useEffect(() => {
    if (!menuOpen) {
      setMobileFestivalOpen(false);
      setMobileEditorialOpen(false);
    }
  }, [menuOpen]);

  // Determine dynamic island avatar
  let avatarImg = logoImage;
  let avatarAlt = "Logo FIPQ";
  if (isFestival && !isHome) {
    avatarImg = imagenesSitio.stageNight;
    avatarAlt = "Festival";
  } else if (isEditorial && !isHome) {
    avatarImg = imagenesSitio.booksStack;
    avatarAlt = "Editorial";
  }

  return (
    <header
      className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[85%] max-w-6xl z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHome && isAtTop
          ? "bg-transparent text-cream"
          : "bg-ink/80 backdrop-blur-md border-2 border-ink shadow-[6px_6px_0_0_#121212] text-cream"
      } ${
        visible || menuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-[150%] opacity-0 pointer-events-none"
      }`}
    >
      <div className={`flex items-center ${isHome && isAtTop ? "justify-end" : "justify-between"} px-3 py-2 sm:px-4 sm:py-3 h-14 sm:h-16 transition-all duration-500`}>
        {/* Dynamic Avatar & Branding */}
        {(!isHome || !isAtTop) && (
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-4 group shrink-0 animate-in fade-in duration-500"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden border-2 border-transparent group-hover:border-carmine transition-colors shrink-0">
              <img
                src={avatarImg}
                alt={avatarAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="font-display text-sm sm:text-base uppercase tracking-tight leading-none text-cream flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="flex items-center gap-1"><i>FIPQ</i> <span className="text-carmine hidden md:inline">·</span></span> 
              <span className="text-cream/80 text-xs sm:text-sm">Metáfora Editores</span>
            </span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-6`}>
          {/* FESTIVAL DROPDOWN */}
          <div className="relative group py-2">
            <Link
              to="/festival"
              className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer text-cream hover:text-carmine transition-colors font-bold"
            >
              Festival{" "}
              <ChevronDown
                size={11}
                className="opacity-70 transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-cream border-2 border-ink py-2 w-48 shadow-[4px_4px_0_0_#121212] animate-in fade-in zoom-in-95 duration-200">
                <Link
                  to="/festival/fipq21"
                  className="px-4 py-2.5 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  <i>FIPQ</i> 21
                </Link>
                <Link
                  to="/festival/manifiesto"
                  className="px-4 py-2.5 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Manifiesto
                </Link>
                <Link
                  to="/festival/programa"
                  className="px-4 py-2.5 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Programa
                </Link>
                <Link
                  to="/festival/galeria"
                  className="px-4 py-2.5 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Galería
                </Link>
                <Link
                  to="/festival/archivo"
                  className="px-4 py-2.5 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Archivo Histórico
                </Link>
              </div>
            </div>
          </div>

          {/* EDITORIAL DROPDOWN */}
          <div className="relative group py-2">
            <Link
              to="/editorial"
              className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer text-cream hover:opacity-70 transition-opacity font-bold"
            >
              Editorial{" "}
              <ChevronDown
                size={11}
                className="opacity-70 transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-cream border-2 border-ink py-2 w-48 shadow-[4px_4px_0_0_#121212] animate-in fade-in zoom-in-95 duration-200">
                <Link
                  to="/editorial/catalogo"
                  className="px-4 py-2.5 hover:bg-ink hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Catálogo
                </Link>
                <Link
                  to="/editorial/contacto"
                  className="px-4 py-2.5 hover:bg-ink hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        {(!isHome || !isAtTop) && (
          <button
            type="button"
            className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center border-2 border-transparent bg-cream/10 text-cream transition-colors hover:border-ink hover:bg-cream hover:text-ink focus:outline-none animate-in fade-in duration-500"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        )}
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 px-2 md:hidden">
          <nav
            id="mobile-navigation"
            className="border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_0_#121212] text-ink max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="flex flex-col gap-2">
              {/* Festival Accordion */}
              <div className="flex flex-col bg-ink/5 border border-ink/20">
                <button
                  onClick={() => setMobileFestivalOpen(!mobileFestivalOpen)}
                  className="flex items-center justify-between w-full px-5 py-4 font-mono text-xs uppercase tracking-widest font-bold"
                >
                  <span>Festival</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileFestivalOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`flex flex-col overflow-hidden transition-all duration-300 ${
                    mobileFestivalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 px-4 pb-4">
                    <Link
                      to="/festival/fipq21"
                      className="px-4 py-3 rounded-xl hover:bg-carmine/10 text-ink hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → <i>FIPQ</i> 21
                    </Link>
                    <Link
                      to="/festival/manifiesto"
                      className="px-4 py-3 rounded-xl hover:bg-carmine/10 text-ink hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Manifiesto
                    </Link>
                    <Link
                      to="/festival/programa"
                      className="px-4 py-3 rounded-xl hover:bg-carmine/10 text-ink hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Programa
                    </Link>
                    <Link
                      to="/festival/galeria"
                      className="px-4 py-3 rounded-xl hover:bg-carmine/10 text-ink hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Galería
                    </Link>
                    <Link
                      to="/festival/archivo"
                      className="px-4 py-3 rounded-xl hover:bg-carmine/10 text-ink hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Archivo Histórico
                    </Link>
                  </div>
                </div>
              </div>

              {/* Editorial Accordion */}
              <div className="flex flex-col bg-ink/5 border border-ink/20 mt-2">
                <button
                  onClick={() => setMobileEditorialOpen(!mobileEditorialOpen)}
                  className="flex items-center justify-between w-full px-5 py-4 font-mono text-xs uppercase tracking-widest font-bold"
                >
                  <span>Editorial</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileEditorialOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`flex flex-col overflow-hidden transition-all duration-300 ${
                    mobileEditorialOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 px-4 pb-4">
                    <Link
                      to="/editorial/catalogo"
                      className="px-4 py-3 rounded-xl hover:bg-ink/10 text-ink hover:text-ink font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Catálogo
                    </Link>
                    <Link
                      to="/editorial/contacto"
                      className="px-4 py-3 rounded-xl hover:bg-ink/10 text-ink hover:text-ink font-mono text-[10px] tracking-wider uppercase transition-colors font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      → Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
