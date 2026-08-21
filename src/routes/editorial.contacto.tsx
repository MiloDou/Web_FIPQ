import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-ink text-cream p-8">
          <h3 className="font-display text-3xl uppercase mb-4 text-mustard">Manuscritos</h3>
          <p className="text-sm leading-relaxed text-cream/85 mb-4">
            Requisitos de manuscritos, correo y recepción pendientes de verificación.
          </p>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mustard">
            → Correo pendiente de verificación
          </span>
        </div>

        <div className="bg-carmine text-cream p-8">
          <h3 className="font-display text-3xl uppercase mb-4">Distribución</h3>
          <p className="text-sm leading-relaxed text-cream/90 mb-4">
            Condiciones de distribución, cobertura y correo pendientes de verificación.
          </p>
          <span className="font-mono text-[11px] uppercase tracking-widest text-cream">
            → Correo pendiente de verificación
          </span>
        </div>

        <div className="bg-mustard text-ink p-8 border-2 border-ink">
          <h3 className="font-display text-3xl uppercase mb-4">Prensa</h3>
          <p className="text-sm leading-relaxed text-ink/85 mb-4">
            Canal de prensa y dossier de imágenes pendientes de verificación.
          </p>
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink">
            → Correo pendiente de verificación
          </span>
        </div>
      </div>

      <div className="mt-16 border-2 border-ink p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-carmine">
            Visítanos
          </span>
          <h3 className="font-display text-4xl uppercase mt-2 leading-none">Taller Metáfora</h3>
          <p className="mt-4 font-mono text-sm leading-relaxed text-ink/80">
            Sede y dirección pendientes de verificación.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/60">
            Horario · Pendiente de verificación
          </p>
        </div>
        <div className="font-display text-3xl md:text-4xl uppercase leading-tight text-ink/85">
          «Información editorial pendiente de confirmación oficial.»
        </div>
      </div>
    </>
  );
}
