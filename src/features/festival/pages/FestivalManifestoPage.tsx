import { useState } from "react";
import { imagenesSitio } from "@/assets/contenido";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { pilaresInfo } from "../data/manifesto";

export function FestivalManifestoPage() {
  const [activePillar, setActivePillar] = useState<keyof typeof pilaresInfo>("raiz");

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 bg-cream text-ink">
      {/* Cabecera Tipo Manifiesto de Arte / Zine Stamp */}
      <header className="mb-20 text-center animate-fade-in-up">
        <div className="inline-block bg-ink text-cream px-8 py-6 text-center shadow-[6px_6px_0_0_#ba0038] rounded-none mb-6">
          <h1
            id="contenido"
            className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider font-black leading-none"
          >
            Manifiesto
          </h1>
        </div>
      </header>

      {/* Proclamación Central (Gran Declaración de Apertura) */}
      <AnimatedSection>
        <div className="my-16 border-l-4 border-carmine pl-6 py-6 bg-white/40 shadow-sm rounded-none max-w-4xl mx-auto">
          <p className="font-display text-3xl sm:text-5xl md:text-6xl text-ink uppercase leading-none tracking-wide font-black">
            Frente al horror,
            <br />
            creemos, insistimos,
            <br />
            <span className="text-carmine">estamos de pie.</span>
          </p>
        </div>
      </AnimatedSection>

      {/* FLUJO POÉTICO EN TRES MOVIMIENTOS ASIMÉTRICOS */}
      <div className="space-y-32 mt-24">
        {/* MOVIMIENTO I: Del Territorio y el Fuego */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline gap-4 pb-3 border-b-2 border-ink">
              <span className="font-display text-4xl text-carmine font-black">I.</span>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-black text-ink">
                Del Territorio y la Fuerza Poética
              </h2>
            </div>
            <p className="font-display text-2xl uppercase tracking-wide leading-snug text-ink font-bold text-balance">
              Quetzaltenango duerme a la par del volcán y sus montañas, certeza que significa fuerza
              y origen.
            </p>
            <p className="font-body text-base leading-relaxed text-ink/80">
              Somos seres que están entre la transparencia del aire. Eso somos: fuego que ilumina y
              arde. A esto nos aferramos, esta es nuestra respuesta ante el silencio y la
              desesperanza.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-2 border-ink p-2 bg-white shadow-[6px_6px_0_0_#121212] transition-all duration-300 hover:shadow-[8px_8px_0_0_#ba0038] rounded-none">
              <img
                src={imagenesSitio.poetPortrait}
                alt="Retrato del poeta y las montañas de Quetzaltenango"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* MOVIMIENTO II: De la Palabra y la Verdad (Invertido) */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="border-2 border-ink p-2 bg-white shadow-[6px_6px_0_0_#121212] transition-all duration-300 hover:shadow-[8px_8px_0_0_#ba0038] rounded-none">
              <img
                src={imagenesSitio.stageNight}
                alt="Lectura poética en escenario nocturno"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-baseline gap-4 pb-3 border-b-2 border-ink">
              <span className="font-display text-4xl text-carmine font-black">II.</span>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-black text-ink">
                De la Palabra y el Fuego
              </h2>
            </div>
            <p className="font-body text-xl leading-relaxed text-ink font-semibold bg-white/40 p-6 border-l-2 border-ink">
              «La poesía es la más alta creación humana y por eso también le toca hablar de los
              actos más viles.»
            </p>
            <p className="font-body text-base leading-relaxed text-ink/80">
              La vida es un cúmulo de imágenes, el único tiempo que existe es este. Frente a la
              injusticia y el miedo, elegimos el amor y la belleza. Permanecer es un gesto político,
              por eso, continuamos irrenunciablemente. Creemos que esta noche pronto cederá al
              milagro de la luz.
            </p>
          </div>
        </AnimatedSection>

        {/* Declaración Central de los Tres Versos Libres (Ritmo de Fanzine) */}
        <AnimatedSection>
          <div className="py-10 border-y-2 border-ink bg-[#121212] text-cream text-center shadow-[4px_4px_0_0_#ba0038] rounded-none max-w-4xl mx-auto">
            <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-carmine font-bold mb-4">
              NUESTRAS CONVICCIONES
            </span>
            <ul className="space-y-4 font-display text-xl sm:text-3xl uppercase tracking-wider font-black text-carmine px-4">
              <li className="hover:text-cream transition-colors duration-300">
                No podrán arrebatarnos los sueños
              </li>
              <li className="hover:text-cream transition-colors duration-300">
                No podrán arrebatarnos el abrazo
              </li>
              <li className="hover:text-cream transition-colors duration-300">
                Mucho menos, el milagro de la ternura
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* MOVIMIENTO III: De la Memoria Colectiva */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline gap-4 pb-3 border-b-2 border-ink">
              <span className="font-display text-4xl text-carmine font-black">III.</span>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-black text-ink">
                De la Memoria y la Cotidianidad
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed text-ink/80">
              Todo es sagrado, todo tiene su energía. Proponemos al poema como un gesto habitual y
              sin pretensiones con el que se convive cotidianamente. Está ahí, en los actos más
              honestos y sencillos: en la sonrisa, el abrazo y el asombro; en la lucha diaria por la
              sobrevivencia y la dignidad.
            </p>
            <p className="font-body text-base leading-relaxed text-ink/80 pl-4 border-l-2 border-carmine">
              En nosotras y nosotros la fuerza telúrica de este lugar que habitamos: la resistencia,
              la renovación y la dignidad que jamás podrán arrancarla. Venimos de nuevo a celebrar
              la vida.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-2 border-ink p-2 bg-white shadow-[6px_6px_0_0_#ba0038] transition-all duration-300 hover:shadow-[8px_8px_0_0_#ba0038] rounded-none">
              <img
                src={imagenesSitio.wallCollage}
                alt="Mural de posters y memoria del festival"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* SECCIÓN INTERACTIVA DE INVOCACIÓN ANCESTRAL (Estilo Fanzine Zine Control Panel) */}
        <AnimatedSection className="py-12 max-w-3xl mx-auto border-t-2 border-dashed border-ink/20">
          <p className="font-body text-sm text-ink/65 leading-relaxed text-center mb-8 tracking-wide max-w-xl mx-auto">
            Hace miles de años nuestras primeras abuelas y nuestros primeros abuelos se reunieron y
            dibujaron sobre piedras todo aquello que llamó su atención. Hoy les invocamos en tres
            principios vitales:
          </p>

          {/* Selector de Pilares (Botones de Fanzine de alto contraste) */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pb-6">
            {(Object.keys(pilaresInfo) as Array<keyof typeof pilaresInfo>).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActivePillar(key)}
                className={`px-5 py-2.5 font-display text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 font-extrabold cursor-pointer rounded-none border-2 border-ink ${
                  activePillar === key
                    ? "bg-carmine text-cream shadow-[3px_3px_0_0_#121212] -translate-x-0.5 -translate-y-0.5"
                    : "bg-white text-ink hover:bg-ink/5 shadow-none"
                }`}
              >
                {pilaresInfo[key].titulo}
              </button>
            ))}
          </div>

          {/* Contenido del Pilar (Animado con caja protectora) */}
          <div className="mt-4 p-6 bg-white border-2 border-ink shadow-[4px_4px_0_0_#121212] min-h-[120px] flex flex-col justify-center text-center rounded-none">
            <p className="font-body text-base leading-relaxed text-ink/90 font-bold tracking-wide animate-fade-in-up">
              «{pilaresInfo[activePillar].descripcion}»
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* SECCIÓN: EL FESTIVAL EN CONTEXTO */}
      <AnimatedSection className="mt-16 border-t-2 border-ink pt-8 sm:mt-20 sm:pt-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-5">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-wide text-ink sm:text-5xl">
              El <i>FIPQ</i> en contexto
            </h2>
            <p className="max-w-prose text-justify text-base font-medium leading-relaxed text-ink/75 sm:text-lg">
              El Festival Internacional de Poesía de Quetzaltenango es una plataforma independiente
              y autogestionada que conecta a poetas de todo el mundo con estudiantes y comunidades
              de Xelajuj No’j y del occidente guatemalteco. A través del diálogo intercultural,
              talleres y lecturas, llevamos la poesía a una gran diversidad de espacios: escuelas,
              universidades, parques, teatros, calles, hogares seguros, centros de reclusión, así
              como comunidades rurales y urbanas
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[450px] lg:col-span-7">
            <div className="border-2 border-ink bg-white p-2 shadow-[6px_6px_0_0_#121212] transition-shadow duration-300 hover:shadow-[8px_8px_0_0_#ba0038]">
              <img
                src={imagenesSitio.contextCommunity}
                alt="Participantes del festival reunidos en un abrazo comunitario"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-contain grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </figure>
        </div>

        {/* Grilla de Fichas Físicas Cuadradas */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <section className="p-6 border-2 border-ink bg-white shadow-[4px_4px_0_0_#121212] hover:shadow-[6px_6px_0_0_#ba0038] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 rounded-none flex flex-col justify-between h-full">
            <div className="space-y-3">
              <h3 className="font-display text-xl uppercase tracking-wider font-black text-carmine">
                Qué es
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80">
                Un encuentro cultural nacido de la iniciativa de jóvenes poetas que convirtió la
                lectura pública en las plazas y la convivencia en una práctica viva de ciudad y
                patrimonio.
              </p>
            </div>
          </section>
          <section className="p-6 border-2 border-ink bg-white shadow-[4px_4px_0_0_#121212] hover:shadow-[6px_6px_0_0_#ba0038] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 rounded-none flex flex-col justify-between h-full">
            <div className="space-y-3">
              <h3 className="font-display text-xl uppercase tracking-wider font-black text-ink">
                Dónde ocurre
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80">
                La palabra viaja por escuelas rurales, universidades de occidente, parques, teatros
                y espacios autogestionados de Quetzaltenango, San Marcos y Totonicapán.
              </p>
            </div>
          </section>
          <section className="p-6 border-2 border-ink bg-white shadow-[4px_4px_0_0_#121212] hover:shadow-[6px_6px_0_0_#ba0038] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 rounded-none flex flex-col justify-between h-full">
            <div className="space-y-3">
              <h3 className="font-display text-xl uppercase tracking-wider font-black text-carmine">
                Aporte
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-ink/80">
                Publicaciones de poesía, fortalecimiento a los procesos comunitarios de gestión
                cultural, talleres de escritura, memoria histórica, y escritura creativa.
              </p>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </article>
  );
}
