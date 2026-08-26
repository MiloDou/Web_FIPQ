import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { AnimatedSection } from "@/components/site/AnimatedSection";

export const Route = createFileRoute("/editorial/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Editorial Metáfora" },
      {
        name: "description",
        content: "Catálogo completo de la Editorial Metáfora: antologías, poemarios y ensayos.",
      },
    ],
  }),
  component: PaginaCatalogo,
});

const titulosCatalogo = [
  ["Palabra de búho", "Negma Coy"],
  ["Carta Astral", "Delia Quiñónez"],
  ["Slogan de una bala expansiva", "Javier Payeras"],
  ["Poemas muy violetas", "Chary Gumeta"],
  ["Trilogía de la violencia", "René Morales"],
  ["Mujeres del viento", "Varias autoras"],
  ["Al centro de la belleza", "Varias autoras"],
  ["Despatriados", "Chary Gumeta"],
  ["Una palabra que perfora el tiempo", "Varios autores"],
  ["Madre nosotros también somos historia", "Francisco Morales Santos"],
  ["Antes del mar", "Julio Serrano"],
  ["Edad geológica del miedo", "Carmen Lucía Alvarado"],
  ["Aquí está tu pangea", "Paola Ochoa"],
  ["Memoria 12 FIPQ", "Varios autores"],
  ["Memoria 13 FIPQ", "Varios autores"],
  ["Memoria 14 FIPQ", "Varios autores"],
  ["Memoria 20 FIPQ", "Varios autores"],
  ["Memoria 15 FIPQ", "Varios autores"],
  ["Memoria de las piedras", "Marvin García"],
  ["Volumen de islas", "Javier Payeras"],
  ["Palabras para colgar en los árboles", "Varios autores"],
  ["Entre laureles y Conquistadores", "Paul Haase"],
  ["Inevitable", "David Robinson"],
  ["En ninguno de tus mapas", "Guillermo Acuña"],
  ["Vostok", "Guillermo Acuña"],
  ["Al fondo del corazón", "Guillermo Acuña"],
  ["Pequeñas rutas de un azacuán con frío", "José Aguilar"],
  ["Como Tambores", "Rodolfo Dada"],
  ["Mathamba", "Jorge Cordón"],
  ["Poemas al margen del canon", "David Robinson"],
  ["Salvia y la sorpresa que crece", "Keren Escobar"],
  ["Ceibario / Unupilal", "Balam Rodrigo"],
  ["Fragmentos de un vuelo", "Génesis Ramos"],
  ["Kyol Txin (Palabra de niña), de Concepción Chiquirichapa", "Varios autores"],
  ["Mitos", "David Robinson"],
  ["Se iluminará la noche", "Trangay de Luján"],
  ["Terremoto, Muerte y resurección de un pueblo Comalapa 1976", "Jorge Cordón"],
  ["Arquitectura con sabor a Café", "Jorge Cordón"],
  ["Albúm familiar centroamericano", "Balam Rodrigo"],
  ["Todo viaje empieza su final", "Javier Payeras"],
  ["Poemas de la Zona Reina", "Mario Payeras"],
  ["Notas bibliograficas", "Vanias Vargas"],
  ["Soles y lunas", "Vilma Sánchez"],
  ["El órgano inextirpable del sueño", "Balam Rodrigo"],
  ["Cuentos de la muerte que ronda", "Jorge Pinto Marín"],
  ["Pensar en lo comunitario", "Roberto Guerra Veas"],
  ["Bitácora del fin del mundo", "María Odalys Pineda"],
  ["La palabra pintada", "Hugo Gutiérrez"],
  ["Cuadros sin costumbre", "Julio Serrano"],
  ["Los dedos de mi mano", "Alaíde Foppa"],
]
  .sort(([tituloA, autorA], [tituloB, autorB]) => {
    const ordenAutor = autorA.localeCompare(autorB, "es", { sensitivity: "base" });
    return ordenAutor || tituloA.localeCompare(tituloB, "es", { sensitivity: "base" });
  })
  .map(([titulo, autor], indice) => ({ numero: indice + 1, titulo, autor }));

const catalogoPorAutor = titulosCatalogo.reduce<Record<string, typeof titulosCatalogo>>(
  (grupos, titulo) => {
    grupos[titulo.autor] ??= [];
    grupos[titulo.autor].push(titulo);
    return grupos;
  },
  {},
);

function PaginaCatalogo() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="50 títulos · Catálogo FIPQ"
        title="Catálogo"
        accent="en expansión."
      >
        Registro de títulos y autores vinculados al catálogo del Festival Internacional de Poesía de
        Quetzaltenango. Las colecciones se incorporarán en una siguiente etapa.
      </EncabezadoSeccion>

      <div className="space-y-16">
        {Object.entries(catalogoPorAutor).map(([autor, titulos]) => (
          <section key={autor}>
            <div className="mb-4 border-b-2 border-ink pb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/75">
                Autor
              </span>
              <h2 className="font-display text-4xl uppercase leading-none">{autor}</h2>
            </div>
            <ul className="divide-y divide-ink/15">
              {titulos.map((titulo) => (
                <li
                  key={titulo.numero}
                  className="flex flex-row items-baseline gap-3 md:grid md:grid-cols-12 md:gap-4 py-3 md:py-4 hover:bg-ink/5 transition-colors px-3 rounded-sm -mx-3"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-ink/85 shrink-0 md:col-span-2">
                    {String(titulo.numero).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg sm:text-xl md:text-2xl uppercase leading-snug font-bold md:col-span-10">
                    {titulo.titulo}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
