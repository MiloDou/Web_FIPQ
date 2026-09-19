import { Link } from "@tanstack/react-router";
import { imagenesSitio } from "@/assets/contenido";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export function ManifestoPreview() {
  return (
    <AnimatedSection>
      <section className="py-20 md:py-32 px-5 sm:px-6 md:px-12 bg-ink text-cream relative overflow-hidden">
        {/* Adorno superior (clip-path brutalista) */}
        <div
          className="absolute top-0 left-0 w-full h-8 md:h-12 bg-cream"
          style={{
            clipPath:
              "polygon(0 0, 10% 80%, 20% 30%, 35% 90%, 50% 40%, 65% 85%, 80% 20%, 90% 70%, 100% 0)",
          }}
        />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-8 md:mt-10">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            {/* Responsividad en título: más compacto en móvil */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase leading-none text-cream mb-6 md:mb-8 text-center lg:text-left">
              Nuestra Voz
            </h3>
            <div className="w-full aspect-square border border-cream/20 relative mx-auto max-w-sm lg:max-w-none">
              <img
                src={imagenesSitio.poetPortrait}
                alt="Retrato de poeta en Xelajuj No’j"
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8 md:space-y-12 mt-6 lg:mt-0">
            {/* Responsividad en el lead: menor tamaño en móvil para legibilidad */}
            <p className="text-xl sm:text-2xl md:text-4xl font-display uppercase text-balance leading-tight text-center lg:text-left">
              Más de 20 años difundiendo la poesía en{" "}
              <span className="text-carmine">Mesoamérica</span>. Somos un proyecto independiente y
              sin fines de lucro, dedicado a construir comunidad a través de la palabra.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Festival */}
              <div className="p-6 md:p-8 border border-carmine/30 bg-[#121212] hover:bg-carmine/[0.06] hover:border-carmine/50 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-display text-xl sm:text-2xl uppercase mb-3 sm:mb-4 text-carmine tracking-wider">
                    El Festival
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-cream/75 font-body font-light">
                    Un festival nacido de jóvenes poetas que construye comunidad mediante la
                    palabra, el diálogo intercultural y la acción cultural.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  {/* Botón 100% ancho en móvil */}
                  <Button asChild size="lg" className="w-full bg-carmine text-cream hover:bg-carmine/90 uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a]">
                    <Link to="/festival">
                      Entrar al festival
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Card Editorial */}
              <div className="p-6 md:p-8 border border-cream/15 bg-[#121212] hover:bg-cream/[0.04] hover:border-cream/30 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-display text-xl sm:text-2xl uppercase mb-3 sm:mb-4 text-cream tracking-wider">
                    La Editorial
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-cream/75 font-body font-light">
                    Metáfora Editores continúa la experiencia del festival en publicaciones y memorias.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  {/* Botón 100% ancho en móvil */}
                  <Button asChild size="lg" className="w-full bg-cream text-ink hover:bg-cream/90 uppercase font-display tracking-widest shadow-[3px_3px_0_0_#0a0a0a]">
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
  );
}
