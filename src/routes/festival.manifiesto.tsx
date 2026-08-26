import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto y Propósito — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Manifiesto y contexto fundacional del Festival Internacional de Poesía de Quetzaltenango: poesía en acción, comunidad y resistencia territorial.",
      },
    ],
  }),
  component: PaginaManifiesto,
});

const pilaresInfo = {
  raiz: {
    titulo: "Raíz Profunda",
    descripcion:
      "Nos aferramos a la memoria de nuestras primeras abuelas y abuelos. Invocamos su lenguaje sobre piedras para guiar la resistencia y la creación de hoy.",
  },
  origen: {
    titulo: "Origen",
    descripcion:
      "Quetzaltenango duerme a la par del volcán y sus montañas, certeza telúrica que define nuestra fuerza, resistencia y renovación constante.",
  },
  lenguaje: {
    titulo: "Lenguaje",
    descripcion:
      "La palabra es una de tantas puertas a la verdad. La poesía es la más alta creación humana y por eso le toca hablar de la belleza y de los actos más viles.",
  },
};

function PaginaManifiesto() {
  const [activePillar, setActivePillar] = useState<keyof typeof pilaresInfo>("raiz");
  const [hoveredStanza, setHoveredStanza] = useState<number | null>(null);

  return (
    <article className="max-w-7xl mx-auto px-2 sm:px-4">
      {/* Cabecera del Portal */}
      <header className="mb-12 border-b-2 border-ink pb-6">
        <span className="block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-2">
          Principios & Propósito Fundacional
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-wide font-bold text-ink">
          Manifiesto del Festival
        </h1>
      </header>

      {/* Grid de UI Unificado */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* COLUMNA IZQUIERDA: Proclamación Poética del Manifiesto (7 columnas) */}
        <section className="lg:col-span-7 space-y-6">
          {/* Declaración Hero */}
          <div className="border-l-4 border-carmine pl-6 my-6">
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[1.05] tracking-wide font-extrabold text-carmine text-balance">
              Frente al horror,
              <br />
              creemos, insistimos,
              <br />
              estamos de pie.
            </h2>
          </div>

          {/* Bloques de Estrofas con Interacción */}
          <div className="space-y-4 text-ink/90 font-medium">
            <div
              onMouseEnter={() => setHoveredStanza(0)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-4 border-l-2 transition-all duration-300 ${
                hoveredStanza === 0
                  ? "border-carmine bg-carmine/5 pl-6 shadow-xs"
                  : "border-ink/10 pl-4"
              } cursor-pointer rounded-r-sm`}
            >
              <p className="font-display text-lg sm:text-xl uppercase tracking-wide leading-snug text-ink font-bold text-balance">
                Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa
                fuerza y origen.
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredStanza(1)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-4 border-l-2 transition-all duration-300 ${
                hoveredStanza === 1
                  ? "border-carmine bg-carmine/5 pl-6 shadow-xs"
                  : "border-ink/10 pl-4"
              } cursor-pointer rounded-r-sm`}
            >
              <p className="font-body text-sm sm:text-base leading-relaxed tracking-wide">
                La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
                injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto
                político, por eso, continuamos irrenunciablemente en la solidaridad. Creemos que
                esta noche pronto cederá al milagro de la luz. La palabra es una de tantas puertas a
                la verdad.
              </p>
            </div>

            {/* Caja de resistencia textual */}
            <div className="bg-ink text-cream p-6 border-2 border-ink shadow-[4px_4px_0_0_rgba(177,42,59,0.9)] my-6">
              <ul className="space-y-3 font-display text-lg sm:text-xl uppercase tracking-wider font-bold">
                <li className="flex items-center gap-2">
                  <span className="text-carmine">▪</span> No podrán arrebatarnos los sueños
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-carmine">▪</span> No podrán arrebatarnos el abrazo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-carmine">▪</span> Mucho menos, el milagro de la ternura
                </li>
              </ul>
            </div>

            <div
              onMouseEnter={() => setHoveredStanza(2)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-4 border-l-2 transition-all duration-300 ${
                hoveredStanza === 2
                  ? "border-carmine bg-carmine/5 pl-6 shadow-xs"
                  : "border-ink/10 pl-4"
              } cursor-pointer rounded-r-sm`}
            >
              <p className="font-body text-sm sm:text-base leading-relaxed tracking-wide">
                Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito
                eterno por esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos
                seres que están entre la transparencia del aire. Eso somos:{" "}
                <strong>fuego que ilumina y arde</strong>. A esto nos aferramos, esta es nuestra
                respuesta.
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredStanza(3)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-4 border-l-2 transition-all duration-300 ${
                hoveredStanza === 3
                  ? "border-carmine bg-carmine/5 pl-6 shadow-xs"
                  : "border-ink/10 pl-4"
              } cursor-pointer rounded-r-sm`}
            >
              <p className="italic font-semibold text-ink/90 border-l-4 border-ink/20 pl-4 py-1 tracking-wide">
                La poesía es la más alta creación humana y por eso también le toca hablar de los
                actos más viles.
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredStanza(4)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-4 border-l-2 transition-all duration-300 ${
                hoveredStanza === 4
                  ? "border-carmine bg-carmine/5 pl-6 shadow-xs"
                  : "border-ink/10 pl-4"
              } cursor-pointer rounded-r-sm`}
            >
              <p className="font-body text-sm sm:text-base leading-relaxed tracking-wide">
                Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y
                sin pretensiones con el que se convive cotidianamente. Está ahí, en los actos más
                honestos y sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por
                la sobrevivencia.
              </p>
            </div>
          </div>

          {/* Invocación e Interacción Trilogía */}
          <div className="border-2 border-ink p-5 bg-cream shadow-[4px_4px_0_0_#1a1a1a] mt-8">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-carmine font-bold mb-3 text-center">
              Pilares Ancestrales · Haz clic para explorar
            </span>
            <div className="grid grid-cols-3 gap-2 border-b border-ink/10 pb-3">
              {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePillar(key)}
                  className={`py-2 px-1 font-display text-xs sm:text-sm uppercase tracking-widest border transition-all duration-300 font-bold ${
                    activePillar === key
                      ? "bg-carmine text-cream border-carmine"
                      : "bg-cream text-ink border-ink/20 hover:border-ink hover:bg-ink/5"
                  }`}
                >
                  {pilaresInfo[key].titulo}
                </button>
              ))}
            </div>
            <div className="mt-4 min-h-[90px] flex flex-col justify-center animate-in fade-in duration-200">
              <p className="font-body text-sm sm:text-base leading-relaxed text-ink font-semibold tracking-wide">
                «{pilaresInfo[activePillar].descripcion}»
              </p>
            </div>
          </div>

          <p className="font-body text-xs sm:text-sm leading-relaxed tracking-wide pl-4 border-l-2 border-ink/15 text-ink/75 italic mt-6">
            En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia,
            la renovación y la dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar la
            vida, a construir una nueva alegría, una nueva esperanza.
          </p>
        </section>

        {/* COLUMNA DERECHA: El Festival en Contexto + Fotos (UI Dashboard - 5 columnas) */}
        <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          {/* Bloque de Información Unificado */}
          <div className="bg-cream border-2 border-ink p-6 shadow-[6px_6px_0_0_#1a1a1a]">
            <h3 className="font-display text-2xl uppercase tracking-wide mb-3 font-bold text-ink">
              El festival <span className="text-carmine italic">en contexto</span>
            </h3>
            <p className="font-body text-sm leading-relaxed text-ink/80 tracking-wide font-medium">
              El Festival Internacional de Poesía de Quetzaltenango es una plataforma comunitaria,
              independiente y auto-gestionada de lecturas, talleres y diálogo intercultural. Conecta
              a poetas, estudiantes y comunidades de Xelajuj No’j y del occidente guatemalteco.
            </p>
            <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink/50">
              <span>Producido por Metáfora</span>
              <span>@MetaforaFIPQ</span>
            </div>
          </div>

          {/* Ficha 1: Qué es */}
          <div className="p-6 bg-ink text-cream border-2 border-ink shadow-[4px_4px_0_0_rgba(177,42,59,0.95)]">
            <h4 className="font-display text-xl uppercase tracking-wider mb-2 font-bold text-mustard">
              Qué es
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-cream/90 font-medium">
              Un festival nacido de la iniciativa de jóvenes poetas que convirtió la lectura pública
              y la convivencia intercultural en una práctica viva y patrimonio cultural de la
              ciudad.
            </p>
          </div>

          {/* Ficha 2: Dónde ocurre */}
          <div className="p-6 bg-carmine text-cream border-2 border-ink shadow-[4px_4px_0_0_#1a1a1a]">
            <h4 className="font-display text-xl uppercase tracking-wider mb-2 font-bold">
              Dónde ocurre
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-cream/95 font-medium">
              La poesía circula por colegios, universidades, parques, teatros y espacios
              comunitarios de Quetzaltenango, Totonicapán, San Marcos y el occidente del país.
            </p>
          </div>

          {/* Ficha 3: Memoria */}
          <div className="p-6 bg-cream text-ink border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h4 className="font-display text-xl uppercase tracking-wider mb-2 font-bold">
              Memoria
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 font-medium">
              Articulamos publicaciones de tirajes limitados, talleres de escritura creativa y
              colaboraciones que preservan de forma tangible la voz de los pueblos de este
              territorio.
            </p>
          </div>

          {/* Grilla de Fotografías del Portafolio Integradas al UI */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="relative group">
              <div className="absolute -top-2 left-4 h-4 w-12 bg-carmine/75 mix-blend-multiply z-10 rotate-[-3deg]" />
              <img
                src={imagenesSitio.crowdBw}
                alt="Lecturas y comunidad"
                className="w-full aspect-square object-cover border-2 border-ink shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="block text-center font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-1">
                Lecturas públicas
              </span>
            </div>

            <div className="relative group">
              <div className="absolute -top-2 right-4 h-4 w-12 bg-ink/40 mix-blend-multiply z-10 rotate-[4deg]" />
              <img
                src={imagenesSitio.poetPortrait}
                alt="Encuentro poético"
                className="w-full aspect-square object-cover border-2 border-ink shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="block text-center font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-1">
                Comunidad y taller
              </span>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
