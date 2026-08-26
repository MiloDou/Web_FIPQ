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
      <section className="relative min-h-[calc(100vh-65px)] w-full bg-carmine flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none z-20">
          <img
            src={imagenesSitio.wallCollage}
            alt=""
            className="h-full w-full object-cover grayscale animate-slow-pan"
          />
        </div>
        {/* Decorative typography — behind everything */}
        <span className="pointer-events-none absolute -left-10 bottom-16 hidden lg:block font-display text-cream/[0.06] text-[14rem] leading-none select-none rotate-[-90deg] origin-bottom-left z-0">
          VOZ
        </span>
        <span className="pointer-events-none absolute -right-10 -top-6 hidden lg:block font-display text-cream/[0.06] text-[18rem] leading-none select-none z-0">
          FUEGO
        </span>

        {/* Hero Center Branding - Perfectly centered */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl my-auto">
          <img
            src={logoImage}
            alt="Logo Festival Internacional de Poesía de Quetzaltenango"
            width={420}
            height={420}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mix-blend-screen"
          />
          <h1 className="mt-6 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream uppercase tracking-[0.06em] leading-[1.15] max-w-4xl font-bold">
            Festival Internacional
            <br />
            de Poesía <span className="italic text-mustard">Quetzaltenango</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/90 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] leading-relaxed font-bold">
            Poesía en acción · comunidad, territorio y memoria desde Xelajuj No’j
          </p>
        </div>

        {/* Bottom scroll / directions indicator - positioned absolutely at the bottom */}
        <a
          href="#direcciones"
          className="absolute bottom-6 inset-x-0 z-10 flex flex-col items-center gap-2 group cursor-pointer hover:opacity-100 opacity-90 transition-opacity"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cream font-bold group-hover:text-mustard transition-colors">
            Elige tu camino ↓
          </span>
          <div className="w-px h-6 sm:h-8 bg-cream/60 animate-pulse group-hover:bg-mustard transition-colors" />
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
              [01] ACCIÓN POÉTICA
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
              <span>→</span> <span>Programa histórico</span>
            </li>
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Manifiesto político</span>
            </li>
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Archivo histórico</span>
            </li>
            <li className="hover:text-mustard transition-colors flex items-center gap-1">
              <span>→</span> <span>Información del festival</span>
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
              [02] PALABRA IMPRESA
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
          <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-8 md:right-8 w-24 h-24 sm:w-28 sm:h-28 border-[3px] border-carmine rounded-full flex items-center justify-center rotate-12 opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-500 scale-100 md:scale-150 md:group-hover:scale-100 bg-cream/40 backdrop-blur-xs">
            <span className="text-carmine font-display text-[10px] sm:text-[11px] font-bold text-center leading-tight uppercase">
              Editorial
              <br />
              Certificada
            </span>
          </div>
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
              <div className="p-6 bg-carmine text-cream border-2 border-ink shadow-[4px_4px_0_0_rgba(227,160,29,0.9)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none duration-300">
                <h4 className="font-display text-2xl uppercase mb-4 text-mustard font-bold">
                  El Festival
                </h4>
                <p className="font-body text-sm leading-relaxed text-cream/95 font-medium">
                  Un festival nacido de jóvenes poetas que construye comunidad mediante la palabra,
                  el diálogo intercultural y la acción cultural.
                </p>
                <Link
                  to="/festival"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-cream font-bold hover:text-mustard transition-colors"
                >
                  → Entrar al festival
                </Link>
              </div>
              <div className="p-6 bg-mustard text-ink border-2 border-ink shadow-[4px_4px_0_0_rgba(177,42,59,0.9)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none duration-300">
                <h4 className="font-display text-2xl uppercase mb-4 text-ink font-bold">
                  La Editorial
                </h4>
                <p className="font-body text-sm leading-relaxed text-ink/90 font-medium">
                  Metáfora continúa la experiencia del festival en publicaciones y memorias: de la
                  voz compartida al libro.
                </p>
                <Link
                  to="/editorial"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-ink font-bold hover:text-carmine transition-colors"
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
