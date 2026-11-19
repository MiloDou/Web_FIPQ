import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, Pause, Play } from "lucide-react";

const patrocinadores = [
  ["Ministerio de Cultura y Deportes", "ministerio-cultura"],
  ["Oficina de Apoyo a la Creación Artística CREA", "crea"],
  [
    "Asociación Gremial de Editores de Guatemala y Gobierno de Guatemala",
    "ageg-gobierno",
  ],
  ["Instituto Guatemalteco de Turismo", "inguat"],
  ["AECID Cultura Guatemala", "aecid-cultura"],
  ["Laguna Lodge", "laguna-lodge"],
  ["Zona de Recarga", "zona-recarga"],
  ["Caja Lúdica", "caja-ludica"],
  ["Feria Internacional del Libro en Guatemala", "filgua"],
  ["Cholsamaj Editorial", "cholsamaj"],
  ["Asociación Zacapaneca de Contadores de Cuentos y Anécdotas", "azcca"],
  ["Consulado de Carrera de México en Tecún Umán", "consulado-mexico-tecun-uman"],
  ["Consulado de Carrera de México en Quetzaltenango", "consulado-mexico-quetzaltenango"],
  ["Gobernación Departamental de Quetzaltenango", "gobernacion-quetzaltenango"],
  ["Suly Magic", "suly-magic"],
  ["Editorial Cultura", "editorial-cultura"],
  [
    "Oficina de Atención y Desarrollo Turístico de la Municipalidad de Quetzaltenango",
    "oficina-turismo",
  ],
  ["Tukur Solutions", "tukur-solutions"],
] as const;

function LogosPatrocinadores({ duplicado = false }: { duplicado?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
      aria-hidden={duplicado}
    >
      {patrocinadores.map(([nombre, archivo], index) => (
        <div key={archivo} className="flex h-20 shrink-0 items-center justify-center">
          <img
            src={`/21fipq/patrocinadores/${archivo}.webp`}
            alt={duplicado ? "" : nombre}
            loading={index < 5 ? "eager" : "lazy"}
            className="h-[72px] w-auto max-w-[280px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function Fipq21Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return;
    const syncMotionPreference = () => {
      if (motionPreference.matches) {
        video.pause();
        setIsPlaying(false);
        return;
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };
    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);
    return () => motionPreference.removeEventListener("change", syncMotionPreference);
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fipq21-font relative isolate bg-[#100d11] font-body text-cream">
      <video
        ref={videoRef}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="fixed inset-0 z-0 h-full w-full object-cover object-[55%_center] sm:object-center"
      >
        <source src="/21fipq/fondo.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[#10060b]/45" />

      <div className="relative z-10">
        <section className="flex min-h-svh items-center border-b border-white/20 px-5 pb-4 pt-[calc(3.5rem+1rem)] sm:px-6 sm:pb-8 sm:pt-[calc(4rem+1rem)]">
          <div className="mx-auto w-full max-w-5xl text-center">
            <h1 className="relative mx-auto aspect-[609/328] w-full max-w-[380px] sm:max-w-[650px]">
              <span className="sr-only">21 Festival Internacional de Poesía de Quetzaltenango</span>
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "rgb(255 190 160 / 0.12)",
                  backdropFilter: "brightness(2.2) saturate(2.5)",
                  WebkitBackdropFilter: "brightness(2.2) saturate(2.5)",
                  mask: 'url("/21fipq/numero-21-original.png") center / 100% 100% no-repeat',
                  WebkitMask: 'url("/21fipq/numero-21-original.png") center / 100% 100% no-repeat',
                }}
              />
              <img
                src="/21fipq/circulos-originales.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              />
              <img
                src="/21fipq/nombre-festival-original.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full brightness-0 invert"
              />
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-snug text-white/90 sm:mt-5 sm:text-base sm:leading-relaxed">
              Quetzaltenango se convierte nuevamente en el epicentro de la poesía en América Latina.
              La 21 edición del FIPQ se celebrará del 25 al 28 de noviembre de 2026, entre los
              volcanes y las montañas que rodean a Xelajuj No’j.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/festival/programa"
                className="inline-flex min-h-14 items-center justify-center bg-cream px-8 py-4 text-base font-bold uppercase tracking-wide text-ink shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#f1bc73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                Ver programa
              </Link>
              <Link
                to="/festival/prensa-21fipq"
                className="inline-flex min-h-14 items-center justify-center gap-3 border-2 border-cream bg-[#170b10]/70 px-8 py-4 text-base font-bold uppercase tracking-wide text-cream shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#3b1d19] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                Kit de prensa <FileText size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="dedicatoria-titulo"
          className="border-b border-white/20 bg-[#170b10]/50 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2
                id="dedicatoria-titulo"
                className="font-display text-[clamp(2rem,3.8vw,3rem)] uppercase leading-none"
              >
                Dedicado al pensador Roney Edelberto Alvarado-Gamarro y al Pueblo Originado
              </h2>
            </div>
            <div className="space-y-5 self-center text-base leading-relaxed text-white/85 sm:text-lg">
              <p>
                Esta edición rinde homenaje al pensador, antropólogo y educador Roney Edelberto
                Alvarado-Gamarro. Su mirada, sensibilidad y acompañamiento han estado presentes
                desde los inicios del FIPQ.
              </p>
              <p>
                Su trabajo ha sido fundamental para profundizar en la identidad, la historia y las
                voces del territorio. Uno de sus aportes centrales es la propuesta del “Pueblo
                Originado”.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="trayectoria-titulo"
          className="border-b border-white/20 bg-[#120c12]/50 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2
              id="trayectoria-titulo"
              className="font-display text-[clamp(2rem,3.8vw,3rem)] uppercase leading-none"
            >
              Semblanza y trayectoria
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-white/85 sm:text-lg">
              <p>
                Nació en Cunén, El Quiché, en 1959; desde 1962 ha vivido y se ha formado como
                quetzalteco. Estudió en el Instituto Normal para Varones de Occidente (INVO), donde
                lideró movimientos estudiantiles de secundaria en la década de los 70.
              </p>
              <p>
                Es licenciado en Pedagogía y antropólogo por la Universidad de San Carlos de
                Guatemala; doctor en Educación por la Universidad de La Salle, Costa Rica, y
                posdoctor en Estudios de Pensamiento Complejo por la Universidad de La Habana, Cuba.
              </p>
              <ul
                aria-label="Compromiso social y comunitario"
                className="space-y-3 border-t border-white/20 pt-5"
              >
                <li className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <span className="font-semibold tabular-nums text-white">1992</span>
                  <span>Fundador de la Asociación Pop Wuj.</span>
                </li>
                <li className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <span className="font-semibold tabular-nums text-white">1993</span>
                  <span>
                    Presidente del Centro de Estudios Mayas Adrián Inés Chávez (TIMACH); actualmente
                    miembro honorario.
                  </span>
                </li>
                <li className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <span className="font-semibold tabular-nums text-white">2005</span>
                  <span>
                    Integrante de la Liga Maya Guatemala, responsable del área de Antropología.
                  </span>
                </li>
                <li className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <span className="font-semibold tabular-nums text-white">2019</span>
                  <span>
                    Socio fundador de la Asociación 32 Volcanes, donde lidera el área de Promoción
                    del Pensamiento e Investigación.
                  </span>
                </li>
              </ul>
              <p>
                Ha impartido conferencias y clases en Guatemala, Latinoamérica, Estados Unidos y
                Europa, y ha publicado ensayos sobre el pensamiento maya y la identidad territorial.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="pueblo-originado-titulo"
          className="border-b border-white/20 bg-[#170b10]/50 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2
              id="pueblo-originado-titulo"
              className="font-display text-[clamp(2rem,3.8vw,3rem)] uppercase leading-none"
            >
              El Pueblo Originado: memoria, identidad y territorio
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-white/85 sm:text-lg">
              <p>
                Con la categoría “Pueblo Originado”, Alvarado-Gamarro propone comprender una parte
                de las identidades mestizas surgidas en Guatemala a partir de la historia colonial.
                Su lectura sitúa en el centro la memoria, la subjetividad y la continuidad cultural.
              </p>
              <p>
                En su propuesta distingue al Pueblo Originario, el Pueblo Originado y el invasor. El
                Pueblo Originado nombra a un sector mestizo cuya historia se formó en el contexto
                violento de la invasión y la colonización, pero conserva una vertiente originaria,
                particularmente maya-k’iche’, como parte de una historia en tránsito.
              </p>
              <p>
                La categoría invita a preguntarnos cómo se construyeron nuestras identidades, qué
                memorias fueron silenciadas y qué elementos culturales permanecieron vivos. El
                retorno a la memoria abre la posibilidad de reconocer los orígenes y recuperar la
                dignidad de las culturas originarias.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="encuentro-titulo"
          className="border-b border-white/20 bg-[#120c12]/50 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2
                id="encuentro-titulo"
                className="font-display text-[clamp(2rem,3.8vw,3rem)] uppercase leading-none"
              >
                Cuatro días de poesía compartida
              </h2>
            </div>
            <div className="space-y-5 self-center text-base leading-relaxed text-white/85 sm:text-lg">
              <p>
                Del 25 al 28 de noviembre de 2026, calles, plazas, centros culturales, bibliotecas,
                librerías, teatros y recintos de diversas comunidades del occidente guatemalteco
                recibirán a poetas de distintas naciones, unidos y unidas por la memoria, el corazón
                y la promesa de vida.
              </p>
              <p>
                El 21 FIPQ es producido por Metáfora y Metáfora Editores en colaboración con
                organizaciones públicas y privadas, grupos organizados de la sociedad civil, amigas
                y amigos.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="patrocinadores-titulo"
          className="relative z-10 bg-white py-4 text-ink sm:py-6"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2
              id="patrocinadores-titulo"
              className="font-display text-lg uppercase tracking-wide sm:text-xl"
            >
              Gracias al apoyo de:
            </h2>
          </div>
          <div
            className="sponsor-marquee mt-3"
            role="group"
            aria-label="Organizaciones que apoyan y acompañan al 21 FIPQ"
          >
            <div className="sponsor-marquee-track">
              <LogosPatrocinadores />
              <LogosPatrocinadores duplicado />
            </div>
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pausar video de fondo" : "Reanudar video de fondo"}
        aria-pressed={isPlaying}
        className="fixed bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center border border-cream/50 bg-ink/80 text-cream transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2"
      >
        {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
