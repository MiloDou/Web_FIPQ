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
      <div className="group relative overflow-hidden bg-carmine p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] border-b-[6px] md:border-b-0 md:border-r-[6px] border-ink min-h-[50dvh] md:min-h-[80vh]">
        <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
          <img
            src={imagenesSitio.wallCollage}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full md:justify-start">
          <span className="font-body text-cream/70 text-xs font-medium block mb-2 tracking-wide uppercase">
            Festival Internacional de Poesía de Quetzaltenango
          </span>
          <Link to="/festival/manifiesto" className="block w-fit">
            <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-cream leading-none uppercase group-hover:translate-x-1 md:group-hover:translate-x-4 transition-transform duration-500">
              FIPQ
            </h2>
          </Link>
          <p className="mt-3 sm:mt-4 max-w-md text-cream/80 text-xs sm:text-sm md:text-base font-body font-light leading-relaxed">
            Lecturas públicas, talleres y encuentros que llevan la poesía a Xelajuj No'j y al
            occidente de Guatemala.
          </p>
        </div>
          <div className="relative z-10 mt-6 sm:mt-8 md:mt-0 flex flex-col gap-4">
            <Button asChild size="lg" className="w-full sm:w-fit bg-[#121212] text-cream hover:bg-ink active:bg-ink border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all">
              <Link to="/festival/manifiesto" hash="contenido">
                Leer el Manifiesto
              </Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-fit bg-[#121212] text-cream hover:bg-ink active:bg-ink border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all">
              <Link to="/festival/programa" hash="contenido">
                Programa (próximamente)
              </Link>
            </Button>
          </div>
      </div>

      {/* Editorial */}
      <div className="group relative overflow-hidden bg-cream p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between transition-all duration-700 md:hover:flex-[1.5] min-h-[50dvh] md:min-h-[80vh]">
        <div className="absolute inset-0 opacity-15 group-hover:opacity-35 transition-opacity duration-500">
          <img
            src={imagenesSitio.risographBook}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover sepia"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full md:justify-start">
          <span className="font-body text-ink/60 text-xs font-medium block mb-2 tracking-wide uppercase">
            Editorial
          </span>
          <Link to="/editorial/catalogo" className="block w-fit">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-ink leading-none uppercase group-hover:-translate-x-1 md:group-hover:-translate-x-4 transition-transform duration-500">
              Metáfora Editores
            </h2>
          </Link>
          <p className="mt-3 sm:mt-4 max-w-md text-ink/75 text-xs sm:text-sm md:text-base font-body font-light leading-relaxed">
            El sello independiente que conserva, publica y organiza la memoria editorial del
            festival.
          </p>
        </div>
          <div className="relative z-10 mt-6 sm:mt-8 md:mt-0 flex flex-col gap-4">
            <Button asChild size="lg" className="w-full sm:w-fit bg-carmine text-cream hover:bg-carmine/90 active:bg-carmine/80 border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all">
              <Link to="/editorial/catalogo" hash="contenido">
                Catálogo Editorial
              </Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-fit bg-carmine text-cream hover:bg-carmine/90 active:bg-carmine/80 border-transparent uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a] active:shadow-none active:translate-y-0.5 transition-all">
              <Link to="/editorial/contacto" hash="contenido">
                Contacto
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
