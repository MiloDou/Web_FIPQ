import { Link } from "@tanstack/react-router";
import { imagenesSitio } from "@/assets/contenido";
import { Button } from "@/components/ui/button";

export function BifurcationSection() {
  return (
    <section
      id="direcciones"
      className="grid grid-cols-1 md:grid-cols-2 min-h-[100dvh] md:min-h-screen border-y-[6px] border-ink"
    >
      {/* Festival */}
      <div className="home-direction-panel group relative overflow-hidden bg-carmine p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between transition-colors duration-500 border-b-[6px] md:border-b-0 md:border-r-[6px] border-ink min-h-[50dvh] md:min-h-[80vh]">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={imagenesSitio.wallCollage}
            alt=""
            loading="lazy"
            className="home-direction-art h-full w-full object-cover"
          />
          <div className="festival-panel-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full md:justify-start">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-cream/90 sm:text-sm">
            Festival Internacional de Poesía de Quetzaltenango
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-cream leading-none uppercase">
            FIPQ
          </h2>
          <p className="mt-3 max-w-lg text-sm font-normal leading-relaxed text-cream/95 sm:mt-4 sm:text-base lg:text-lg">
            Lecturas públicas, talleres y encuentros que llevan la poesía a Xelajuj No'j y al
            occidente de Guatemala.
          </p>
        </div>
        <div className="relative z-10 mt-6 sm:mt-8 md:mt-0 flex flex-col gap-4">
          <Button
            asChild
            size="lg"
            className="home-cta w-full sm:w-fit bg-[#121212] text-cream hover:bg-ink active:bg-ink border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all"
          >
            <Link to="/festival/manifiesto" hash="contenido">
              Leer el Manifiesto
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="home-cta w-full sm:w-fit bg-[#121212] text-cream hover:bg-ink active:bg-ink border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all"
          >
            <Link to="/festival/programa" hash="contenido">
              Programa
            </Link>
          </Button>
        </div>
      </div>

      {/* Editorial */}
      <div className="home-direction-panel group relative overflow-hidden bg-cream p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between transition-colors duration-500 min-h-[50dvh] md:min-h-[80vh]">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={imagenesSitio.editorialPanel}
            alt=""
            loading="lazy"
            className="home-direction-art h-full w-full object-cover object-[68%_center]"
          />
          <div className="editorial-panel-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full md:justify-start">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink/75 sm:text-sm">
            Editorial
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-ink leading-none uppercase">
            Metáfora Editores
          </h2>
          <p className="mt-3 max-w-lg text-sm font-normal leading-relaxed text-ink/90 sm:mt-4 sm:text-base lg:text-lg">
            El sello independiente que conserva, publica y organiza la memoria editorial del
            festival.
          </p>
        </div>
        <div className="relative z-10 mt-6 sm:mt-8 md:mt-0 flex flex-col gap-4">
          <Button
            asChild
            size="lg"
            className="home-cta w-full sm:w-fit bg-carmine text-cream hover:bg-carmine/90 active:bg-carmine/80 border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all"
          >
            <Link to="/editorial/catalogo" hash="contenido">
              Catálogo Editorial
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="home-cta w-full sm:w-fit bg-carmine text-cream hover:bg-carmine/90 active:bg-carmine/80 border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all"
          >
            <Link to="/editorial/contacto" hash="contenido">
              Contacto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
