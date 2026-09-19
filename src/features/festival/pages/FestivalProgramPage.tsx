import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function FestivalProgramPage() {
  return (
    <>
      <div className="space-y-12 pb-2">
        <AnimatedSection>
          <div className="border-t-2 border-ink pt-12 flex flex-col items-center justify-center text-center min-h-[40vh]">
            <span className="font-mono text-sm sm:text-base tracking-widest uppercase text-carmine font-bold mb-4">
              [ En construcción ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none font-bold text-ink/20">
              Programa en
              <br />
              desarrollo
            </h2>
            <p className="mt-6 max-w-md text-ink/70 font-body text-sm sm:text-base leading-relaxed">
              Mantente atento a nuestras redes oficiales. Pronto revelaremos los horarios y sedes de
              la próxima edición.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.facebook.com/MetaforaFIPQ?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                aria-label="Seguir al FIPQ en Facebook (abre en nueva pestaña)"
                className="bg-ink text-cream hover:bg-carmine active:bg-carmine px-6 py-3 min-h-[44px] font-body text-sm uppercase tracking-wider font-bold transition-colors shadow-[3px_3px_0_0_#121212] active:shadow-none active:translate-y-0.5 cursor-pointer"
              >
                Seguir en Facebook
              </a>
              <a
                href="/"
                aria-label="Volver a la página de inicio"
                className="bg-white text-ink border-2 border-ink hover:bg-ink/5 active:bg-ink/10 px-6 py-3 min-h-[44px] font-body text-sm uppercase tracking-wider font-bold transition-colors shadow-[3px_3px_0_0_#121212] active:shadow-none active:translate-y-0.5 cursor-pointer"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
