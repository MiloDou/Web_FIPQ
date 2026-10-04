import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { logoHomeMark } from "@/assets/contenido";

export function EncabezadoSitio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileFestivalOpen, setMobileFestivalOpen] = useState(false);
  const [mobileEditorialOpen, setMobileEditorialOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isFestival = location.pathname.includes("/festival");
  const isEditorial = location.pathname.includes("/editorial");
  const currentPath = location.pathname;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [isHome]);

  // Cerrar menú al hacer clic fuera del header
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile accordions on menu close
  useEffect(() => {
    if (!menuOpen) {
      setMobileFestivalOpen(false);
      setMobileEditorialOpen(false);
    }
  }, [menuOpen]);

  // Determine dynamic island avatar
  // Helper para saber si un link está activo
  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + "/");

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 text-cream transition-colors duration-500 ${
          isHome && !scrolled ? "bg-transparent" : "bg-ink/95 shadow-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-8 lg:px-12">
          {/* Dynamic Avatar & Branding */}
          {!isHome && (
            <Link
              to="/"
              aria-label="Ir al inicio"
              title="Inicio"
              className="group flex h-full items-center justify-center gap-2 shrink-0 animate-in fade-in duration-500 focus-visible:outline-cream focus-visible:outline-offset-4"
            >
              <span
                aria-hidden="true"
                className="h-5 w-5 shrink-0 bg-cream transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95 motion-reduce:transition-none motion-reduce:transform-none sm:h-6 sm:w-6"
                style={{
                  maskImage: `url("${logoHomeMark}")`,
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskImage: `url("${logoHomeMark}")`,
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                }}
              />
              <span className="font-display text-xl sm:text-2xl leading-none tracking-tight text-cream transition-colors duration-300 group-hover:text-carmine">
                FIPQ
              </span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {/* FESTIVAL DROPDOWN */}
            <div className="relative group py-2 px-1">
              <Link
                to="/festival"
                className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2 cursor-pointer transition-colors font-bold px-3 py-1.5 ${
                  isFestival
                    ? "text-carmine border-b-2 border-carmine"
                    : "text-cream hover:text-carmine"
                }`}
              >
                Festival{" "}
                <ChevronDown
                  size={11}
                  className="opacity-70 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>
              {/* Invisible bridge to keep dropdown open */}
              <div className="absolute top-full left-0 right-0 h-4" />
              <div className="absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 hidden group-hover:block group-focus-within:block z-50">
                <div className="flex flex-col bg-cream border-2 border-ink py-2 w-52 shadow-[4px_4px_0_0_#121212] animate-in fade-in zoom-in-95 duration-150">
                  <Link
                    to="/festival/fipq21"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/festival/fipq21")
                        ? "bg-carmine text-cream"
                        : "hover:bg-carmine hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/festival/fipq21") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    21FIPQ
                  </Link>
                  <Link
                    to="/festival/manifiesto"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/festival/manifiesto")
                        ? "bg-carmine text-cream"
                        : "hover:bg-carmine hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/festival/manifiesto") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Manifiesto
                  </Link>
                  <Link
                    to="/festival/programa"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/festival/programa")
                        ? "bg-carmine text-cream"
                        : "hover:bg-carmine hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/festival/programa") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Programa
                  </Link>
                  <Link
                    to="/festival/galeria"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/festival/galeria")
                        ? "bg-carmine text-cream"
                        : "hover:bg-carmine hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/festival/galeria") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Galería
                  </Link>
                  <Link
                    to="/festival/archivo"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/festival/archivo")
                        ? "bg-carmine text-cream"
                        : "hover:bg-carmine hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/festival/archivo") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Archivo Histórico
                  </Link>
                </div>
              </div>
            </div>

            {/* EDITORIAL DROPDOWN */}
            <div className="relative group py-2 px-1">
              <Link
                to="/editorial"
                className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2 cursor-pointer transition-colors font-bold px-3 py-1.5 ${
                  isEditorial
                    ? "text-mustard border-b-2 border-mustard"
                    : "text-cream hover:opacity-70"
                }`}
              >
                Editorial{" "}
                <ChevronDown
                  size={11}
                  className="opacity-70 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>
              {/* Invisible bridge */}
              <div className="absolute top-full left-0 right-0 h-4" />
              <div className="absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 hidden group-hover:block group-focus-within:block z-50">
                <div className="flex flex-col bg-cream border-2 border-ink py-2 w-52 shadow-[4px_4px_0_0_#121212] animate-in fade-in zoom-in-95 duration-150">
                  <Link
                    to="/editorial/catalogo"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/editorial/catalogo")
                        ? "bg-ink text-cream"
                        : "hover:bg-ink hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/editorial/catalogo") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Catálogo
                  </Link>
                  <Link
                    to="/editorial/contacto"
                    className={`px-4 py-2.5 text-left font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center gap-2 ${
                      isActive("/editorial/contacto")
                        ? "bg-ink text-cream"
                        : "hover:bg-ink hover:text-cream text-ink"
                    }`}
                  >
                    {isActive("/editorial/contacto") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0" />
                    )}
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger Menu */}
          {isHome || !isHome ? (
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center border-2 border-transparent bg-cream/10 text-cream transition-colors hover:border-ink hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2 animate-in fade-in duration-500"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          ) : null}
        </div>

        {/* Mobile Navigation Dropdown */}
        <div hidden={!menuOpen} className="absolute left-0 right-0 top-full lg:hidden">
          <nav
            id="mobile-navigation"
            className={`border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_0_#121212] text-ink max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 ${isHome ? "" : "mx-2 mt-2"}`}
          >
            <div className="flex flex-col gap-2">
              {/* Festival Accordion */}
              <div className="flex flex-col bg-ink/5 border border-ink/20">
                <button
                  type="button"
                  aria-expanded={mobileFestivalOpen}
                  aria-controls="mobile-festival-links"
                  onClick={() => setMobileFestivalOpen(!mobileFestivalOpen)}
                  className={`flex items-center justify-between w-full px-5 py-4 font-mono text-xs uppercase tracking-widest font-bold ${
                    isFestival ? "text-carmine" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isFestival && <span className="w-2 h-2 bg-carmine rounded-full" />}
                    Festival
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileFestivalOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="mobile-festival-links"
                  aria-hidden={!mobileFestivalOpen}
                  hidden={!mobileFestivalOpen}
                  className={`flex flex-col overflow-hidden transition-all duration-300 ${
                    mobileFestivalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 px-4 pb-4">
                    {[
                      { to: "/festival/fipq21", label: "21FIPQ" },
                      { to: "/festival/manifiesto", label: "Manifiesto" },
                      { to: "/festival/programa", label: "Programa" },
                      { to: "/festival/galeria", label: "Galería" },
                      { to: "/festival/archivo", label: "Archivo Histórico" },
                    ].map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`px-4 py-3 font-mono text-[10px] tracking-wider uppercase transition-colors font-bold flex items-center gap-2 ${
                          isActive(to)
                            ? "bg-carmine text-cream"
                            : "hover:bg-carmine/10 text-ink hover:text-carmine"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {isActive(to) && (
                          <span
                            className="w-1.5 h-1.5 bg-carmine rounded-full shrink-0"
                            aria-hidden="true"
                          />
                        )}{" "}
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Editorial Accordion */}
              <div className="flex flex-col bg-ink/5 border border-ink/20 mt-2">
                <button
                  type="button"
                  aria-expanded={mobileEditorialOpen}
                  aria-controls="mobile-editorial-links"
                  onClick={() => setMobileEditorialOpen(!mobileEditorialOpen)}
                  className={`flex items-center justify-between w-full px-5 py-4 font-mono text-xs uppercase tracking-widest font-bold ${
                    isEditorial ? "text-mustard" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isEditorial && <span className="w-2 h-2 bg-mustard rounded-full" />}
                    Editorial
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileEditorialOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="mobile-editorial-links"
                  aria-hidden={!mobileEditorialOpen}
                  hidden={!mobileEditorialOpen}
                  className={`flex flex-col overflow-hidden transition-all duration-300 ${
                    mobileEditorialOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 px-4 pb-4">
                    {[
                      { to: "/editorial/catalogo", label: "Catálogo" },
                      { to: "/editorial/contacto", label: "Contacto" },
                    ].map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`px-4 py-3 font-mono text-[10px] tracking-wider uppercase transition-colors font-bold flex items-center gap-2 ${
                          isActive(to)
                            ? "bg-ink text-cream"
                            : "hover:bg-ink/10 text-ink hover:text-ink"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {isActive(to) && (
                          <span
                            className="w-1.5 h-1.5 bg-ink rounded-full shrink-0"
                            aria-hidden="true"
                          />
                        )}{" "}
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
