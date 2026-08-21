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
      <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-carmine mb-4">
        Principios del festival · Archivo histórico
      </span>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight mb-10 text-balance break-words font-bold">
        La poesía <span className="text-carmine italic">se comparte</span>, se pone en acción.
      </h1>

      <div className="space-y-8 text-lg leading-relaxed text-ink/85">
        <p className="text-2xl md:text-3xl font-display uppercase text-ink leading-tight text-balance">
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
        <div className="w-20 h-20 border-2 border-carmine rounded-full flex items-center justify-center -rotate-12 shrink-0">
          <span className="text-carmine text-center leading-none">
            FIPQ
            <br />
            Xela
          </span>
        </div>
        <p>Síntesis basada en el archivo histórico y testimonios públicos sobre el festival.</p>
      </div>
    </article>
  );
}
