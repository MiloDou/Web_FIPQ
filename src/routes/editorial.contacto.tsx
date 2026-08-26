import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { AnimatedSection } from "@/components/site/AnimatedSection";

export const Route = createFileRoute("/editorial/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Editorial Metáfora" },
      {
        name: "description",
        content:
          "Contacta a la Editorial Metáfora: distribución, manuscritos, colaboraciones y prensa.",
      },
    ],
  }),
  component: PaginaContactoEditorial,
});

function PaginaContactoEditorial() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Contacto · Datos pendientes de verificación"
        title="Toca la puerta"
        accent="del taller."
      >
        Información de contacto editorial pendiente de confirmación por parte de la organización.
      </EncabezadoSeccion>

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-ink text-cream p-8 shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-cream font-bold">
              Manuscritos
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 font-medium mb-4">
              Requisitos de manuscritos, correo y recepción pendientes de verificación.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-cream/70 font-bold">
              → Correo pendiente de verificación
            </span>
          </div>

          <div className="bg-cream text-ink p-8 border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">
              Distribución
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-ink/90 font-medium mb-4">
              Condiciones de distribución, cobertura y correo pendientes de verificación.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-ink/75 font-bold">
              → Correo pendiente de verificación
            </span>
          </div>

          <div className="bg-ink/5 text-ink p-8 border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">Prensa</h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-ink/90 font-medium mb-4">
              Canal de prensa y dossier de imágenes pendientes de verificación.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-ink/75 font-bold">
              → Correo pendiente de verificación
            </span>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-16 border-2 border-ink p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              Visítanos
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase mt-2 leading-none font-bold">
              Taller Metáfora
            </h3>
            <p className="font-body text-base leading-relaxed text-ink/85 font-medium mt-4">
              Sede y dirección pendientes de verificación.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/65 font-semibold">
              Horario · Pendiente de verificación
            </p>
          </div>
          <div className="font-display text-2xl sm:text-3xl md:text-4xl uppercase leading-snug text-ink/85 font-bold">
            «Información editorial pendiente de confirmación oficial.»
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
