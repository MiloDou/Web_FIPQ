import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function EditorialManifestoPage() {
  return (
    <AnimatedSection>
      <article className="max-w-4xl">
        <span className="block font-mono text-xs uppercase tracking-[0.25em] text-ink font-bold mb-4">
          Carta Editorial · 2009
        </span>
        <h1
          id="contenido"
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[1.05] tracking-wide mb-10 font-bold"
        >
          Imprimir es <span>desobedecer.</span>
        </h1>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink/85 font-medium">
          <p className="text-xl sm:text-2xl md:text-3xl font-display uppercase text-ink leading-snug font-bold">
            Metáfora Editores nace porque el mercado del libro centroamericano expulsa a las voces
            que más necesitamos leer.
          </p>
          <p>
            No editamos para vender. Editamos para preservar. Para que dentro de cincuenta años
            alguien encuentre estos libros en una banca de mercado y entienda qué se decía aquí en
            estos años, cómo se nombraba el cuerpo, cómo se gritaba la rabia, cómo se sostenía la
            ternura.
          </p>
          <p>
            Tirajes cortos. Papel reciclado. Riso bicolor. Encuadernación cosida a mano. Cada libro
            pasa por las manos de tres personas antes de salir del taller en la Zona 1.
          </p>
          <p>
            Priorizamos: voces indígenas, voces de mujeres, voces disidentes, voces de la diáspora,
            voces de poetas que no tienen agente literario ni cuenta en redes sociales. La calidad
            la mide el oído, no el algoritmo.
          </p>
          <p className="font-display text-3xl uppercase text-ink leading-tight pt-6 border-t-2 border-ink">
            Un libro impreso es un acto que el Estado todavía no sabe cómo desactivar.
          </p>
        </div>
      </article>
    </AnimatedSection>
  );
}
