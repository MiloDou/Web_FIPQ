import { createFileRoute, Link } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { CartelCollage } from "@/components/site/CollagePoster";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/")({
  head: () => ({
    meta: [
      { title: "Festival Internacional de Poesía de Quetzaltenango — FIPQ" },
      {
        name: "description",
        content:
          "Lecturas públicas, talleres y encuentro comunitario en Quetzaltenango y el occidente de Guatemala.",
      },
    ],
  }),
  component: InicioFestival,
});

const destacados = [
  {
    tag: "Lecturas",
    title: "Poesía en acción",
    meta: "Quetzaltenango y occidente",
    image: imagenesSitio.stageNight,
    body: "Poetas de Guatemala y de otros países comparten su trabajo en espacios públicos y comunitarios.",
  },
  {
    tag: "Talleres",
    title: "Una plataforma común",
    meta: "Escuelas y universidades",
    image: imagenesSitio.crowdBw,
    body: "Maestros, estudiantes, centros culturales e instituciones se encuentran alrededor de la palabra.",
  },
  {
    tag: "Comunidad",
    title: "Un festival del pueblo",
    meta: "Patrimonio de Quetzaltenango",
    image: imagenesSitio.posterRed,
    body: "La ciudad sostiene un espacio para conocer nuevas voces y encontrarse como comunidad.",
  },
];

function InicioFestival() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Festival Internacional de Poesía de Quetzaltenango"
        title="Poesía en acción"
        accent="desde Xelajuj No’j."
      >
        Lecturas públicas, talleres y expresiones artísticas que conectan a poetas, estudiantes,
        instituciones y comunidades de Quetzaltenango, Totonicapán, Huehuetenango, San Marcos y
        otros territorios del occidente guatemalteco.
      </EncabezadoSeccion>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {destacados.map((d, i) => (
          <CartelCollage
            key={d.title}
            index={i}
            tag={d.tag}
            title={d.title}
            meta={d.meta}
            image={d.image}
          >
            {d.body}
          </CartelCollage>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <Link
          to="/festival/programa"
          className="block bg-ink text-cream p-6 sm:p-10 hover:bg-carmine transition-all hover:-translate-y-1 duration-300"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-mustard font-bold">
            → 01
          </span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-none font-bold break-words">
            Ver programa completo
          </h3>
          <p className="mt-4 text-cream/90 text-sm font-medium leading-relaxed">
            Lecturas, talleres y encuentros documentados por edición.
          </p>
        </Link>
        <Link
          to="/festival/contacto"
          className="block bg-mustard text-ink p-6 sm:p-10 hover:bg-cream transition-all hover:-translate-y-1 duration-300 ring-2 ring-ink"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            → 02
          </span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-none font-bold break-words">
            Conoce el festival
          </h3>
          <p className="mt-4 text-ink/90 text-sm font-medium leading-relaxed">
            Historia, contexto y datos pendientes de verificación sobre el encuentro poético de
            Quetzaltenango.
          </p>
        </Link>
      </div>
    </>
  );
}
