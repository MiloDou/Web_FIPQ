import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { contenidoImages } from "@/assets/contenido";

export const Route = createFileRoute("/festival/archivo")({
  head: () => ({
    meta: [
      { title: "Archivo Histórico — Festival FIPQ" },
      {
        name: "description",
        content:
          "Memoria de los festivales anteriores: dos décadas de poesía en el altiplano guatemalteco.",
      },
    ],
  }),
  component: PaginaArchivo,
});

const ediciones = [
  {
    number: "20",
    year: "2024",
    title: "20 FIPQ",
    image: contenidoImages[57],
    body: "Del 27 al 30 de noviembre de 2024. El blog registra esta como la edición número 20 realizada de forma ininterrumpida.",
  },
  { number: "19", year: "2023", title: "19 FIPQ", image: contenidoImages[58] },
  { number: "18", year: "2022", title: "18 FIPQ", image: contenidoImages[59] },
  { number: "17", year: "2021", title: "17 FIPQ", image: contenidoImages[60] },
  { number: "16", year: "2020", title: "16 FIPQ", image: contenidoImages[61] },
  {
    number: "15",
    year: "2019",
    title: "15 FIPQ · Ana María Rodas y mujeres desaparecidas",
    image: contenidoImages[62],
    body: "Se realizó del 19 al 24 de agosto en Xela y otros departamentos. La edición fue dedicada a Ana María Rodas, a las mujeres desaparecidas y a quienes las buscan, con acciones de memoria y lecturas públicas.",
  },
  {
    number: "14",
    year: "2018",
    title: "14 FIPQ · Nuevo Signo y migrantes desaparecidos",
    image: contenidoImages[63],
    body: "Se realizó del 7 al 11 de agosto. El festival llevó lecturas a instituciones educativas, parques, teatros, mercados y otros espacios del occidente del país.",
  },
  { number: "13", year: "2017", title: "13 FIPQ", image: contenidoImages[64] },
  { number: "12", year: "2016", title: "12 FIPQ", image: contenidoImages[65] },
  {
    number: "11",
    year: "2015",
    title: "11 FIPQ",
    image: contenidoImages[66],
    body: "Edición dedicada a la memoria de las personas desaparecidas. La inauguración reunió a Helen Mack Chang, Gabriel Jaime Franco y Rosalina Tuyuc en un foro sobre paz y memoria. El archivo del blog conserva una lista de poetas invitados e invitadas y un programa general de actividades.",
  },
  {
    number: "10",
    year: "2014",
    title: "10 FIPQ",
    image: contenidoImages[67],
    body: "Se realizó del 12 al 16 de agosto, dedicado a Francisco Nájera. Incluyó más de 30 actividades en Ciudad de Guatemala, San Juan Comalapa, Chimaltenango, San Marcos, San Cristóbal, Totonicapán y Quetzaltenango.",
  },
  {
    number: "09",
    year: "2013",
    title: "9 FIPQ",
    image: contenidoImages[72],
    body: "La edición contó con programa general, poetas invitados y un homenaje a Carolina Escobar Sarti.",
  },
  {
    number: "08",
    year: "2012",
    title: "8 FIPQ · Dedicado a Javier Payeras",
    image: contenidoImages[68],
    body: "Se realizó del 7 al 11 de agosto. Reunió lecturas públicas, poetas internacionales y guatemaltecos, una galería fotográfica y un programa dedicado al poeta y novelista Javier Payeras.",
  },
  {
    number: "07",
    year: "2011",
    title: "7 FIPQ · A la memoria de Luis de Lión",
    image: contenidoImages[69],
    body: "Se realizó del 3 al 7 de mayo de 2011. El programa incluyó lecturas en San Juan Comalapa y Quetzaltenango, conversatorios, acreditación de poetas, inauguración en el Teatro Municipal y acciones de reforestación.",
  },
  {
    number: "06",
    year: "2010",
    title: "6 FIPQ · Los del Viento",
    image: contenidoImages[70],
    body: "El programa publicado anuncia poesía en la ciudad de Quetzaltenango del 27 al 30 de abril de 2010.",
  },
  {
    number: "05",
    year: "2009",
    title: "5 FIPQ · Asalto al Cielo",
    image: contenidoImages[71],
    body: "El archivo documenta la inauguración, actividades en centros educativos y un homenaje a Francisco Morales Santos.",
  },
  { number: "04", year: "2008", title: "4 FIPQ · Animal del Monte" },
  { number: "03", year: "2007", title: "3 FIPQ · Dos puños en la Tierra" },
  { number: "02", year: "2004", title: "2 FIPQ" },
  { number: "01", year: "2003", title: "1 FIPQ · Primera edición" },
];

function PaginaArchivo() {
  return (
    <>
      <EncabezadoSeccion eyebrow="Archivo · FIPQ" title="Veinte ediciones" accent="por documentar.">
        Archivo visual del Festival Internacional de Poesía de Quetzaltenango. La información se
        reconstruyó usando el blog histórico como referencia y los afiches se guardaron localmente
        en Contenido para que esta página no dependa de ese sitio.
      </EncabezadoSeccion>

      <div className="relative pb-16">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-ink/20 md:-translate-x-1/2" />
        <ol className="space-y-16">
          {ediciones.map((e, i) => (
            <li
              key={e.number}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className="md:[direction:ltr] pl-12 md:pl-0">
                <span className="absolute left-4 md:left-1/2 top-3 w-4 h-4 bg-carmine border-2 border-ink rounded-full md:-translate-x-1/2 z-10" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-carmine">
                  {e.year
                    ? `${e.year} · Registro ${e.number}`
                    : `Pendiente de verificación · Registro ${e.number}`}
                </span>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-balance break-words font-bold">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink/80 font-medium leading-relaxed max-w-md">
                  {e.body ??
                    "Pendiente: sede, participantes, programa, memoria y fuente documental."}
                </p>
              </div>
              <div className="md:[direction:ltr] pl-12 md:pl-0">
                {e.image ? (
                  <img
                    src={e.image}
                    alt={`Afiche de ${e.title}`}
                    loading="lazy"
                    className="w-full h-auto object-contain ring-1 ring-ink/20 shadow-[6px_6px_0_0_rgba(26,26,26,0.85)] -rotate-1 hover:rotate-0 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full aspect-[4/3] bg-white ring-1 ring-ink/20 shadow-[6px_6px_0_0_rgba(26,26,26,0.85)] -rotate-1"
                    aria-label={`Fotografía pendiente de la edición ${e.number}`}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
