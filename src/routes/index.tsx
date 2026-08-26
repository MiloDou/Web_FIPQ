import { createFileRoute, Link } from "@tanstack/react-router";
import { logoImage, imagenesSitio } from "@/assets/contenido";
import { EncabezadoSitio } from "@/components/site/SiteHeader";
import { PieSitio } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIPQ — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Lecturas públicas, talleres, comunidad y memoria del Festival Internacional de Poesía de Quetzaltenango.",
      },
      { property: "og:title", content: "FIPQ + Editorial Metáfora" },
      {
        property: "og:description",
        content:
          "Poesía en acción: una plataforma cultural construida desde Xelajuj No’j y el occidente de Guatemala.",
      },
    ],
  }),
  component: InicioPrincipal,
});

function InicioPrincipal() {
  return (
    <div className="bg-cream text-ink font-body">
      <EncabezadoSitio />

      {/* HERO */}
      <section className="relative h-screen w-full bg-[#0a0a0a] flex flex-col justify-between items-center py-8 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        {/* Cinematic Backdrop Image - Bookstore/Zine texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src={imagenesSitio.booksStack}
            alt=""
            className="h-full w-full object-cover grayscale opacity-35 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/40" />
        </div>

        {/* Top Spacer & Logo - Restored to original colors with a zine border stamp */}
        <div className="relative z-10 flex flex-col items-center mt-4">
          <img
            src={logoImage}
            alt="Logo FIPQ"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full border-2 border-carmine p-1 bg-cream shadow-[3px_3px_0_0_#1a1a1a] animate-fade-in-up"
          />
        </div>

        {/* Hero Center Branding - Perfectly balanced, centered and fits strictly above the fold */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl my-auto py-6 px-4 flex-1">
          <h1 className="font-display font-extrabold uppercase text-cream tracking-[0.05em] leading-[1.12] select-none text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full">
            FESTIVAL INTERNACIONAL
            <br />
            DE POESÍA DE
            <br />
            <span className="text-carmine">QUETZALTENANGO</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/70 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">
            Comunidad, territorio y memoria desde Xelajuj No’j
          </p>
        </div>

        {/* Bottom scroll indicator */}
        <a
          href="#direcciones"
          className="relative z-10 flex flex-col items-center gap-1 group cursor-pointer hover:opacity-100 opacity-80 transition-opacity pb-2"
        >
          <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.3em] text-cream/70 font-bold group-hover:text-carmine transition-colors">
            Elige tu camino ↓
          </span>
          <div className="w-px h-6 bg-cream/30 animate-pulse group-hover:bg-carmine transition-colors" />
        </a>
      </section>

      {/* BIFURCATION / DIRECTIONS */}
      <section
        id="direcciones"
        className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-y-[6px] border-ink"
      >
        {/* Festival */}
        <Link
          to="/festival"
          className="group relative overflow-hidden bg-carmine p-6 sm:p-10 md:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] border-b-[6px] md:border-b-0 md:border-r-[6px] border-ink min-h-[70vh] md:min-h-[80vh]"
        >
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
            <img
              src={imagenesSitio.wallCollage}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover grayscale mix-blend-overlay"
            />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-cream/80 text-xs sm:text-sm font-bold block mb-2 tracking-widest">
              ACCIÓN POÉTICA
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-cream leading-none uppercase italic whitespace-nowrap group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
              Festival
            </h2>
            <p className="mt-4 max-w-md text-cream/90 text-base md:text-lg font-medium leading-relaxed">
              Lecturas públicas, talleres y encuentros que llevan la poesía a Xelajuj No’j y al
              occidente de Guatemala.
            </p>
          </div>
          <ul className="relative z-10 mt-6 md:mt-0 space-y-2 text-cream font-mono text-xs sm:text-sm font-semibold opacity-100 md:opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Manifiesto</span>
            </li>
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Programa</span>
            </li>
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Archivo histórico</span>
            </li>
          </ul>
        </Link>

        {/* Editorial */}
        <Link
          to="/editorial"
          className="group relative overflow-hidden bg-cream p-6 sm:p-10 md:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] min-h-[70vh] md:min-h-[80vh]"
        >
          <div className="absolute inset-0 opacity-15 group-hover:opacity-35 transition-opacity duration-500">
            <img
              src={imagenesSitio.booksStack}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover sepia"
            />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-ink/80 text-xs sm:text-sm font-bold block mb-2 tracking-widest">
              PALABRA IMPRESA
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-ink leading-none uppercase whitespace-nowrap group-hover:-translate-x-2 md:group-hover:-translate-x-4 transition-transform duration-500">
              Metáfora
            </h2>
            <p className="mt-4 max-w-md text-ink/85 text-base md:text-lg font-medium leading-relaxed">
              El sello independiente que conserva, publica y organiza la memoria editorial del
              festival.
            </p>
          </div>
          <ul className="relative z-10 mt-6 md:mt-0 space-y-2 text-ink font-mono text-xs sm:text-sm font-semibold opacity-100 md:opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <li className="hover:text-carmine transition-colors flex items-center gap-1">
              <span>→</span> <span>Catálogo editorial</span>
            </li>
            <li className="hover:text-carmine transition-colors flex items-center gap-1">
              <span>→</span> <span>Archivo editorial</span>
            </li>
            <li className="hover:text-carmine transition-colors flex items-center gap-1">
              <span>→</span> <span>Contacto</span>
            </li>
          </ul>
        </Link>
      </section>

      {/* MANIFIESTO */}
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
            <h3 className="text-5xl md:text-6xl font-display uppercase leading-none text-mustard mb-6 italic">
              Nuestra Voz
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-8">
              Poesía en acción · comunidad y memoria
            </p>
            <div className="w-full aspect-square border border-cream/20 relative">
              <img
                src={imagenesSitio.poetPortrait}
                alt="Retrato de poeta en Xelajuj No’j"
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute -bottom-4 -right-4 bg-carmine text-cream p-4 font-display text-xl sm:text-2xl uppercase leading-none">
                Xelajuj No’j
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl font-display uppercase text-balance leading-tight">
              «La poesía no es un lujo, es una <span className="text-carmine">necesidad vital</span>{" "}
              de existencia. Ella forma la calidad de la luz bajo la cual predicamos nuestras
              esperanzas.»
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-cream/15 bg-white/5 backdrop-blur-sm">
                <h4 className="font-display text-xl uppercase mb-4 text-mustard">El Festival</h4>
                <p className="text-sm leading-relaxed text-cream/85">
                  Un festival nacido de jóvenes poetas que construye comunidad mediante la palabra,
                  el diálogo intercultural y la acción cultural.
                </p>
                <Link
                  to="/festival"
                  className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-cream hover:text-carmine transition-colors"
                >
                  → Entrar al festival
                </Link>
              </div>
              <div className="p-6 border border-cream/15 bg-white/5 backdrop-blur-sm">
                <h4 className="font-display text-xl uppercase mb-4 text-mustard">La Editorial</h4>
                <p className="text-sm leading-relaxed text-cream/85">
                  Metáfora continúa la experiencia del festival en publicaciones y memorias: de la
                  voz compartida al libro.
                </p>
                <Link
                  to="/editorial"
                  className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-cream hover:text-carmine transition-colors"
                >
                  → Ver el catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PieSitio />
    </div>
  );
}
