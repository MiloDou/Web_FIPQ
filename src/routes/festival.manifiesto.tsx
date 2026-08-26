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
          "Manifiesto y propósito fundacional del Festival Internacional de Poesía de Quetzaltenango.",
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
    <article className="max-w-3xl mx-auto px-6 py-12 bg-cream text-ink">
      {/* Cabecera Tipo Catálogo de Arte */}
      <header className="mb-16 text-center">
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
      <div className="my-16 text-center">
        <p className="font-display text-4xl sm:text-6xl md:text-7xl text-carmine uppercase leading-tight tracking-wide font-black text-balance animate-in fade-in duration-700">
          Frente al horror,
          <br />
          creemos, insistimos,
          <br />
          estamos de pie.
        </p>
      </div>

      {/* Primer Bloque de Poema (El principio que le gusta al usuario) */}
      <div className="text-center my-12">
        <p className="font-display text-xl sm:text-3xl uppercase tracking-wide leading-snug text-ink font-bold text-balance">
          Quetzaltenango duerme a la par del volcán y sus montañas,
          <br />
          certeza que significa fuerza y origen.
        </p>
      </div>

      {/* SECCIÓN REFACTORIZADA DESDE AQUÍ: Sin recuadros, sin estructurado artificial, puro flujo visual */}
      <div className="space-y-16">
        {/* Estrofa 2 (Prose Poética) */}
        <p className="font-body text-lg sm:text-xl leading-relaxed tracking-wide text-center text-ink/80 max-w-2xl mx-auto">
          La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
          injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político, por
          eso, continuamos irrenunciablemente en la solidaridad. Creemos que esta noche pronto
          cederá al milagro de la luz. La palabra es una de tantas puertas a la verdad.
        </p>

        {/* Fotografía 1: Imagen pura integrada como respiro visual */}
        <div className="py-4">
          <img
            src={imagenesSitio.crowdBw}
            alt="Lectura comunitaria"
            className="w-full object-cover grayscale"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Encuentro y palabra compartida en el espacio público
          </span>
        </div>

        {/* Declaración de los Tres Versos Libres */}
        <div className="text-center py-6">
          <ul className="space-y-4 font-display text-xl sm:text-3xl uppercase tracking-wider font-black text-carmine">
            <li>No podrán arrebatarnos los sueños</li>
            <li>No podrán arrebatarnos el abrazo</li>
            <li>Mucho menos, el milagro de la ternura</li>
          </ul>
        </div>

        {/* Estrofa 4 */}
        <p className="font-body text-lg sm:text-xl leading-relaxed tracking-wide text-center text-ink/80 max-w-2xl mx-auto">
          Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito eterno por
          esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos seres que están
          entre la transparencia del aire. Eso somos: fuego que ilumina y arde. A esto nos
          aferramos, esta es nuestra respuesta.
        </p>

        {/* Cita en cursiva grande */}
        <p className="font-body text-xl sm:text-2xl italic font-semibold text-center text-ink leading-snug max-w-2xl mx-auto py-4">
          «La poesía es la más alta creación humana y por eso también le toca hablar de los actos
          más viles.»
        </p>

        {/* Estrofa 6 */}
        <p className="font-body text-lg sm:text-xl leading-relaxed tracking-wide text-center text-ink/80 max-w-2xl mx-auto">
          Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y sin
          pretensiones con el que se convive cotidianamente. Está ahí, en los actos más honestos y
          sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la sobrevivencia.
        </p>

        {/* Módulo Ancestral Minimalista (Sin recuadros, solo tipografía y cambio fluido) */}
        <div className="py-8 max-w-2xl mx-auto">
          <p className="font-body text-sm text-ink/60 leading-relaxed text-center mb-8 tracking-wide">
            Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron,
            dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos:
          </p>

          {/* Selector de Pilares */}
          <div className="flex justify-center gap-8 sm:gap-12 border-b border-ink/10 pb-4">
            {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActivePillar(key)}
                className={`pb-2 font-display text-sm sm:text-lg uppercase tracking-widest transition-all duration-300 font-extrabold ${
                  activePillar === key
                    ? "text-carmine border-b border-carmine"
                    : "text-ink/40 hover:text-ink"
                }`}
              >
                {pilaresInfo[key].titulo}
              </button>
            ))}
          </div>

          {/* Contenido del Pilar */}
          <div className="mt-8 min-h-[90px] flex flex-col justify-center text-center animate-in fade-in duration-200">
            <p className="font-body text-base sm:text-lg leading-relaxed text-ink font-semibold tracking-wide">
              «{pilaresInfo[activePillar].descripcion}»
            </p>
          </div>
        </div>

        {/* Estrofa 7 */}
        <p className="font-body text-lg sm:text-xl leading-relaxed tracking-wide text-center text-ink/80 max-w-2xl mx-auto">
          En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia, la
          renovación y la dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar la vida,
          a construir una nueva alegría, una nueva esperanza.
        </p>

        {/* Fotografía 2: Segunda imagen pura */}
        <div className="py-4">
          <img
            src={imagenesSitio.poetPortrait}
            alt="Registro de memoria"
            className="w-full object-cover grayscale"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Registro del aliento y memoria colectiva
          </span>
        </div>
      </div>

      {/* EL FESTIVAL EN CONTEXTO - Diseño tipográfico puro, sin cajas ni bordes de celdas */}
      <div className="mt-24 pt-16 border-t border-ink/20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-6xl uppercase font-bold text-ink">
            El festival en contexto
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-ink/70 tracking-wide font-medium">
            El Festival Internacional de Poesía de Quetzaltenango es una plataforma independiente y
            auto-gestionada de lecturas, talleres y diálogo intercultural que conecta a poetas,
            estudiantes y comunidades de Xelajuj No’j y del occidente guatemalteco.
          </p>
        </div>

        {/* Grilla tipográfica pura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <section className="space-y-2">
            <h3 className="font-display text-2xl uppercase tracking-wider font-extrabold text-carmine">
              Qué es
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/80 font-medium">
              Un encuentro cultural nacido de la iniciativa de jóvenes poetas que convirtió la
              lectura pública en las plazas y la convivencia en una práctica viva de ciudad y
              patrimonio.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="font-display text-2xl uppercase tracking-wider font-extrabold text-ink">
              Dónde ocurre
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/80 font-medium">
              La palabra viaja por escuelas rurales, universidades de occidente, parques, teatros y
              espacios autogestionados de Quetzaltenango y departamentos vecinos.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="font-display text-2xl uppercase tracking-wider font-extrabold text-carmine">
              Memoria
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/80 font-medium">
              Documentamos lecturas comunitarias, editamos fanzines artesanales y organizamos
              talleres libres de escritura creativa para preservar las diversas voces de nuestra
              geografía.
            </p>
          </section>
        </div>
      </div>

      <footer className="mt-20 text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink/40 border-t border-ink/10 pt-8">
        La poesía es el aliento de la tierra y la palabra colectiva · Metáfora
      </footer>
    </article>
  );
}
