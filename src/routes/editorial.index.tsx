import { createFileRoute, Link } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { CartelCollage } from "@/components/site/CollagePoster";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/editorial/")({
  head: () => ({
    meta: [
      { title: "Editorial Metáfora — Inicio" },
      {
        name: "description",
        content: "Catálogo y archivo del sello independiente Metáfora, brazo editorial del FIPQ.",
      },
    ],
  }),
  component: InicioEditorial,
});

const novedades = [
  {
    tag: "Memoria",
    title: "De la voz al libro",
    meta: "Publicaciones vinculadas al festival",
    image: imagenesSitio.risographBook,
    body: "Las memorias y publicaciones amplían la vida de las lecturas y conservan la palabra compartida.",
  },
  {
    tag: "Editorial",
    title: "Poesía centroamericana",
    meta: "Metáfora Editores",
    image: imagenesSitio.booksStack,
    body: "Un proyecto editorial que publica poesía centroamericana desde y para el festival.",
  },
  {
    tag: "Comunidad",
    title: "El archivo de la ciudad",
    meta: "Lecturas, talleres y memoria",
    image: imagenesSitio.posterRed,
    body: "El catálogo reúne voces, encuentros y publicaciones que nacen de una plataforma cultural común.",
  },
];

function InicioEditorial() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Metáfora Editores · Desde el festival"
        title="De la voz"
        accent="al libro."
      >
        La editorial nace como continuidad de las lecturas y talleres: publica poesía
        centroamericana y algunas memorias del festival, desde Xelajuj No’j y para la región.
      </EncabezadoSeccion>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {novedades.map((n, i) => (
          <CartelCollage
            key={n.title}
            index={i}
            tag={n.tag}
            title={n.title}
            meta={n.meta}
            image={n.image}
          >
            {n.body}
          </CartelCollage>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 gap-8">
        <Link
          to="/editorial/catalogo"
          className="block bg-ink text-cream p-6 sm:p-10 hover:bg-carmine transition-all hover:-translate-y-1 duration-300"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-mustard font-bold">
            → 01
          </span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-none font-bold break-words">
            Catálogo completo
          </h3>
          <p className="mt-4 text-cream/90 text-sm font-medium leading-relaxed">
            50 títulos registrados hasta ahora. Las colecciones se organizarán más adelante.
          </p>
        </Link>
      </div>
    </>
  );
}
