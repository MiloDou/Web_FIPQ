import { AnimatedSection } from "@/components/shared/AnimatedSection";

type Evento = { sede: string; direccion?: string; actividad?: string; poetas?: string };
type Bloque = { horario: string; eventos: Evento[] };
type Dia = { fecha: string; bloques: Bloque[] };

const agenda: Dia[] = [
  {
    fecha: "Miércoles 25 de noviembre",
    bloques: [
      {
        horario: "15:00 – 17:00 hrs.",
        eventos: [
          {
            sede: "Frontispicio del Edificio de Gobernación Departamental de Quetzaltenango, Casa Aparicio",
            direccion: "13 Avenida 5-19, Zona 1, Quetzaltenango",
            actividad: "Feria de arte, gastronomía y libros",
          },
        ],
      },
      {
        horario: "17:00 – 20:00 hrs.",
        eventos: [
          {
            sede: "Edificio de Gobernación Departamental de Quetzaltenango, Casa Aparicio",
            direccion: "13 Avenida 5-19, Zona 1, Quetzaltenango",
            actividad:
              "Ceremonia, lectura de poesía inaugural y homenaje al pensador Roney Edelberto Alvarado-Gamarro",
            poetas: "Todas y todos los poetas participantes",
          },
        ],
      },
    ],
  },
  {
    fecha: "Jueves 26 de noviembre",
    bloques: [
      {
        horario: "15:00 – 17:00 hrs.",
        eventos: [
          {
            sede: "Asociación de Periodistas de Quetzaltenango (APQ)",
            direccion: "13 Avenida 8a Calle, Zona 1, Quetzaltenango",
            poetas:
              "Juan Carlos Abril (España), Renato Rodríguez (Canadá), Diego Ventura Puac (Guatemala), Marcela Dubón (Guatemala), Calixta Gabriel (Guatemala), Tania Ramos (México), Carlos Colón Ruíz (Puerto Rico), Ángeles Mohedo (España), María Pineda (Guatemala), Cynthia Guardado (Américas)",
          },
          {
            sede: "Comisión Presidencial por la Paz y los Derechos Humanos (COPADEH)",
            direccion: "Calle C 25-36, Zona 1, Quetzaltenango",
            poetas:
              "Jorge Valbuena (Colombia), Mirtha Luz (México), Jorge Miguel Cocom Pech (México), Fadir Delgado (Colombia), Ana María Rivas (El Salvador), Javier Flores Masaya (Guatemala), Rodrigo Tarabillo (Bolivia), Sarawi Andrago (Ecuador), Guillermo Acuña (Costa Rica)",
          },
          {
            sede: "Teatro Café La Luna",
            direccion: "8a. Av. 4-11, Zona 1, Quetzaltenango",
            poetas:
              "Vilma Calderón (Guatemala), Rolman Josué Constantino (México), Eduardo Villalobos (Guatemala), Manuel Bolom (Guatemala)",
          },
          {
            sede: "Grupo de Apoyo Xela (GAX)",
            direccion: "Diagonal 3, 4-37, Zona 1, Quetzaltenango",
            poetas:
              "Oswaldo Samayoa (Guatemala), Beatriz Sánchez (Guatemala), Natalia del Carmen Eduardo (Guatemala), Kory Hernández (México)",
          },
        ],
      },
      {
        horario: "19:00 – 21:00 hrs.",
        eventos: [
          {
            sede: "Consulado de Carrera de México en Quetzaltenango",
            direccion: "2a. Calle 3-90, Zona 4, La Esperanza, Quetzaltenango",
            poetas:
              "Tania Ramos (México), Jorge Miguel Cocom Pech (México), Mirtha Luz Pérez (México), Rolman Josué Constantino (México), Kory Hernández (México), Wingston González (Guatemala), Gloria Hernández (Guatemala), Eduardo Villalobos (Guatemala), Manuel Bolom (Guatemala)",
          },
          {
            sede: "Segundo nivel, Torre Central, Parque Intercultural",
            direccion: "21 Avenida y 4a. Calle, Zona 3, Quetzaltenango",
            poetas:
              "Juan Carlos Abril (España), Leonardo Nin (República Dominicana), Sarawi Andrago (Ecuador), Fadir Delgado (Colombia), Douglas de Almeida (Brasil), Gabriel Woltke (Guatemala), Flavia Garcia (Argentina), Oswaldo Samayoa (Guatemala), Guillermo Acuña (Costa Rica), Ana María Rivas (El Salvador), Natalia del Carmén Eduardo (Guatemala), María Pineda (Guatemala)",
          },
        ],
      },
    ],
  },
  {
    fecha: "Viernes 27 de noviembre",
    bloques: [
      {
        horario: "09:00 – 12:00 hrs.",
        eventos: [
          {
            sede: "Centro Cultural Municipal de Concepción Chiquirichapa",
            poetas:
              "Diego Ventura Puac (Guatemala), Oswaldo Samayoa (Guatemala), Flavia García (Argentina), Karla Armas (Ecuador)",
          },
          {
            sede: "Asociación de Escritores de Mazatenango",
            poetas:
              "Javier Flores Masaya (Guatemala), Ana María Rivas (El Salvador), María Pineda (Guatemala), Ángeles Mohedo (España)",
          },
          {
            sede: "Sede Chiantla, Huehuetenango",
            direccion: "Parque Central de Chiantla, zona 1, Huehuetenango",
            actividad: "10:30 a.m.",
            poetas:
              "Natalia del Carmen Eduardo (Guatemala), Rodrigo Tarabillo (Bolivia), Rolman Josué Constantino (México)",
          },
          {
            sede: "Casa Alegría",
            direccion: "Caserío Los Romero, San Juan Ostuncalco",
            poetas:
              "Calixta Gabriel (Guatemala), Carlos Villalobos (Costa Rica), Marcela Dubón (Guatemala), Manuel Bolom (Guatemala)",
          },
          {
            sede: "Alianza Francesa",
            direccion: "14 Avenida 3-21, zona 1, Quetzaltenango",
            poetas:
              "Renato Rodriguez-Lefebvre (Canadá), Jorge Miguel Cocom Pech (México), Beatriz Sánchez (Guatemala), Vilma Sánchez (Guatemala), Douglas de Almeida (Brasil), Leanardo Nin (República Dominicana), Vilma Calderón (Guatemala), Juan Carlos Abril (España)",
          },
          {
            sede: "Escuela Taller Quetzaltenango",
            direccion: "13 Avenida 10-17, Zona 1, Quetzaltenango",
            poetas:
              "Carlos Colón Ruiz (Puerto Rico), Eduardo Villalobos (Guatemala), Gabriel Woltke (Guatemala), Jorge Valbuena (Colombia), Mirtha Luz Pérez (México), Sarawí Andrango (Ecuador), Tania Ramos (México)",
          },
        ],
      },
      {
        horario: "15:00 – 17:00 hrs.",
        eventos: [
          {
            sede: "Polvorín, Parque Intercultural",
            direccion: "21 Avenida y 4a Calle, Zona 3, Quetzaltenango",
            actividad: "Lectura de poesía por la memoria",
            poetas:
              "Eduardo Villalobos (Guatemala), Gloria Hernández (Guatemala), Kory Hernandez (México), Sarawí Andrango (Ecuador), Wingston González (Guatemala), Carlos Colon Ruíz (Puerto Rico), Tania Ramos (México), Cynthia Guardado (Américas)",
          },
          {
            sede: "Alianza Francesa",
            direccion: "14a. Avenida A 3-21, zona 1, Quetzaltenango",
            actividad: "Conversatorio «Desarmar el lenguaje»",
            poetas: "Doryan Bedoya (Colombia)",
          },
          {
            sede: "Centro Cultural Municipal de San Juan Ostuncalco",
            direccion: "2a. calle 1-51 zona 2, San Juan Ostuncalco",
            poetas:
              "Jorge Miguel Cocom Pech (México), Douglas de Almeida (Brasil), Vilma Caldeŕon (Guatemala), Fadir Delgado (Colombia)",
          },
          {
            sede: "Centro Cultural Efraín Recinos",
            direccion: "Avenida Jesús Castillo 3-24, Zona 2, Quetzaltenango",
            poetas:
              "Vilma Sánchez (Guatemala), Guillermo Acuña (Costa Rica), Leonardo Nin (República Dominicana), Renato Rodriguez-Lefebvre (Canadá)",
          },
          {
            sede: "Librería Órbita",
            direccion: "6ta. Calle 5-31, Zona 1, Quetzaltenango",
            poetas:
              "Beatriz Sánchez (Guatemala), Carlos Colon Ruíz (Puerto Rico), Jorge Valbuena (Colombia)",
          },
          {
            sede: "Librería Santiaguito",
            direccion: "9a. Calle 9-38, Zona 1, Quetzaltenango",
            poetas:
              "Juan Carlos Abril (España), Gabriel Woltke (Guatemala), Marcela Dubón (Guatemala), Mirtha Luz Pérez (México)",
          },
        ],
      },
      {
        horario: "19:00 – 21:00 hrs.",
        eventos: [
          {
            sede: "32 Volcanes",
            direccion: "9a. Calle 9-38, Zona 1, Quetzaltenango",
            actividad: "Presentación de la memoria del 21 FIPQ",
            poetas: "Todas y todos los poetas participantes",
          },
        ],
      },
    ],
  },
  {
    fecha: "Sábado 28 de noviembre",
    bloques: [
      {
        horario: "09:00 – 12:00 hrs.",
        eventos: [
          {
            sede: "Sede Nahualá, Sololá",
            direccion: "Oficinas Super Cable Nahualá",
            poetas:
              "Juan Carlos Abril (España), Gloria Hernández (Guatemala), Renato Rodriguez-Lefebvre (Canadá), Mirtha Luz Pérez (México)",
          },
          {
            sede: "Club Literario Coatepeque",
            poetas:
              "Jorge Valbuena (Colombia), Gabriel Woltke (Guatemala), Cynthia Guardado (Américas)",
          },
          {
            sede: "Sede Retalhuleu",
            direccion:
              "Salón Comunal de la Colonia San Josecito, zona 2, junto a la plazuela, Retalhuleu",
            poetas:
              "Leonardo Nin (República Dominicana), Carlos Villalobos (Costa Rica), Marcela Dubón (Guatemala)",
          },
          {
            sede: "Galería Lands",
            direccion: "14 Avenida 3-29, Zona 1, Quetzaltenango",
            poetas:
              "Ana María Rivas (El Salvador), Diego Ventura Puac (Guatemala), Flavia García (Argentina), Guillermo Acuña (Costa Rica), Karla Armas (Ecuador), Manuel Bolom (Guatemala), María Pineda (Guatemala), Rolman Josué Constantino (México)",
          },
          {
            sede: "Artesanías Maty",
            direccion:
              "Mercado Municipal Terminal Minerva, bazares local 60, Zona 3, Quetzaltenango",
            poetas:
              "Natalia del Carmen (Guatemala), Carlos Colon Ruíz (Puerto Rico), Rodrigo Tarabillo (Bolivia), Sandra Aguilar (El Salvador), Sarawi Andrango (Ecuador), Tania Ramos (México), Javier Flores Masaya (Guatemala), Calixta Gabriel (Guatemala)",
          },
        ],
      },
      {
        horario: "15:00 – 17:00 hrs.",
        eventos: [
          {
            sede: "Librería Órbita",
            direccion: "6ta. Calle 5-31, Zona 1, Quetzaltenango",
            actividad: "Presentación de libros",
            poetas:
              "Delmara — Ana María Rivas (El Salvador), Órbita Editorial; En busca de una pausa — Juan Carlos Abril (España), Metáfora Editores",
          },
        ],
      },
      {
        horario: "19:00 – 21:00 hrs.",
        eventos: [
          {
            sede: "Edificio de Gobernación Departamental de Quetzaltenango, Casa Aparicio",
            direccion: "13 Avenida 5-19, Zona 1, Quetzaltenango",
            actividad:
              "Clausura y anuncio del 22 Festival Internacional de Poesía de Quetzaltenango",
            poetas: "Todas y todos los poetas participantes",
          },
        ],
      },
    ],
  },
];

function EventoCard({ evento }: { evento: Evento }) {
  return (
    <article className="border-l-2 border-carmine pl-5 py-1">
      <h3 className="font-display text-2xl uppercase leading-tight text-ink">{evento.sede}</h3>
      {evento.direccion && (
        <p className="mt-2 text-sm text-ink/65">
          <span className="font-bold text-ink">Dirección:</span> {evento.direccion}
        </p>
      )}
      {evento.actividad && (
        <p className="mt-2 font-body text-sm leading-relaxed">
          <span className="font-bold">Actividad:</span> {evento.actividad}
        </p>
      )}
      {evento.poetas && (
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">
          <span className="font-bold text-ink">Poetas:</span> {evento.poetas}
        </p>
      )}
    </article>
  );
}

export function FestivalProgramPage() {
  return (
    <div className="space-y-4 pb-12">
      <AnimatedSection>
        <header id="contenido" className="pt-2">
          <h1 className="font-display text-5xl sm:text-7xl uppercase leading-none font-bold text-ink">
            Agenda completa
          </h1>
        </header>
      </AnimatedSection>
      <div className="space-y-10">
        {agenda.map((dia) => (
          <AnimatedSection key={dia.fecha}>
            <section aria-label={dia.fecha}>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-carmine">
                {dia.fecha}
              </h2>
              <div className="mt-6 space-y-8">
                {dia.bloques.map((bloque) => (
                  <div key={bloque.horario} className="grid gap-4 md:grid-cols-[190px_1fr]">
                    <h3 className="font-mono text-sm font-bold tracking-wide text-ink">
                      {bloque.horario}
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {bloque.eventos.map((evento) => (
                        <EventoCard key={evento.sede} evento={evento} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
