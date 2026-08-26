import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto — 19 Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Manifiesto oficial del 19 Festival Internacional de Poesía de Quetzaltenango dedicado a Simón Pedroza: Frente al horror, creemos, insistimos, estamos de pie.",
      },
    ],
  }),
  component: PaginaManifiesto,
});

function PaginaManifiesto() {
  return (
    <article className="max-w-4xl mx-auto">
      <span className="block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-4">
        19 Festival Internacional de Poesía de Quetzaltenango
      </span>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-wide mb-8 font-bold">
        Manifiesto
      </h1>

      {/* Proclamación Principal en Estilo Afiche */}
      <div className="border-l-8 border-carmine pl-6 my-10 sm:my-12">
        <p className="font-display text-4xl sm:text-6xl lg:text-7xl text-carmine uppercase leading-[1.02] tracking-wide font-extrabold text-balance">
          Frente al horror,
          <br />
          creemos, insistimos,
          <br />
          estamos de pie.
        </p>
      </div>

      {/* Cuerpo Poético y Político */}
      <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink/85 font-medium">
        <p className="text-xl sm:text-2xl md:text-3xl font-display uppercase text-ink leading-snug font-bold text-balance">
          Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa fuerza y
          origen.
        </p>

        <p>
          La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
          injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político, por
          eso, continuamos irrenunciablemente en la solidaridad. Creemos que esta noche pronto
          cederá al milagro de la luz. La palabra es una de tantas puertas a la verdad.
        </p>

        {/* Bloque Destacado de Resistencia */}
        <div className="bg-ink text-cream p-8 my-10 border-2 border-ink shadow-[6px_6px_0_0_rgba(177,42,59,0.9)] rounded-sm">
          <ul className="space-y-4 font-display text-2xl sm:text-3xl uppercase tracking-wider font-bold">
            <li className="flex items-center gap-3">
              <span className="text-carmine">▪</span> No podrán arrebatarnos los sueños
            </li>
            <li className="flex items-center gap-3">
              <span className="text-carmine">▪</span> No podrán arrebatarnos el abrazo
            </li>
            <li className="flex items-center gap-3">
              <span className="text-carmine">▪</span> Mucho menos, el milagro de la ternura
            </li>
          </ul>
        </div>

        <p>
          Reafirmamos nuestra memoria, una memoria llena de bosques y aves y el tránsito eterno por
          esta tierra castigada. Que pese a todo se mantiene, se renueva. Somos seres que están
          entre la transparencia del aire. Eso somos: <strong>fuego que ilumina y arde</strong>. A
          esto nos aferramos, esta es nuestra respuesta.
        </p>

        <p className="border-l-4 border-ink/30 pl-4 py-1 italic font-semibold text-ink/90">
          La poesía es la más alta creación humana y por eso también le toca hablar de los actos más
          viles.
        </p>

        <p>
          Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y sin
          pretensiones con el que se convive cotidianamente. Está ahí, en los actos más honestos y
          sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la sobrevivencia.
        </p>

        <p>
          Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron,
          dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos:
        </p>

        {/* Trilogía Ancestral */}
        <div className="grid grid-cols-3 gap-4 py-4 text-center border-y-2 border-ink/10 my-8">
          <div>
            <span className="block font-mono text-xs uppercase tracking-widest text-carmine font-bold">
              01
            </span>
            <span className="font-display text-xl sm:text-3xl uppercase font-bold text-ink">
              Raíz Profunda
            </span>
          </div>
          <div>
            <span className="block font-mono text-xs uppercase tracking-widest text-carmine font-bold">
              02
            </span>
            <span className="font-display text-xl sm:text-3xl uppercase font-bold text-ink">
              Origen
            </span>
          </div>
          <div>
            <span className="block font-mono text-xs uppercase tracking-widest text-carmine font-bold">
              03
            </span>
            <span className="font-display text-xl sm:text-3xl uppercase font-bold text-ink">
              Lenguaje
            </span>
          </div>
        </div>

        <p>
          En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia y la
          renovación. La dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar la vida,
          a construir una nueva alegría, una nueva esperanza.
        </p>
      </div>

      {/* Dedicatoria a Simón Pedroza y Propósito del Festival */}
      <div className="mt-12 bg-carmine text-cream p-8 sm:p-10 border-2 border-ink shadow-[6px_6px_0_0_#1a1a1a] rounded-none">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-mustard font-bold block mb-3">
          Homenaje & Propósito · 19ª Edición
        </span>
        <p className="font-body text-base sm:text-lg leading-relaxed font-bold text-balance">
          El 19 Festival Internacional de Poesía de Quetzaltenango es un acto comunitario en el que
          se rinde un homenaje a la vida y obra del poeta <strong>Simón Pedroza</strong> y también
          un llamado a la fraternidad, el encuentro, la justicia y la libre expresión de los pueblos
          que habitamos en estos territorios.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cream/20 font-mono text-xs uppercase tracking-widest text-cream/80">
          <span>Producido por Metáfora</span>
          <span>@MetaforaFIPQ · fipq_metafora</span>
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
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-ink/85 font-medium mb-10">
          El Festival Internacional de Poesía de Quetzaltenango es una plataforma de lecturas,
          talleres and diálogo intercultural que conecta a poetas, estudiantes, instituciones y
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
