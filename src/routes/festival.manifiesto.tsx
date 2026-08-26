import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto del Festival — Colectivo Metáfora" },
      {
        name: "description",
        content:
          "Explora la proclama poética y el propósito del Festival Internacional de Poesía de Quetzaltenango. Inspirado en la memoria de la tierra y la resistencia.",
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
    simbolo: "🌱",
  },
  origen: {
    titulo: "Origen",
    descripcion:
      "Quetzaltenango duerme a la par del volcán y sus montañas. Esta certeza telúrica es nuestra fuerza biológica y espiritual, el cuerpo geográfico donde resistimos y nos renovamos.",
    simbolo: "🌋",
  },
  lenguaje: {
    titulo: "Lenguaje",
    descripcion:
      "La palabra es una de tantas puertas a la verdad, al abrazo sincero y al milagro de la ternura. La poesía es la más alta creación humana y por eso le corresponde hablar de la luz y denunciar el horror.",
    simbolo: "🦅",
  },
};

function PaginaManifiesto() {
  const [activePillar, setActivePillar] = useState<keyof typeof pilaresInfo>("raiz");
  const [hoveredStanza, setHoveredStanza] = useState<number | null>(null);

  return (
    <article className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 overflow-hidden">
      {/* Elemento de Fondo Artístico (Inspiración Julio Cúmez - Volcán, Viento y Aves SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg
          viewBox="0 0 800 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-full h-full text-ink"
        >
          {/* Silueta Volcán */}
          <path d="M 100 500 L 350 200 L 400 240 L 450 210 L 700 500 Z" />
          {/* Ondas de Viento / Energía */}
          <path d="M 50 100 Q 200 150 400 80 T 750 120" />
          <path d="M 80 150 Q 250 180 430 110 T 720 170" />
          {/* Aves en vuelo */}
          <path d="M 120 80 Q 130 70 140 80 Q 150 70 160 80" />
          <path d="M 280 60 Q 290 50 300 60 Q 310 50 320 60" />
          <path d="M 620 90 Q 630 80 640 90 Q 650 80 660 90" />
        </svg>
      </div>

      {/* Cabecera del Manifiesto - Diseño Fanzine/Artesanal */}
      <header className="relative z-10 mb-12 border-b-2 border-dashed border-ink/30 pb-8">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-2 bg-carmine/5 px-2 py-0.5 rounded-sm">
          Canto & Resistencia Colectiva
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-[0.02em] font-extrabold text-ink">
          Manifiesto
        </h1>
        <p className="mt-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink/60">
          Escrito y proclamado desde Xelajuj No’j, Guatemala
        </p>
      </header>

      {/* Grid Artístico Desalineado */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLUMNA IZQUIERDA: Poesía e Imagen 1 (lg:col-span-8) */}
        <section className="lg:col-span-8 space-y-8">
          {/* Declaración Hero (Inspirada en carteles de imprenta artesanal) */}
          <div className="relative bg-carmine/5 p-6 sm:p-10 border-l-8 border-carmine shadow-[4px_4px_0_0_#1a1a1a] rotate-[-0.5deg] mb-8">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-[1.02] tracking-[0.04em] font-extrabold text-carmine text-balance">
              Frente al horror,
              <br />
              creemos, insistimos,
              <br />
              estamos de pie.
            </h2>
            <div className="absolute top-2 right-4 text-carmine/20 font-display text-7xl select-none font-bold">
              ★
            </div>
          </div>

          {/* Bloques de Poema Interactivos y Espaciados */}
          <div className="space-y-6 text-ink/90 font-medium">
            {/* Estrofa 01 */}
            <div
              onMouseEnter={() => setHoveredStanza(0)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-6 border-l-2 transition-all duration-300 ${
                hoveredStanza === 0
                  ? "border-carmine bg-carmine/5 pl-8 shadow-xs scale-[1.01]"
                  : "border-ink/15 pl-6"
              } cursor-pointer rounded-r-md`}
            >
              <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-widest text-carmine/70">
                <span>[ Territorio ]</span>
                <span className="text-xs">🌋</span>
              </div>
              <p className="font-display text-xl sm:text-2xl uppercase tracking-[0.03em] leading-snug text-ink font-bold text-balance">
                Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa
                fuerza y origen.
              </p>
            </div>

            {/* Estrofa 02 con imagen flotante integrada en collage */}
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div
                onMouseEnter={() => setHoveredStanza(1)}
                onMouseLeave={() => setHoveredStanza(null)}
                className={`md:col-span-8 p-6 border-l-2 transition-all duration-300 ${
                  hoveredStanza === 1
                    ? "border-carmine bg-carmine/5 pl-8 scale-[1.01]"
                    : "border-ink/15 pl-6"
                } cursor-pointer rounded-r-md`}
              >
                <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium text-ink/85">
                  La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
                  injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto
                  político, por eso, continuamos irrenunciablemente en la solidaridad. Creemos que
                  esta noche pronto cederá al milagro de la luz. La palabra es una de tantas puertas
                  a la verdad.
                </p>
              </div>

              {/* Imagen 01 - Marco Orgánico Rústico */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group w-full max-w-[180px] p-2 bg-cream border-2 border-ink rounded-[25px_10px_20px_12px] rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-[4px_4px_0_0_#1a1a1a]">
                  <div className="absolute -top-3 left-6 h-5 w-12 bg-carmine/60 mix-blend-multiply z-10 rotate-[-8deg] border-x border-ink/20" />
                  <img
                    src={imagenesSitio.crowdBw}
                    alt="Colectivo y comunidad"
                    className="w-full aspect-[4/5] object-cover rounded-[20px_8px_16px_10px] grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="block text-center font-mono text-[8px] uppercase tracking-widest text-ink/60 mt-1">
                    01 · Voz colectiva
                  </span>
                </div>
              </div>
            </div>

            {/* Caja de resistencia textual (Zine Flyer Style) */}
            <div className="bg-ink text-cream p-8 border-[3px] border-ink shadow-[6px_6px_0_0_rgba(177,42,59,1)] rotate-[0.5deg] my-8 relative overflow-hidden">
              {/* Glyph Decorativo */}
              <div className="absolute -right-8 -bottom-8 text-cream/[0.04] font-display text-[9rem] select-none pointer-events-none">
                ★
              </div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-mustard font-bold mb-4">
                Declaración y Firmeza
              </span>
              <ul className="space-y-4 font-display text-xl sm:text-2xl uppercase tracking-[0.06em] font-extrabold text-balance">
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
                  <span className="text-carmine text-2xl">✦</span> No podrán arrebatarnos los sueños
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
                  <span className="text-carmine text-2xl">✦</span> No podrán arrebatarnos el abrazo
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
                  <span className="text-carmine text-2xl">✦</span> Mucho menos, el milagro de la
                  ternura
                </li>
              </ul>
            </div>

            {/* Estrofa 03 */}
            <div
              onMouseEnter={() => setHoveredStanza(2)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-6 border-l-2 transition-all duration-300 ${
                hoveredStanza === 2
                  ? "border-carmine bg-carmine/5 pl-8 scale-[1.01]"
                  : "border-ink/15 pl-6"
              } cursor-pointer rounded-r-md`}
            >
              <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-widest text-carmine/70">
                <span>[ Trascendencia ]</span>
                <span className="text-xs">🕊️</span>
              </div>
              <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium text-ink/85">
                Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito
                eterno por esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos
                seres que están entre la transparencia del aire. Eso somos:{" "}
                <strong>fuego que ilumina y arde</strong>. A esto nos aferramos, esta es nuestra
                respuesta.
              </p>
            </div>

            {/* Estrofa 04 (Poética Pura) */}
            <div
              onMouseEnter={() => setHoveredStanza(3)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-6 border-l-2 transition-all duration-300 ${
                hoveredStanza === 3
                  ? "border-carmine bg-carmine/5 pl-8 scale-[1.01]"
                  : "border-ink/15 pl-6"
              } cursor-pointer rounded-r-md`}
            >
              <p className="italic font-bold text-lg sm:text-xl text-carmine border-l-4 border-carmine/30 pl-4 py-1 tracking-[0.03em] leading-snug">
                La poesía es la más alta creación humana y por eso también le toca hablar de los
                actos más viles.
              </p>
            </div>

            {/* Estrofa 05 */}
            <div
              onMouseEnter={() => setHoveredStanza(4)}
              onMouseLeave={() => setHoveredStanza(null)}
              className={`p-6 border-l-2 transition-all duration-300 ${
                hoveredStanza === 4
                  ? "border-carmine bg-carmine/5 pl-8 scale-[1.01]"
                  : "border-ink/15 pl-6"
              } cursor-pointer rounded-r-md`}
            >
              <p className="font-body text-sm sm:text-base leading-relaxed tracking-[0.03em] font-medium text-ink/85">
                Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y
                sin pretensiones con el que se convive cotidianamente. Está ahí, en los actos más
                honestos y sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por
                la sobrevivencia.
              </p>
            </div>
          </div>
        </section>

        {/* COLUMNA DERECHA: Estilo Diario/Zine Artístico de Colectivo (lg:col-span-4) */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          {/* Ficha Explicativa del Colectivo */}
          <div className="bg-cream border-2 border-ink p-6 shadow-[5px_5px_0_0_#1a1a1a] rounded-[10px_30px_15px_20px] rotate-[-1deg]">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-carmine font-bold mb-2">
              ¿Por qué lo hacemos?
            </span>
            <h3 className="font-display text-2xl uppercase tracking-wide mb-3 font-extrabold text-ink">
              Poesía en Acción
            </h3>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 tracking-wide font-medium">
              Este festival no es una empresa ni una marca corporativa. Es un{" "}
              <strong>colectivo de artistas</strong> que entiende el poema como un puente social.
              Trabajamos de forma comunitaria e independiente para abrir espacios donde la palabra
              sea de todos y el diálogo sea posible frente al miedo.
            </p>
            <div className="mt-4 pt-4 border-t border-dashed border-ink/20 font-mono text-[9px] uppercase tracking-widest text-ink/50 text-right">
              — Producido por Metáfora
            </div>
          </div>

          {/* Imagen 02 - Simón Pedroza / Taller en el bosque */}
          <div className="flex justify-center my-6">
            <div className="relative group w-full max-w-[200px] p-2 bg-cream border-2 border-ink rounded-[12px_20px_10px_30px] rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-[4px_4px_0_0_#b12a3b]">
              <div className="absolute -top-3 right-6 h-5 w-12 bg-mustard/60 mix-blend-multiply z-10 rotate-[8deg] border-x border-ink/20" />
              <img
                src={imagenesSitio.poetPortrait}
                alt="Retrato de poesía y naturaleza"
                className="w-full aspect-square object-cover rounded-[8px_16px_8px_25px] grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="block text-center font-mono text-[8px] uppercase tracking-widest text-ink/60 mt-2">
                02 · Taller y naturaleza
              </span>
            </div>
          </div>

          {/* Ficha 1: Qué es */}
          <div className="p-5 bg-ink text-cream border-2 border-ink shadow-[4px_4px_0_0_rgba(177,42,59,0.95)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-300">
            <h4 className="font-display text-lg uppercase tracking-wider mb-2 font-bold text-mustard">
              Qué es el Festival
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-cream/90 font-medium tracking-wide">
              Un encuentro cultural nacido de jóvenes poetas que convirtió la lectura pública en las
              plazas y la convivencia en una práctica viva de ciudad y patrimonio.
            </p>
          </div>

          {/* Ficha 2: Dónde ocurre */}
          <div className="p-5 bg-carmine text-cream border-2 border-ink shadow-[4px_4px_0_0_#1a1a1a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-300">
            <h4 className="font-display text-lg uppercase tracking-wider mb-2 font-bold">
              Dónde Ocurre
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-cream/95 font-medium tracking-wide">
              La palabra viaja por escuelas rurales, universidades de occidente, parques, teatros y
              espacios autogestionados de Quetzaltenango y departamentos vecinos.
            </p>
          </div>

          {/* Ficha 3: Memoria */}
          <div className="p-5 bg-cream text-ink border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-300">
            <h4 className="font-display text-lg uppercase tracking-wider mb-2 font-bold">
              Memoria Activa
            </h4>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80 font-medium tracking-wide">
              Documentamos lecturas comunitarias, editamos fanzines artesanales y organizamos
              talleres libres para preservar las diversas voces de nuestra geografía.
            </p>
          </div>
        </aside>
      </div>

      {/* SECCIÓN INTERACTIVA DE INVOCACIÓN ANCESTRAL (Diseño rústico tipo losa de piedra) */}
      <div className="my-16 border-2 border-ink bg-cream p-6 sm:p-10 shadow-[6px_6px_0_0_#1a1a1a] rounded-[15px_15px_25px_25px] relative overflow-hidden">
        {/* Fondo decorativo Kaqchikel geométrico */}
        <div className="absolute right-4 top-4 font-display text-6xl text-ink/[0.03] select-none pointer-events-none">
          ◆ ◆ ◆
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-carmine font-bold">
            Invocación ancestral
          </span>
          <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed mt-2 tracking-wide font-medium">
            Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron,
            dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos:
          </p>
        </div>

        {/* Pilares Tabs */}
        <div className="grid grid-cols-3 gap-3 border-b-2 border-dashed border-ink/20 pb-6">
          {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePillar(key)}
              className={`py-3 sm:py-4 px-2 font-display text-sm sm:text-lg uppercase tracking-[0.15em] border-2 transition-all duration-300 font-bold ${
                activePillar === key
                  ? "bg-mustard text-ink border-ink shadow-[3px_3px_0_0_#1a1a1a] translate-y-[-2px]"
                  : "bg-cream text-ink/75 border-ink/20 hover:border-ink hover:bg-mustard/10"
              }`}
            >
              <span className="block text-xl sm:text-2xl mb-1">{pilaresInfo[key].simbolo}</span>
              {pilaresInfo[key].titulo}
            </button>
          ))}
        </div>

        {/* Contenido Dinámico de la Invocación */}
        <div className="mt-8 min-h-[120px] flex flex-col justify-center animate-in fade-in duration-300 max-w-3xl mx-auto text-center">
          <p className="font-display text-lg sm:text-2xl uppercase leading-relaxed text-ink font-bold tracking-wide">
            «{pilaresInfo[activePillar].descripcion}»
          </p>
          <div className="mt-4 font-mono text-[9px] uppercase tracking-widest text-ink/40">
            • Transmisión y aliento de Xelajuj No'j •
          </div>
        </div>
      </div>

      {/* Cierre Lirico de la página */}
      <footer className="mt-12 text-center max-w-2xl mx-auto font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink/50 border-t border-dashed border-ink/20 pt-8">
        La poesía es el aliento de la tierra y la palabra colectiva.
      </footer>
    </article>
  );
}
