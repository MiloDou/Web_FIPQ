import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      {
        title:
          "Manifiesto y Propósito Colectivo — Festival Internacional de Poesía de Quetzaltenango",
      },
      {
        name: "description",
        content:
          "El manifiesto poético y los principios del Festival Internacional de Poesía de Quetzaltenango. Un canto colectivo a la memoria, la tierra y la resistencia.",
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
    <article className="max-w-4xl mx-auto px-6 py-16 bg-cream text-ink">
      {/* Cabecera Tipo Catálogo de Arte */}
      <header className="mb-20 text-center animate-fade-in-up">
        <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-4">
          Festival Internacional de Poesía de Quetzaltenango
        </span>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight font-black text-ink leading-none">
          Manifiesto
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/40">
          Principios de arte, memoria y territorio
        </p>
      </header>

      {/* Proclamación Central (Gran Declaración de Apertura) */}
      <div className="my-20 text-center animate-fade-in-up animation-delay-100">
        <p className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-carmine uppercase leading-none tracking-wide font-black text-balance">
          Frente al horror,
          <br />
          creemos, insistimos,
          <br />
          estamos de pie.
        </p>
      </div>

      {/* FLUJO POÉTICO EN TRES MOVIMIENTOS (Estructurado con sentido, claridad y elegancia visual) */}
      <div className="space-y-24 mt-24">
        {/* MOVIMIENTO I: Del Territorio y el Fuego */}
        <section className="animate-fade-in-up animation-delay-200">
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-8 pb-4 border-b border-ink/10">
            <span className="font-display text-3xl sm:text-4xl text-carmine font-black">I.</span>
            <h2 className="font-display text-xl sm:text-2xl uppercase tracking-widest font-extrabold text-ink">
              Del Territorio y la Fuerza Telúrica
            </h2>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto text-center md:text-left">
            <p className="font-display text-2xl sm:text-3xl uppercase tracking-wide leading-snug text-ink font-bold text-balance">
              Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa fuerza
              y origen.
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-ink/80">
              Somos seres que están entre la transparencia del aire. Eso somos: fuego que ilumina y
              arde. A esto nos aferramos, esta es nuestra respuesta ante el silencio y la
              desesperanza.
            </p>
          </div>
        </section>

        {/* Fotografía I: Respiro Visual Integrado */}
        <div className="py-4 animate-fade-in-up animation-delay-300">
          <img
            src={imagenesSitio.crowdBw}
            alt="Lectura colectiva en el espacio público"
            className="w-full h-auto max-h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Fotografía I · Encuentro y palabra compartida en Xelajuj No'j
          </span>
        </div>

        {/* MOVIMIENTO II: De la Palabra y la Verdad */}
        <section className="animate-fade-in-up animation-delay-400">
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-8 pb-4 border-b border-ink/10">
            <span className="font-display text-3xl sm:text-4xl text-carmine font-black">II.</span>
            <h2 className="font-display text-xl sm:text-2xl uppercase tracking-widest font-extrabold text-ink">
              De la Palabra y la Verdad
            </h2>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto text-center md:text-left">
            <p className="italic font-bold text-xl sm:text-2xl text-ink leading-relaxed">
              «La poesía es la más alta creación humana y por eso también le toca hablar de los
              actos más viles.»
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-ink/80">
              La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
              injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político,
              por eso, continuamos irrenunciablemente en la solidaridad. Creemos que esta noche
              pronto cederá al milagro de la luz. La palabra es una de tantas puertas a la verdad.
            </p>
          </div>
        </section>

        {/* Declaración Central de los Tres Versos Libres (Ritmo e Impacto) */}
        <div className="py-12 border-y border-ink/15 text-center animate-fade-in-up">
          <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-carmine font-bold mb-4">
            Nuestras Convicciones
          </span>
          <ul className="space-y-4 font-display text-2xl sm:text-4xl uppercase tracking-widest font-black text-carmine">
            <li className="hover:scale-102 hover:text-ink transition-all duration-300">
              No podrán arrebatarnos los sueños
            </li>
            <li className="hover:scale-102 hover:text-ink transition-all duration-300">
              No podrán arrebatarnos el abrazo
            </li>
            <li className="hover:scale-102 hover:text-ink transition-all duration-300">
              Mucho menos, el milagro de la ternura
            </li>
          </ul>
        </div>

        {/* MOVIMIENTO III: De la Memoria Colectiva */}
        <section className="animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-8 pb-4 border-b border-ink/10">
            <span className="font-display text-3xl sm:text-4xl text-carmine font-black">III.</span>
            <h2 className="font-display text-xl sm:text-2xl uppercase tracking-widest font-extrabold text-ink">
              De la Memoria y la Cotidianidad
            </h2>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto text-center md:text-left">
            <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-ink/80">
              Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y
              sin pretensiones con el que se convive cotidianamente. Está ahí, en los actos más
              honestos y sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la
              sobrevivencia y la dignidad.
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-ink/80 pl-4 border-l border-ink/20">
              En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia,
              la renovación y la dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar
              la vida, a construir una nueva alegría, una nueva esperanza.
            </p>
          </div>
        </section>

        {/* Fotografía II: Segunda Imagen Integrada */}
        <div className="py-4 animate-fade-in-up">
          <img
            src={imagenesSitio.poetPortrait}
            alt="Memoria poética"
            className="w-full h-auto max-h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          />
          <span className="block text-center font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-3">
            Fotografía II · Registro de memoria y creación en la naturaleza
          </span>
        </div>

        {/* SECCIÓN INTERACTIVA DE INVOCACIÓN ANCESTRAL (Rediseñada sin marcos pesados, interactividad pura y ligera) */}
        <div className="py-12 max-w-2xl mx-auto border-t border-dashed border-ink/20 animate-fade-in-up">
          <p className="font-body text-sm text-ink/60 leading-relaxed text-center mb-8 tracking-wide">
            Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron,
            dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos en tres
            principios vitales:
          </p>

          {/* Selector de Pilares (Texto puro con transiciones fluidas de color) */}
          <div className="flex justify-center gap-8 sm:gap-16 border-b border-ink/10 pb-4">
            {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActivePillar(key)}
                className={`pb-2 font-display text-sm sm:text-lg uppercase tracking-widest transition-all duration-300 font-extrabold cursor-pointer ${
                  activePillar === key
                    ? "text-carmine border-b-2 border-carmine translate-y-[-1px]"
                    : "text-ink/40 hover:text-ink/80"
                }`}
              >
                {pilaresInfo[key].titulo}
              </button>
            ))}
          </div>

          {/* Contenido del Pilar (Animado con Fade-in CSS instantáneo) */}
          <div className="mt-8 min-h-[100px] flex flex-col justify-center text-center">
            <p className="font-body text-base sm:text-lg leading-relaxed text-ink/90 font-semibold tracking-wide animate-fade-in-up">
              «{pilaresInfo[activePillar].descripcion}»
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN: EL FESTIVAL EN CONTEXTO (Diseño Tipográfico Abierto y Espaciado) */}
      <div className="mt-32 pt-16 border-t border-ink/20 animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-6xl uppercase font-black text-ink">
            El festival en contexto
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-ink/70 tracking-wide font-medium">
            El Festival Internacional de Poesía de Quetzaltenango es una plataforma independiente y
            auto-gestionada de lecturas, talleres y diálogo intercultural que conecta a poetas,
            estudiantes y comunidades de Xelajuj No’j y del occidente guatemalteco.
          </p>
        </div>

        {/* Grilla tipográfica pura en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <section className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-extrabold text-carmine">
              Qué es
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/75 font-medium">
              Un encuentro cultural nacido de la iniciativa de jóvenes poetas que convirtió la
              lectura pública en las plazas y la convivencia en una práctica viva de ciudad y
              patrimonio.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-extrabold text-ink">
              Dónde ocurre
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/75 font-medium">
              La palabra viaja por escuelas rurales, universidades de occidente, parques, teatros y
              espacios autogestionados de Quetzaltenango, San Marcos y Totonicapán.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-extrabold text-carmine">
              Memoria Activa
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/75 font-medium">
              Documentamos lecturas comunitarias, editamos fanzines artesanales y organizamos
              talleres libres de escritura creativa para preservar las diversas voces de nuestra
              geografía.
            </p>
          </section>
        </div>
      </div>

      <footer className="mt-24 text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink/40 border-t border-ink/10 pt-8">
        La poesía es el aliento de la tierra y la palabra colectiva · Metáfora
      </footer>
    </article>
  );
}
