import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto Interactivo — 19 Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Explora el manifiesto oficial del 19 Festival Internacional de Poesía de Quetzaltenango. Un espacio interactivo de resistencia, memoria y poesía.",
      },
    ],
  }),
  component: PaginaManifiesto,
});

const pilaresInfo = {
  raiz: {
    titulo: "Raíz Profunda",
    descripcion:
      "Nos aferramos a la memoria de nuestras primeras abuelas y nuestros primeros abuelos. Invocamos su lenguaje tallado en la piedra eterna de Xelajuj No’j para guiar la creación de hoy.",
    detalles: "Conexión ancestral y cimientos del encuentro poético.",
  },
  origen: {
    titulo: "Origen",
    descripcion:
      "Quetzaltenango duerme a la par del volcán y sus montañas, una certeza física y espiritual que nos dota de la fuerza telúrica necesaria para resistir y renovarnos.",
    detalles: "El territorio como cuerpo geográfico y memoria viva.",
  },
  lenguaje: {
    titulo: "Lenguaje",
    descripcion:
      "La palabra es una de tantas puertas a la verdad, al abrazo y al milagro de la ternura. La poesía habla de la belleza, pero también tiene el deber ético de denunciar el horror.",
    detalles: "El poema como herramienta cotidiana de dignificación.",
  },
};

function PaginaManifiesto() {
  const [activePillar, setActivePillar] = useState<keyof typeof pilaresInfo>("raiz");
  const [hoveredStanza, setHoveredStanza] = useState<number | null>(null);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-0">
      {/* Encabezado */}
      <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-4">
        19 Festival Internacional de Poesía de Quetzaltenango
      </span>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-[0.05em] mb-8 font-bold text-ink">
        Manifiesto
      </h1>

      {/* Proclamación Principal en Estilo Afiche */}
      <div className="border-l-8 border-carmine pl-6 my-10 sm:my-12">
        <p className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-carmine uppercase leading-[1.05] tracking-[0.05em] font-extrabold text-balance">
          Frente al horror,
          <br />
          creemos, insistimos,
          <br />
          estamos de pie.
        </p>
      </div>

      {/* Bloque Principal del Manifiesto con Grilla de Contenido e Imagen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
        {/* Columna de Texto del Manifiesto */}
        <div className="lg:col-span-8 space-y-6 text-ink/90">
          <div
            onMouseEnter={() => setHoveredStanza(0)}
            onMouseLeave={() => setHoveredStanza(null)}
            className={`p-5 border-l-2 transition-all duration-300 ${
              hoveredStanza === 0
                ? "border-carmine bg-carmine/5 pl-7 shadow-xs"
                : "border-ink/10 pl-5"
            } cursor-pointer rounded-r-md`}
          >
            <p className="text-lg sm:text-xl font-display uppercase tracking-[0.03em] leading-snug text-ink font-bold text-balance">
              Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa fuerza
              y origen.
            </p>
          </div>

          <div
            onMouseEnter={() => setHoveredStanza(1)}
            onMouseLeave={() => setHoveredStanza(null)}
            className={`p-5 border-l-2 transition-all duration-300 ${
              hoveredStanza === 1
                ? "border-carmine bg-carmine/5 pl-7 shadow-xs"
                : "border-ink/10 pl-5"
            } cursor-pointer rounded-r-md`}
          >
            <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium">
              La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
              injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político,
              por eso, continuamos irrenunciablemente en la solidaridad. Creemos que esta noche
              pronto cederá al milagro de la luz. La palabra es una de tantas puertas a la verdad.
            </p>
          </div>
        </div>

        {/* Columna de Fotografía 1 - Estilo Zine */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative group w-full max-w-[260px] md:max-w-[280px]">
            {/* Cinta adhesiva decorativa */}
            <div className="absolute -top-3 left-12 h-6 w-20 bg-carmine/75 mix-blend-multiply z-10 rotate-[-4deg]" />
            <img
              src={imagenesSitio.crowdBw}
              alt="Comunidad y resistencia en Quetzaltenango"
              className="w-full aspect-[4/5] object-cover border-2 border-ink shadow-[6px_6px_0_0_rgba(26,26,26,0.9)] grayscale group-hover:grayscale-0 group-hover:rotate-1 transition-all duration-500 rotate-[-2deg]"
            />
            <span className="block text-center font-mono text-[9px] uppercase tracking-widest text-ink/60 mt-3">
              Foto 01 · Encuentro y comunidad
            </span>
          </div>
        </div>
      </div>

      {/* Bloque Destacado de Resistencia */}
      <div className="bg-ink text-cream p-8 my-12 border-2 border-ink shadow-[8px_8px_0_0_rgba(177,42,59,0.9)] rounded-none">
        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-mustard font-bold mb-4">
          Nuestra Declaración
        </span>
        <ul className="space-y-4 font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.06em] font-bold">
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
            <span className="text-carmine text-2xl">▪</span> No podrán arrebatarnos los sueños
          </li>
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
            <span className="text-carmine text-2xl">▪</span> No podrán arrebatarnos el abrazo
          </li>
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
            <span className="text-carmine text-2xl">▪</span> Mucho menos, el milagro de la ternura
          </li>
        </ul>
      </div>

      {/* Bloque de Texto Secundario Interactivo */}
      <div className="space-y-6 text-ink/90 my-12">
        <div
          onMouseEnter={() => setHoveredStanza(2)}
          onMouseLeave={() => setHoveredStanza(null)}
          className={`p-5 border-l-2 transition-all duration-300 ${
            hoveredStanza === 2 ? "border-carmine bg-carmine/5 pl-7" : "border-ink/10 pl-5"
          } cursor-pointer rounded-r-md`}
        >
          <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium">
            Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito eterno
            por esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos seres que
            están entre la transparencia del aire. Eso somos:{" "}
            <strong>fuego que ilumina y arde</strong>. A esto nos aferramos, esta es nuestra
            respuesta.
          </p>
        </div>

        <div
          onMouseEnter={() => setHoveredStanza(3)}
          onMouseLeave={() => setHoveredStanza(null)}
          className={`p-5 border-l-2 transition-all duration-300 ${
            hoveredStanza === 3 ? "border-carmine bg-carmine/5 pl-7" : "border-ink/10 pl-5"
          } cursor-pointer rounded-r-md`}
        >
          <p className="border-l-4 border-ink/30 pl-4 py-1 italic font-semibold text-ink/90 tracking-[0.03em]">
            La poesía es la más alta creación humana y por eso también le toca hablar de los actos
            más viles.
          </p>
        </div>

        <div
          onMouseEnter={() => setHoveredStanza(4)}
          onMouseLeave={() => setHoveredStanza(null)}
          className={`p-5 border-l-2 transition-all duration-300 ${
            hoveredStanza === 4 ? "border-carmine bg-carmine/5 pl-7" : "border-ink/10 pl-5"
          } cursor-pointer rounded-r-md`}
        >
          <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium">
            Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y sin
            pretensiones con el que se convive cotidianamente. Está ahí, en los actos más honestos y
            sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la
            sobrevivencia.
          </p>
        </div>
      </div>

      {/* Trilogía Ancestral Interactiva */}
      <div className="my-14 border-2 border-ink bg-cream shadow-[4px_4px_0_0_#1a1a1a] p-6 sm:p-8">
        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-carmine font-bold mb-4 text-center">
          Invocación Ancestral · Haz clic para explorar
        </span>

        {/* Pestañas de la Trilogía */}
        <div className="grid grid-cols-3 gap-2 border-b border-ink/10 pb-4">
          {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePillar(key)}
              className={`py-3 px-1 sm:px-4 font-display text-sm sm:text-lg md:text-xl uppercase tracking-widest border transition-all duration-300 font-bold ${
                activePillar === key
                  ? "bg-carmine text-cream border-carmine shadow-xs"
                  : "bg-cream text-ink border-ink/20 hover:border-ink hover:bg-ink/5"
              }`}
            >
              {pilaresInfo[key].titulo}
            </button>
          ))}
        </div>

        {/* Contenido Dinámico de la Trilogía */}
        <div className="mt-6 min-h-[140px] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="font-body text-base sm:text-lg leading-relaxed text-ink font-semibold tracking-[0.03em]">
            «{pilaresInfo[activePillar].descripcion}»
          </p>
          <div className="mt-4 pt-4 border-t border-ink/10 flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-widest text-ink/60">
            <span>
              Pilar {activePillar === "raiz" ? "01" : activePillar === "origen" ? "02" : "03"}
            </span>
            <span>{pilaresInfo[activePillar].detalles}</span>
          </div>
        </div>
      </div>

      {/* Cierre del Poema */}
      <div className="space-y-6 text-ink/90 my-10">
        <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium pl-5 border-l-2 border-ink/10">
          En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia y la
          renovación. La dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar la vida,
          a construir una nueva alegría, una nueva esperanza.
        </p>
      </div>

      {/* Dedicatoria y Bloque Explicativo del Simón Pedroza */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16 bg-carmine text-cream p-8 sm:p-10 border-2 border-ink shadow-[8px_8px_0_0_#1a1a1a] rounded-none">
        {/* Columna Texto Dedicatoria */}
        <div className="lg:col-span-8">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-mustard font-bold block mb-3">
            Homenaje & Propósito · 19ª Edición
          </span>
          <p className="font-body text-base sm:text-lg leading-relaxed font-bold tracking-[0.02em] text-balance">
            El 19 Festival Internacional de Poesía de Quetzaltenango es un acto comunitario en el
            que se rinde un homenaje a la vida y obra del poeta <strong>Simón Pedroza</strong> y
            también un llamado a la fraternidad, el encuentro, la justicia y la libre expresión de
            los pueblos que habitamos en estos territorios.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cream/20 font-mono text-[9px] sm:text-xs uppercase tracking-widest text-cream/80">
            <span>Producido por Metáfora</span>
            <span>@MetaforaFIPQ · fipq_metafora</span>
          </div>
        </div>

        {/* Columna de Fotografía 2 - Simón Pedroza / Taller */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-[200px]">
            {/* Cinta adhesiva decorativa */}
            <div className="absolute -top-3 right-6 h-6 w-16 bg-cream/35 mix-blend-overlay z-10 rotate-[5deg]" />
            <img
              src={imagenesSitio.poetPortrait}
              alt="Homenaje a Simón Pedroza"
              className="w-full aspect-square object-cover border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.95)] grayscale group-hover:grayscale-0 group-hover:rotate-[-1deg] transition-all duration-500 rotate-[2deg] bg-cream"
            />
            <span className="block text-center font-mono text-[9px] uppercase tracking-widest text-cream/70 mt-2">
              Foto 02 · Retrato del Homenaje
            </span>
          </div>
        </div>
      </div>

      {/* Sello de Autenticidad */}
      <div className="mt-16 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-ink/60">
        <div className="w-24 h-24 border-2 border-carmine rounded-full flex items-center justify-center -rotate-12 shrink-0 p-2">
          <span className="text-carmine text-center leading-tight font-bold text-[9px]">
            FIPQ 19
            <br />
            SIMÓN
            <br />
            PEDROZA
          </span>
        </div>
        <p>
          Declaración y principios fundacionales del 19 Festival Internacional de Poesía de
          Quetzaltenango.
        </p>
      </div>

      {/* Sección en Contexto - Unificada abajo */}
      <div className="mt-20 pt-16 border-t-2 border-ink">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase mb-8 font-bold">
          El festival <span className="text-carmine italic">en contexto.</span>
        </h2>
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-ink/85 font-medium mb-10 tracking-[0.02em]">
          El Festival Internacional de Poesía de Quetzaltenango es una plataforma de lecturas,
          talleres y diálogo intercultural que conecta a poetas, estudiantes, instituciones y
          comunidades de Xelajuj No’j y del occidente guatemalteco.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="bg-ink text-cream p-8 shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-mustard font-bold">
              Qué es
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 font-medium">
              Un festival nacido de jóvenes poetas que convirtió la lectura pública y la convivencia
              intercultural en una práctica sostenida de ciudad.
            </p>
          </section>
          <section className="bg-carmine text-cream p-8 shadow-[4px_4px_0_0_rgba(177,42,59,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">
              Dónde ocurre
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 font-medium">
              La poesía circula por colegios, universidades, parques, teatros y otros espacios de
              Quetzaltenango y departamentos vecinos. Las sedes de cada edición quedan en el
              archivo.
            </p>
          </section>
          <section className="bg-cream text-ink p-8 border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 font-bold">Memoria</h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
              El festival articula lecturas, talleres, publicaciones y colaboraciones culturales; la
              fuente consultada registra también su reconocimiento como patrimonio de la ciudad.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
