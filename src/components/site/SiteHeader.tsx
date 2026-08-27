import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { logoImage } from "@/assets/contenido";

export function EncabezadoSitio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileFestivalOpen, setMobileFestivalOpen] = useState(false);
  const [mobileEditorialOpen, setMobileEditorialOpen] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isArchive = location.pathname.includes("/archivo");
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(isHome);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const threshold = 80;

      if (isHome) {
        setIsAtTop(currentScrollY < threshold);
        setVisible(true);
      } else {
        setIsAtTop(false);
        if (isArchive) {
          setVisible(true);
        } else {
          if (currentScrollY < lastScrollY) {
            setVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setVisible(false);
          }
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

    if (isHome) {
      setIsAtTop(window.scrollY < 80);
      setVisible(true);
    } else {
      setIsAtTop(false);
      setVisible(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, isArchive]);

  // Close mobile accordions on menu close
  useEffect(() => {
    if (!menuOpen) {
      setMobileFestivalOpen(false);
      setMobileEditorialOpen(false);
    }
  }, [menuOpen]);

  // Styling transitions based on landing scroll position
  const headerBackground = isHome && isAtTop
    ? "bg-transparent border-transparent text-cream"
    : "bg-cream/95 backdrop-blur-md border-b-2 border-ink text-ink";

  const linkClass = (activeColor: string) => `transition-colors duration-300 font-bold ${
    isHome && isAtTop
      ? "text-cream hover:text-mustard"
      : `text-ink hover:text-${activeColor}`
  }`;

  return (
    <header
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBackground} ${
        visible || isArchive
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link 
          to="/" 
          className={`flex items-center gap-3 group transition-all duration-300 ${
            isHome && isAtTop 
              ? "opacity-0 pointer-events-none -translate-x-4" 
              : "opacity-100 pointer-events-auto translate-x-0"
          }`} 
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoImage}
            alt="Logo FIPQ"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl uppercase tracking-tight leading-none text-ink">
            FIPQ <span className="text-carmine">·</span> Metáfora
          </span>
        </Link>

        {/* Navigation Options - Unified drop-downs, no double header */}
        <nav className="hidden md:flex items-center gap-6">
          
          {/* FESTIVAL DROPDOWN */}
          <div className="relative group py-2">
            <Link 
              to="/festival"
              className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] focus:outline-none cursor-pointer ${linkClass("carmine")}`}
            >
              Festival <ChevronDown size={11} className="opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-cream border-2 border-ink py-2 w-48 shadow-[6px_6px_0_0_rgba(26,26,26,1)] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
              <Link to="/festival/manifiesto" className="px-4 py-2 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Manifiesto
              </Link>
              <Link to="/festival/programa" className="px-4 py-2 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Programa
              </Link>
              <Link to="/festival/galeria" className="px-4 py-2 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Galería
              </Link>
              <Link to="/festival/archivo" className="px-4 py-2 hover:bg-carmine hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Archivo Histórico
              </Link>
            </div>
          </div>

          {/* EDITORIAL DROPDOWN */}
          <div className="relative group py-2">
            <Link 
              to="/editorial"
              className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] focus:outline-none cursor-pointer ${linkClass("ink")}`}
            >
              Editorial <ChevronDown size={11} className="opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-cream border-2 border-ink py-2 w-48 shadow-[6px_6px_0_0_rgba(26,26,26,1)] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
              <Link to="/editorial/catalogo" className="px-4 py-2 hover:bg-ink hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Catálogo
              </Link>
              <Link to="/editorial/contacto" className="px-4 py-2 hover:bg-ink hover:text-cream text-ink text-left font-mono text-[10px] tracking-wider uppercase transition-colors">
                Contacto
              </Link>
            </div>
          </div>

        </nav>

        {/* Hamburger Menu - Styled appropriately for transparent or solid state */}
        <button
          type="button"
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center border-2 transition-all duration-300 ${
            isHome && isAtTop
              ? "border-cream/20 text-cream hover:bg-cream/10"
              : "border-ink text-ink hover:bg-ink hover:text-cream"
          }`}
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
          className="md:hidden border-t-2 border-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] bg-cream text-ink"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            
            {/* Festival Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileFestivalOpen(!mobileFestivalOpen)}
                className="flex items-center justify-between w-full px-3 py-3 hover:bg-carmine/10 text-left font-mono text-xs uppercase tracking-[0.18em] transition-colors border-b border-ink/10"
              >
                <span>Festival</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${mobileFestivalOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileFestivalOpen && (
                <div className="bg-cream border-l-2 border-carmine pl-4 py-1 flex flex-col gap-1 animate-in fade-in duration-200">
                  <Link to="/festival/manifiesto" className="px-3 py-2 text-ink/80 hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Manifiesto
                  </Link>
                  <Link to="/festival/programa" className="px-3 py-2 text-ink/80 hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Programa
                  </Link>
                  <Link to="/festival/galeria" className="px-3 py-2 text-ink/80 hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Galería
                  </Link>
                  <Link to="/festival/archivo" className="px-3 py-2 text-ink/80 hover:text-carmine font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Archivo Histórico
                  </Link>
                </div>
              )}
            </div>

            {/* Editorial Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileEditorialOpen(!mobileEditorialOpen)}
                className="flex items-center justify-between w-full px-3 py-3 hover:bg-ink/10 text-left font-mono text-xs uppercase tracking-[0.18em] transition-colors border-b border-ink/10"
              >
                <span>Editorial</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${mobileEditorialOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileEditorialOpen && (
                <div className="bg-cream border-l-2 border-ink pl-4 py-1 flex flex-col gap-1 animate-in fade-in duration-200">
                  <Link to="/editorial/catalogo" className="px-3 py-2 text-ink/80 hover:text-ink font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Catálogo
                  </Link>
                  <Link to="/editorial/contacto" className="px-3 py-2 text-ink/80 hover:text-ink font-mono text-[10px] tracking-wider uppercase transition-colors" onClick={() => setMenuOpen(false)}>
                    → Contacto
                  </Link>
                </div>
              )}
            </div>

          </div>
        </nav>
      )}
    </header>
  );
}
