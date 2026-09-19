import { Link } from "@tanstack/react-router";
import { imagenesSitio } from "@/assets/contenido";

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
          <span className="font-body text-cream/70 text-[10px] sm:text-xs md:text-sm font-medium block mb-2 tracking-wide uppercase">
            Festival Internacional de Poesía de Quetzaltenango
          </span>
          <Link to="/festival/manifiesto" className="block w-fit">
            {/* Responsividad en el título: más pequeño en móvil para evitar desbordes */}
            <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-cream leading-none uppercase whitespace-nowrap group-hover:translate-x-1 md:group-hover:translate-x-4 transition-transform duration-500">
              FIPQ
            </h2>
          </Link>
          <p className="mt-3 sm:mt-4 max-w-md text-cream/80 text-xs sm:text-sm md:text-base font-body font-light leading-relaxed">
            Lecturas públicas, talleres y encuentros que llevan la poesía a Xelajuj No'j y al
            occidente de Guatemala.
          </p>
        </div>
        <ul className="relative z-10 mt-6 sm:mt-8 md:mt-0 space-y-4 md:space-y-6">
          <li>
            <Link to="/festival/manifiesto" hash="contenido" className="group flex items-center gap-4 w-fit text-cream font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider overflow-hidden">
              <span className="relative pb-1 sm:pb-2">
                Leer el Manifiesto
                <span className="absolute left-0 bottom-0 w-0 h-1.5 sm:h-2 bg-mustard transition-all duration-300 ease-out group-active:w-full"></span>
              </span>
              <span className="opacity-0 -translate-x-6 text-mustard group-active:opacity-100 group-active:translate-x-0 transition-all duration-300 ease-out">→</span>
            </Link>
          </li>
          <li>
            <Link to="/festival/programa" hash="contenido" className="group flex items-center gap-4 w-fit text-cream font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider overflow-hidden">
              <span className="relative pb-1 sm:pb-2">
                Programa Oficial
                <span className="absolute left-0 bottom-0 w-0 h-1.5 sm:h-2 bg-mustard transition-all duration-300 ease-out group-active:w-full"></span>
              </span>
              <span className="opacity-0 -translate-x-6 text-mustard group-active:opacity-100 group-active:translate-x-0 transition-all duration-300 ease-out">→</span>
            </Link>
          </li>
        </ul>
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
          <span className="font-body text-ink/60 text-[10px] sm:text-xs md:text-sm font-medium block mb-2 tracking-wide uppercase">
            Editorial
          </span>
          <Link to="/editorial/catalogo" className="block w-fit">
            {/* Responsividad ajustada: text-4xl en móviles para que quepa "Metáfora Editores" */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-ink leading-none uppercase whitespace-nowrap group-hover:-translate-x-1 md:group-hover:-translate-x-4 transition-transform duration-500">
              Metáfora Editores
            </h2>
          </Link>
          <p className="mt-3 sm:mt-4 max-w-md text-ink/75 text-xs sm:text-sm md:text-base font-body font-light leading-relaxed">
            El sello independiente que conserva, publica y organiza la memoria editorial del
            festival.
          </p>
        </div>
        <ul className="relative z-10 mt-6 sm:mt-8 md:mt-0 space-y-4 md:space-y-6">
          <li>
            <Link to="/editorial/catalogo" hash="contenido" className="group flex items-center gap-4 w-fit text-ink font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider overflow-hidden">
              <span className="relative pb-1 sm:pb-2">
                Catálogo Editorial
                <span className="absolute left-0 bottom-0 w-0 h-1.5 sm:h-2 bg-carmine transition-all duration-300 ease-out group-active:w-full"></span>
              </span>
              <span className="opacity-0 -translate-x-6 text-carmine group-active:opacity-100 group-active:translate-x-0 transition-all duration-300 ease-out">→</span>
            </Link>
          </li>
          <li>
            <Link to="/editorial/contacto" hash="contenido" className="group flex items-center gap-4 w-fit text-ink font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider overflow-hidden">
              <span className="relative pb-1 sm:pb-2">
                Contacto
                <span className="absolute left-0 bottom-0 w-0 h-1.5 sm:h-2 bg-carmine transition-all duration-300 ease-out group-active:w-full"></span>
              </span>
              <span className="opacity-0 -translate-x-6 text-carmine group-active:opacity-100 group-active:translate-x-0 transition-all duration-300 ease-out">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
