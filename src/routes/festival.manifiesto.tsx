import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto — Festival FIPQ" },
      {
        name: "description",
        content:
          "Principios del Festival Internacional de Poesía de Quetzaltenango: poesía, comunidad y territorio.",
      },
    ],
  }),
  component: PaginaManifiesto,
});

function PaginaManifiesto() {
  return (
    <article className="max-w-4xl">
      <span className="block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-4">
        Principios del festival · Archivo histórico
      </span>
      <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[1.05] tracking-wide mb-10 font-bold">
        La poesía <span className="text-carmine italic">se comparte</span>, se pone en acción.
      </h1>

      <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink/85 font-medium">
        <p className="text-xl sm:text-2xl md:text-3xl font-display uppercase text-ink leading-snug font-bold">
          La poesía es una práctica pública: nace del encuentro entre quienes escriben, quienes
          escuchan y los territorios que hacen posible la conversación.
        </p>
        <p>
          El festival fue iniciado por un grupo de jóvenes poetas de Quetzaltenango. Con el tiempo,
          nuevas generaciones que primero llegaron como público se incorporaron a la organización,
          construyendo continuidad y comunidad alrededor de las lecturas.
        </p>
        <p>
          El FIPQ articula centros culturales, instituciones municipales, maestros, directores,
          estudiantes, cooperación y organizaciones culturales. Su fuerza está en reunir esfuerzos
          diversos alrededor de un objetivo común.
        </p>
        <p>
          Las lecturas y talleres conectan Quetzaltenango con Totonicapán, Huehuetenango, San
          Marcos, Comalapa y otros territorios del occidente; participan poetas de Guatemala y de
          distintas regiones del mundo.
        </p>
        <p className="font-display text-3xl uppercase text-carmine leading-tight pt-6 border-t-2 border-ink">
          La poesía construye una plataforma cultural que la ciudad puede sostener.
        </p>
      </div>

      <div className="mt-16 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-ink/60">
        <div className="w-24 h-24 border-2 border-carmine rounded-full flex items-center justify-center -rotate-12 shrink-0 p-2">
          <span className="text-carmine text-center leading-tight font-bold text-[10px]">
            FIPQ
            <br />
            Xelajuj No’j
          </span>
        </div>
        <p>Síntesis basada en el archivo histórico y testimonios públicos sobre el festival.</p>
      </div>

      <div className="mt-20 pt-16 border-t-2 border-ink">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase mb-8 font-bold">
          El festival <span className="text-carmine italic">en contexto.</span>
        </h2>
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-ink/85 font-medium mb-10">
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
