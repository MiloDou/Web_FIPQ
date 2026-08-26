import { createFileRoute } from "@tanstack/react-router";
import { imagenesSitio } from "@/assets/contenido";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { AnimatedSection } from "@/components/site/AnimatedSection";

export const Route = createFileRoute("/festival/programa")({
  head: () => ({
    meta: [
      { title: "Agenda de actividades — Festival FIPQ" },
      {
        name: "description",
        content:
          "Agenda actual del Festival Internacional de Poesía de Quetzaltenango, sujeta a cambios.",
      },
    ],
  }),
  component: PaginaPrograma,
});

type Actividad = {
  hora: string;
  lugar: string;
  evento: string;
  encargado: string;
};

type Jornada = {
  dia: string;
  titulo: string;
  imagen: string;
  actividades: Actividad[];
};

const programa: Jornada[] = [
  {
    dia: "Miércoles 25",
    titulo: "Apertura",
    imagen: imagenesSitio.stageNight,
    actividades: [
      {
        hora: "17:00–20:00",
        lugar: "Gobernación",
        evento: "Actividad de apertura",
        encargado: "Marvin",
      },
    ],
  },
  {
    dia: "Jueves 26",
    titulo: "Ceremonia y articulación intercultural",
    imagen: imagenesSitio.crowdBw,
    actividades: [
      {
        hora: "09:00–12:00",
        lugar: "Ceremonia Intercultural",
        evento: "Ceremonia intercultural",
        encargado: "Marvin y Milo",
      },
      {
        hora: "15:00–17:00",
        lugar: "APQ",
        evento: "Actividad de coordinación",
        encargado: "Marvin",
      },
      {
        hora: "15:00–17:00",
        lugar: "Copade",
        evento: "Actividad de coordinación",
        encargado: "Milo",
      },
      {
        hora: "15:00–17:00",
        lugar: "Amuted",
        evento: "Actividad de coordinación",
        encargado: "Marvin",
      },
      {
        hora: "15:00–17:00",
        lugar: "Alianza Francesa",
        evento: "Actividad de coordinación",
        encargado: "Milo",
      },
      {
        hora: "19:00–21:00",
        lugar: "Consulado de México",
        evento: "Actividad nocturna",
        encargado: "Marvin",
      },
      {
        hora: "19:00–21:00",
        lugar: "Intercultural",
        evento: "Actividad nocturna",
        encargado: "Marvin",
      },
    ],
  },
  {
    dia: "Viernes",
    titulo: "Circulación territorial",
    imagen: imagenesSitio.workshop,
    actividades: [
      {
        hora: "09:00–12:00",
        lugar: "San Marcos",
        evento: "Actividad durante todo el día",
        encargado: "Marvin",
      },
      {
        hora: "09:00–12:00",
        lugar: "Concepción",
        evento: "Actividad durante todo el día",
        encargado: "Marvin",
      },
      { hora: "09:00–12:00", lugar: "Huehue", evento: "Pendiente", encargado: "Milo" },
      { hora: "09:00–12:00", lugar: "Rudolf", evento: "Actividad programada", encargado: "Gabi" },
      {
        hora: "09:00–12:00",
        lugar: "Escuela Taller",
        evento: "Actividad programada",
        encargado: "Marvin",
      },
      {
        hora: "15:00–17:00",
        lugar: "San Juan Ostuncalco",
        evento: "Actividad programada",
        encargado: "Marvin",
      },
      {
        hora: "15:00–17:00",
        lugar: "Efraín Recinos",
        evento: "Actividad programada",
        encargado: "Milo",
      },
      { hora: "15:00–17:00", lugar: "Órbita", evento: "Actividad programada", encargado: "Milo" },
      {
        hora: "15:00–17:00",
        lugar: "Santiaguito",
        evento: "Actividad programada",
        encargado: "Milo",
      },
      {
        hora: "19:00–21:00",
        lugar: "32 Volcanes · La grande",
        evento: "Actividad colectiva",
        encargado: "Todos",
      },
    ],
  },
  {
    dia: "Sábado 28",
    titulo: "Territorio y cierre",
    imagen: imagenesSitio.poetPortrait,
    actividades: [
      {
        hora: "09:00–12:00",
        lugar: "Nahualá",
        evento: "Actividad programada",
        encargado: "Pendiente",
      },
      {
        hora: "09:00–12:00",
        lugar: "Coatepeque",
        evento: "Actividad programada",
        encargado: "Pendiente",
      },
      { hora: "09:00–12:00", lugar: "Reu", evento: "Actividad programada", encargado: "Pendiente" },
      {
        hora: "09:00–12:00",
        lugar: "Mazate",
        evento: "Actividad programada",
        encargado: "Pendiente",
      },
      { hora: "09:00–12:00", lugar: "Terminal", evento: "Actividad programada", encargado: "Gabi" },
      { hora: "09:00–12:00", lugar: "Conred", evento: "Actividad programada", encargado: "Gabi" },
      {
        hora: "09:00–12:00",
        lugar: "Casa Scout",
        evento: "Actividad programada",
        encargado: "Milo",
      },
      {
        hora: "09:00–12:00",
        lugar: "Casa Hogar",
        evento: "Actividad programada",
        encargado: "Gabi",
      },
      { hora: "15:00–17:00", lugar: "Resto del día", evento: "Tiempo libre", encargado: "Todos" },
      { hora: "19:00–21:00", lugar: "Gobernación", evento: "Pendiente", encargado: "Marvin" },
    ],
  },
];

function PaginaPrograma() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Agenda actual · Sujeta a cambios"
        title="La poesía"
        accent="se organiza en comunidad."
      >
        Cronograma de actividades, lugares y responsables. Esta agenda puede cambiar; los elementos
        pendientes están marcados de forma explícita.
      </EncabezadoSeccion>

      <div className="space-y-12">
        {programa.map((jornada, indice) => (
          <AnimatedSection key={jornada.dia}>
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t-2 border-ink pt-6">
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-carmine">
                  [{String(indice + 1).padStart(2, "0")}]
                </span>
                <h2 className="mt-1 font-display text-4xl uppercase leading-none">{jornada.dia}</h2>
                <p className="mt-2 font-display text-lg uppercase text-ink/70">{jornada.titulo}</p>
                <img
                  src={jornada.imagen}
                  alt={`Registro visual de ${jornada.titulo}`}
                  loading="lazy"
                  className="mt-5 w-full max-h-56 object-contain bg-ink ring-1 ring-ink/20 rounded-none"
                />
              </div>
              <ul className="md:col-span-9 divide-y divide-ink/15">
                {jornada.actividades.map((actividad) => (
                  <li
                    key={`${actividad.hora}-${actividad.lugar}`}
                    className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-4 md:items-baseline py-4 hover:bg-mustard/10 transition-colors px-3 rounded-none -mx-3"
                  >
                    <div className="flex items-center justify-between md:contents">
                      <span className="font-mono text-xs sm:text-sm tracking-wider text-carmine font-bold md:col-span-3">
                        {actividad.hora}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-ink/75 font-bold md:col-span-3">
                        {actividad.lugar}
                      </span>
                    </div>
                    <span className="font-body text-base text-ink font-semibold md:col-span-4">
                      {actividad.evento}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink/60 font-medium md:col-span-2 md:text-right">
                      {actividad.encargado}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
