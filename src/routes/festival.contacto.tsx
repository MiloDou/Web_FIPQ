import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/festival/contacto")({
  head: () => ({
    meta: [
      { title: "Información — Festival FIPQ" },
      {
        name: "description",
        content: "Información general del Festival Internacional de Poesía de Quetzaltenango.",
      },
    ],
  }),
  component: PaginaInformacionFestival,
});

function PaginaInformacionFestival() {
  return (
    <>
      <EncabezadoSeccion eyebrow="Información · FIPQ" title="El festival" accent="en contexto.">
        El Festival Internacional de Poesía de Quetzaltenango es una plataforma de lecturas,
        talleres y diálogo intercultural que conecta a poetas, estudiantes, instituciones y
        comunidades de Xelajuj No’j y del occidente guatemalteco.
      </EncabezadoSeccion>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-ink text-cream p-8">
          <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-mustard font-bold">
            Qué es
          </h3>
          <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 font-medium">
            Un festival nacido de jóvenes poetas que convirtió la lectura pública y la convivencia
            intercultural en una práctica sostenida de ciudad.
          </p>
        </section>
        <section className="bg-carmine text-cream p-8">
          <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">
            Dónde ocurre
          </h3>
          <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 font-medium">
            La poesía circula por colegios, universidades, parques, teatros y otros espacios de
            Quetzaltenango y departamentos vecinos. Las sedes de cada edición quedan en el archivo.
          </p>
        </section>
        <section className="bg-mustard text-ink p-8 border-2 border-ink">
          <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">Memoria</h3>
          <p className="font-body text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
            El festival articula lecturas, talleres, publicaciones y colaboraciones culturales; la
            fuente consultada registra también su reconocimiento como patrimonio de la ciudad.
          </p>
        </section>
      </div>
    </>
  );
}
