import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto del Festival — Poesía y Resistencia" },
      {
        name: "description",
        content:
          "Manifiesto y propósito fundacional del Festival Internacional de Poesía de Quetzaltenango: Frente al horror, creemos, insistimos, estamos de pie.",
      },
    ],
  }),
  component: PaginaManifiesto,
});

const pilaresInfo = {
  raiz: {
    titulo: "Raíz Profunda",
    descripcion:
      "Nos aferramos a la memoria de nuestras primeras abuelas y nuestros primeros abuelos. Invocamos su lenguaje primigenio tallado en la piedra eterna de Xelajuj No'j para guiar el canto del presente.",
  },
  origen: {
    titulo: "Origen",
    descripcion:
      "Quetzaltenango duerme a la par del volcán y sus montañas. Esta certeza telúrica es nuestra fuerza y origen, el cuerpo geográfico donde resistimos y nos renovamos constantemente.",
  },
  lenguaje: {
    titulo: "Lenguaje",
    descripcion:
      "La palabra es una de tantas puertas a la verdad. La poesía es la más alta creación humana y por eso le corresponde hablar de la belleza y de los actos más viles.",
  },
};

function PaginaManifiesto() {
  const [activePillar, setActivePillar] = useState<keyof typeof pilaresInfo>("raiz");

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 bg-cream text-ink">
      {/* Cabecera Tipo Catálogo de Arte */}
      <header className="mb-12 border-b border-ink/20 pb-6 text-center">
        <span className="block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-3">
          Festival Internacional de Poesía de Quetzaltenango
        </span>
        <h1 className="font-display text-5xl sm:text-7xl uppercase tracking-wide font-extrabold text-ink">
          Manifiesto
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/50">
          Canto y resistencia colectiva
        </p>
      </header>

      {/* Proclamación Central */}
      <div className="my-12 text-center">
        <p className="font-display text-3xl sm:text-5xl md:text-6xl text-carmine uppercase leading-tight tracking-wide font-black text-balance">
          Frente al horror,
          <br />
          creemos, insistimos,
          <br />
          estamos de pie.
        </p>
      </div>

      {/* Bloques de Poema - Flujo Limpio y Espaciado en una Sola Columna */}
      <div className="space-y-12 text-ink/90 font-medium">
        {/* Estrofa 1 */}
        <div className="text-center py-4">
          <p className="font-display text-xl sm:text-3xl uppercase tracking-wide leading-snug text-ink font-bold text-balance">
            Quetzaltenango duerme a la par del volcán y sus montañas,
            <br />
            certeza que significa fuerza y origen.
          </p>
        </div>

        {/* Estrofa 2 */}
        <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-justify sm:text-center text-ink/80">
          La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
          injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político, por
          eso, continuamos irrenunciablemente en la solidaridad. Creemos que esta noche pronto
          cederá al milagro de la luz. La palabra es una de tantas puertas a la verdad.
        </p>

        {/* Fotografía 1 - Centrada e integrada de forma limpia */}
        <div className="my-10">
          <img
            src={imagenesSitio.crowdBw}
            alt="Lectura comunitaria en Quetzaltenango"
            className="w-full max-h-[420px] object-cover border border-ink shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Fotografía I · Encuentro y palabra compartida en el espacio público
          </span>
        </div>

        {/* Estrofa 3 */}
        <div className="border-y border-ink/10 py-8 my-10 text-center">
          <ul className="space-y-3 font-display text-lg sm:text-2xl uppercase tracking-wider font-extrabold text-carmine">
            <li>No podrán arrebatarnos los sueños</li>
            <li>No podrán arrebatarnos el abrazo</li>
            <li>Mucho menos, el milagro de la ternura</li>
          </ul>
        </div>

        {/* Estrofa 4 */}
        <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-justify sm:text-center text-ink/80">
          Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito eterno por
          esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos seres que están
          entre la transparencia del aire. Eso somos: fuego que ilumina y arde. A esto nos
          aferramos, esta es nuestra respuesta.
        </p>

        {/* Estrofa 5 (Verso Destacado) */}
        <div className="py-6 text-center">
          <p className="italic font-bold text-lg sm:text-xl text-ink tracking-wide">
            «La poesía es la más alta creación humana y por eso también le toca hablar de los actos
            más viles.»
          </p>
        </div>

        {/* Estrofa 6 */}
        <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-justify sm:text-center text-ink/80">
          Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y sin
          pretensiones con el que se convive cotidianamente. Está ahí, en los actos más honestos y
          sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la sobrevivencia.
        </p>

        {/* Módulo Ancestral Interactivo - Estilo Minimalista y Limpio */}
        <div className="border border-ink/20 p-6 sm:p-8 bg-cream my-12">
          <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed text-center mb-6 tracking-wide">
            Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron,
            dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos:
          </p>

          {/* Selector de Pilares */}
          <div className="flex justify-center gap-6 sm:gap-8 border-b border-ink/10 pb-4">
            {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActivePillar(key)}
                className={`pb-2 font-display text-sm sm:text-base uppercase tracking-widest transition-all duration-300 font-bold ${
                  activePillar === key
                    ? "text-carmine border-b-2 border-carmine"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {pilaresInfo[key].titulo}
              </button>
            ))}
          </div>

          {/* Contenido del Pilar */}
          <div className="mt-6 min-h-[90px] flex flex-col justify-center text-center animate-in fade-in duration-200">
            <p className="font-body text-sm sm:text-base leading-relaxed text-ink font-semibold tracking-wide">
              «{pilaresInfo[activePillar].descripcion}»
            </p>
          </div>
        </div>

        {/* Estrofa 7 */}
        <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-justify sm:text-center text-ink/80 pl-4 border-l border-ink/20">
          En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia, la
          renovación y la dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar la vida,
          a construir una nueva alegría, una nueva esperanza.
        </p>

        {/* Fotografía 2 - Centrada e integrada */}
        <div className="my-10">
          <img
            src={imagenesSitio.poetPortrait}
            alt="Lectura comunitaria e intercambio poético"
            className="w-full max-h-[420px] object-cover border border-ink shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Fotografía II · Registro del aliento y memoria colectiva
          </span>
        </div>
      </div>

      {/* SECCIÓN: EL FESTIVAL EN CONTEXTO - Diseño en Bloques Limpios y Minimalistas */}
      <div className="mt-20 pt-12 border-t border-ink/20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl uppercase font-bold text-ink">
            El festival en contexto
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-ink/70 tracking-wide font-medium">
            El Festival Internacional de Poesía de Quetzaltenango es una plataforma independiente y
            auto-gestionada de lecturas, talleres y diálogo intercultural que conecta a poetas,
            estudiantes y comunidades de Xelajuj No’j y del occidente guatemalteco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="p-6 border border-ink/20">
            <h3 className="font-display text-xl uppercase tracking-wider mb-2 font-bold text-carmine">
              Qué es
            </h3>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 font-medium">
              Un festival nacido de la iniciativa de jóvenes poetas que convirtió la lectura pública
              en plazas y comunidades en una práctica viva y patrimonio de la ciudad.
            </p>
          </section>
          <section className="p-6 border border-ink/20 bg-ink/5">
            <h3 className="font-display text-xl uppercase tracking-wider mb-2 font-bold text-ink">
              Dónde ocurre
            </h3>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 font-medium">
              La palabra viaja por escuelas rurales, universidades, parques, teatros y espacios
              autogestionados de Quetzaltenango, Totonicapán, San Marcos y el occidente.
            </p>
          </section>
          <section className="p-6 border border-ink/20">
            <h3 className="font-display text-xl uppercase tracking-wider mb-2 font-bold text-carmine">
              Memoria
            </h3>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 font-medium">
              Documentamos lecturas, editamos fanzines artesanales y organizamos talleres libres de
              escritura creativa para preservar la voz colectiva de nuestro territorio.
            </p>
          </section>
        </div>
      </div>

      <footer className="mt-16 text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink/40 border-t border-ink/10 pt-8">
        La poesía es el aliento de la tierra y la palabra colectiva · Metáfora
      </footer>
    </article>
  );
}
