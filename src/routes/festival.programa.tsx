import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { AnimatedSection } from "@/components/site/AnimatedSection";

export const Route = createFileRoute("/festival/programa")({
  head: () => ({
    meta: [
      { title: "Agenda de actividades — Festival FIPQ" },
      {
        name: "description",
        content:
          "Agenda actual del Festival Internacional de Poesía de Quetzaltenango. Próximamente.",
      },
    ],
  }),
  component: PaginaPrograma,
});

function PaginaPrograma() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Agenda de actividades"
        title="Próximamente"
        accent="Estamos preparando el programa."
      >
        El cronograma completo de actividades, lecturas, talleres y encuentros comunitarios del Festival será publicado en este espacio muy pronto.
      </EncabezadoSeccion>

      <div className="space-y-12 pb-32">
        <AnimatedSection>
          <div className="border-t-2 border-ink pt-12 flex flex-col items-center justify-center text-center min-h-[40vh]">
            <span className="font-mono text-sm sm:text-base tracking-widest uppercase text-carmine font-bold mb-4">
              [ En construcción ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none font-bold text-ink/20">
              Programa en<br/>desarrollo
            </h2>
            <p className="mt-6 max-w-md text-ink/70 font-body text-sm sm:text-base leading-relaxed">
              Mantente atento a nuestras redes oficiales. Pronto revelaremos los horarios y sedes de la próxima edición.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
