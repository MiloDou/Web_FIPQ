import { Link } from "@tanstack/react-router";
import { logoImage, imagenesSitio } from "@/assets/contenido";
import { EncabezadoSitio } from "@/components/layout/SiteHeader";
import { PieSitio } from "@/components/layout/SiteFooter";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="bg-cream text-ink font-body">
      <EncabezadoSitio />

      <section className="relative h-screen w-full bg-[#0a0a0a] flex flex-col justify-between items-center py-6 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        {/* Cinematic Backdrop Image - Bookstore/Zine texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src={imagenesSitio.stageNight}
            alt=""
            className="h-full w-full object-cover grayscale opacity-30 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/50" />
        </div>

        {/* Top Spacer to balance the vertical flex layout */}
        <div className="h-6" />

        {/* Hero Center Content Group - Perfectly grouped and vertically centered */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl my-auto py-4 px-4">
          {/* Logo - Centered directly above the title */}
          <div className="relative mb-8 p-0.5 bg-cream rounded-full border-2 border-cream shadow-[0_8px_30px_rgba(0,0,0,0.5)] animate-fade-in-up">
            <div className="absolute inset-0 rounded-full bg-carmine/10 blur-lg opacity-40 scale-105 pointer-events-none" />
            <img
              src={logoImage}
              alt="Logo FIPQ"
              width={160}
              height={160}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="font-display font-normal uppercase text-cream tracking-tighter leading-[0.9] select-none text-center text-[9vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[6.5vw] xl:text-[8vw] max-w-[95vw] w-full">
            FESTIVAL INTERNACIONAL
            <br />
            DE POESÍA DE
            <br />
            <span className="text-carmine">QUETZALTENANGO</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-cream/80 font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.10em] sm:tracking-[0.4em] leading-loose font-bold text-center px-4">
            Comunidad, territorio y memoria desde Xelajuj No’j
          </p>
        </div>

        {/* Bottom scroll indicator — maintained spacing and distance */}
        <a
          href="#direcciones"
          className="relative z-10 flex flex-col items-center justify-end h-24 w-12 group cursor-pointer hover:opacity-100 opacity-80 transition-opacity pb-4"
        >
          <div className="w-px h-12 bg-cream/30 animate-pulse group-hover:bg-carmine group-hover:h-16 transition-all duration-500" />
        </a>
      </section>

      {/* BIFURCATION / DIRECTIONS */}
      <section
        id="direcciones"
        className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-y-[6px] border-ink"
      >
        {/* Festival */}
        <div className="group relative overflow-hidden bg-carmine p-6 sm:p-10 md:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] border-b-[6px] md:border-b-0 md:border-r-[6px] border-ink min-h-[70vh] md:min-h-[80vh]">
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
            <img
              src={imagenesSitio.wallCollage}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover grayscale mix-blend-overlay"
            />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-cream/80 text-xs sm:text-sm font-bold block mb-2 tracking-widest uppercase">
              Festival Internacional de Poesía de Quetzaltenango
            </span>
            <Link to="/festival/manifiesto" className="block w-fit">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-cream leading-none uppercase whitespace-nowrap group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                FIPQ
              </h2>
            </Link>
            <p className="mt-4 max-w-md text-cream/90 text-base md:text-lg font-medium leading-relaxed">
              Lecturas públicas, talleres y encuentros que llevan la poesía a Xelajuj No’j y al
              occidente de Guatemala.
            </p>
          </div>
          <ul className="relative z-10 mt-6 md:mt-0 space-y-3 text-cream font-display text-lg sm:text-2xl font-normal tracking-[0.08em] uppercase opacity-95 group-hover:opacity-100 transition-opacity duration-500">
            <li className="hover:text-mustard transition-colors">
              <Link to="/festival/manifiesto" hash="contenido" className="block w-fit">
                Manifiesto
              </Link>
            </li>
            <li className="hover:text-mustard transition-colors">
              <Link to="/festival/programa" hash="contenido" className="block w-fit">
                Programa
              </Link>
            </li>
          </ul>
        </div>

        {/* Editorial */}
        <div className="group relative overflow-hidden bg-cream p-6 sm:p-10 md:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] min-h-[70vh] md:min-h-[80vh]">
          <div className="absolute inset-0 opacity-15 group-hover:opacity-35 transition-opacity duration-500">
            <img
              src={imagenesSitio.risographBook}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover sepia"
            />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-ink/80 text-xs sm:text-sm font-bold block mb-2 tracking-widest uppercase">
              EDITORIAL
            </span>
            <Link to="/editorial/catalogo" className="block w-fit">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-ink leading-none uppercase whitespace-nowrap group-hover:-translate-x-2 md:group-hover:-translate-x-4 transition-transform duration-500">
                Metáfora Editores
              </h2>
            </Link>
            <p className="mt-4 max-w-md text-ink/85 text-base md:text-lg font-medium leading-relaxed">
              El sello independiente que conserva, publica y organiza la memoria editorial del
              festival.
            </p>
          </div>
          <ul className="relative z-10 mt-6 md:mt-0 space-y-3 text-ink font-display text-lg sm:text-2xl font-normal tracking-[0.08em] uppercase opacity-95 group-hover:opacity-100 transition-opacity duration-500">
            <li className="hover:text-carmine transition-colors">
              <Link to="/editorial/catalogo" hash="contenido" className="block w-fit">
                Catálogo editorial
              </Link>
            </li>
            <li className="hover:text-carmine transition-colors">
              <Link to="/editorial/contacto" hash="contenido" className="block w-fit">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* MANIFIESTO */}
      <AnimatedSection>
        <section className="py-32 px-6 md:px-12 bg-ink text-cream relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-12 bg-cream"
            style={{
              clipPath:
                "polygon(0 0, 10% 80%, 20% 30%, 35% 90%, 50% 40%, 65% 85%, 80% 20%, 90% 70%, 100% 0)",
            }}
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h3 className="text-5xl md:text-6xl font-display uppercase leading-none text-cream mb-8">
                Nuestra Voz
              </h3>
              <div className="w-full aspect-square border border-cream/20 relative">
                <img
                  src={imagenesSitio.poetPortrait}
                  alt="Retrato de poeta en Xelajuj No’j"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="text-3xl md:text-5xl font-display uppercase text-balance leading-tight">
                Más de 20 años difundiendo la poesía en{" "}
                <span className="text-carmine">Mesoamérica</span>. Somos un proyecto independiente y
                sin fines de lucro, dedicado a construir comunidad a través de la palabra.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card Festival */}
                <div className="p-8 border border-carmine/30 bg-[#121212] hover:bg-carmine/[0.06] hover:border-carmine/50 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-display text-2xl uppercase mb-4 text-carmine tracking-wider">
                      El Festival
                    </h4>
                    <p className="text-sm leading-relaxed text-cream/80">
                      Un festival nacido de jóvenes poetas que construye comunidad mediante la
                      palabra, el diálogo intercultural y la acción cultural.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-carmine text-cream hover:bg-carmine/90 uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a]">
                      <Link to="/festival">
                        Entrar al festival
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Card Editorial */}
                <div className="p-8 border border-cream/15 bg-[#121212] hover:bg-cream/[0.04] hover:border-cream/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-display text-2xl uppercase mb-4 text-cream tracking-wider">
                      La Editorial
                    </h4>
                    <p className="text-sm leading-relaxed text-cream/80">
                      Metáfora Editores continúa la experiencia del festival en publicaciones y memorias: de
                      la voz compartida al libro.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-cream text-ink hover:bg-cream/90 uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a]">
                      <Link to="/editorial">
                        Ver el catálogo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <PieSitio />
    </div>
  );
}
