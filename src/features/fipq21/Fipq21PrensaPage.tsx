import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const actividades = [
  "Feria de arte, gastronomía y libros, miércoles 25 de noviembre, 15:00 horas en Gobernación Departamental de Quetzaltenango. (13 Avenida 5-19, Zona 1, Quetzaltenango).",
  "Ceremonia inaugural y homenaje al pensador Roney Edelberto Alvarado-Gamarro, miércoles 25 de noviembre, 17:00 horas en Gobernación Departamental de Quetzaltenango. (13 Avenida 5-19, Zona 1, Quetzaltenango).",
  "Lectura de poesía, jueves 26 de noviembre, 19:30 horas, en segundo nivel, Torre Central, Parque Intercultural. (21 Avenida y 4a Calle, Zona 3, Quetzaltenango)",
  "Lectura de poesía, jueves 26 de noviembre, 19:30 horas, Consulado de Carrera de México en Quetzaltenango. (2a. Calle 3-90, zona 4, La Esperanza, Quetzaltenango).",
  "Presentación de la memoria del 21 FIPQ, libro que reúne una selección de poemas de las y los poetas invitados, viernes 27 de noviembre, 19:30 horas, sede de Asociación 32 Volcanes. (9a. Calle 9-38, Zona 1, Quetzaltenango).",
  "Ceremonia de clausura, sábado 28 de noviembre, desde las 19:00 horas, en Gobernación Departamental de Quetzaltenango.(13 Avenida 5-19, Zona 1, Quetzaltenango).",
];

const pdf = "/21fipq/prensa/comunicado-de-prensa-21fipq.pdf";
const dias = [
  "25 noviembre",
  "25 noviembre",
  "26 noviembre",
  "26 noviembre",
  "27 noviembre",
  "28 noviembre",
];

const invitados = [
  "Ana María Rivas (El Salvador)",
  "Angeles Mohedo (España)",
  "Beatriz Sánchez (Guatemala)",
  "Calixta Gabriel (Guatemala)",
  "Cynthia Guardado (Américas)",
  "Carlos Colón Ruiz (Puerto Rico)",
  "Carlos Villalobos (Costa Rica)",
  "Diego Ventura Puac (Guatemala)",
  "Douglas de Almeida (Brasil)",
  "Eduardo Villalobos (Guatemala)",
  "Fadir Delgado (Colombia)",
  "Flavia García (Argentina)",
  "Gabriel Woltke (Guatemala)",
  "Gloria Hernández (Guatemala)",
  "Guillermo Acuña (Costa Rica)",
  "Javier Flores Masaya (Guatemala)",
  "Jorge Miguel Cocom Pech (México)",
  "Jorge Valbuena (Colombia)",
  "Juan Carlos Abril (España)",
  "Karla Armas (Ecuador)",
  "Kory Hernández (México)",
  "Leonardo Nin (República Dominicana)",
  "Manuel Bolom (Guatemala)",
  "Marcela Dubón (Guatemala)",
  "María Pineda (Guatemala)",
  "Mirtha Luz Pérez (México)",
  "Natalia del Carmen Eduardo (Guatemala)",
  "Oswaldo Samayoa (Guatemala)",
  "Renato Rodriguez-Lefebvre (Canadá)",
  "Rodrigo Tarabillo (Bolivia)",
  "Rolman Josué Constantino (México)",
  "Sarawi Andrango (Ecuador)",
  "Tania Ramos (México)",
  "Vilma Sánchez (Guatemala)",
  "Vima Calderón (Guatemala)",
  "Wingston González (Guatemala)",
];

export function Fipq21PrensaPage() {
  const contenidoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [estadoCopia, setEstadoCopia] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return;
    const sincronizar = () => {
      if (preferencia.matches) video.pause();
      else void video.play().catch(() => {});
    };
    sincronizar();
    preferencia.addEventListener("change", sincronizar);
    return () => preferencia.removeEventListener("change", sincronizar);
  }, []);

  async function copiarComunicado() {
    const texto = contenidoRef.current?.innerText.trim();
    if (!texto) return;
    try {
      await navigator.clipboard.writeText(`Comunicado de prensa — 21FIPQ\n\n${texto}`);
      setEstadoCopia("Comunicado copiado al portapapeles");
    } catch {
      setEstadoCopia("No se pudo copiar. Descarga el PDF para guardar el comunicado.");
    }
  }

  return (
    <article className="fipq21-font relative isolate min-h-svh overflow-hidden bg-[#100d11] px-5 pb-20 pt-28 font-body text-cream sm:px-8 sm:pt-36">
      <video
        ref={videoRef}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/21fipq/fondo.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[#10060b]/80" />
      <div className="mx-auto max-w-5xl">
        <Link
          to="/festival/21fipq"
          className="inline-flex min-h-11 items-center gap-2 border-b border-cream/60 text-sm font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          <ArrowLeft size={17} aria-hidden="true" /> Volver a la página del 21FIPQ
        </Link>
        <header className="mt-8 border-b border-cream/25 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f1bc73]">
            21 Festival Internacional de Poesía de Quetzaltenango -FIPQ-
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-none">
            Comunicado de prensa
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Del 25 al 28 de noviembre de 2026 · Actividades libres y gratuitas al público
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={copiarComunicado}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-cream px-5 py-3 font-bold uppercase text-ink transition-colors hover:bg-[#f1bc73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              {estadoCopia.startsWith("Comunicado copiado") ? "Copiado" : "Copiar comunicado"}
              {estadoCopia.startsWith("Comunicado copiado") ? (
                <Check size={18} aria-hidden="true" />
              ) : (
                <Copy size={18} aria-hidden="true" />
              )}
            </button>
            <a
              href={pdf}
              download="Comunicado-de-prensa-21FIPQ.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-cream bg-[#170b10]/80 px-5 py-3 font-bold uppercase text-cream transition-colors hover:bg-[#3b1d19] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Descargar comunicado en PDF <Download size={18} aria-hidden="true" />
            </a>
          </div>
          <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm text-cream">
            {estadoCopia}
          </p>
        </header>

        <div
          ref={contenidoRef}
          className="space-y-12 pt-10 text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          <div className="space-y-6 border-l-2 border-[#f1bc73] bg-[#170b10]/70 px-5 py-6 sm:px-8">
            <p>
              Quetzaltenango, Guatemala – noviembre de 2026. El Festival Internacional de Poesía de
              Quetzaltenango -FIPQ- anuncia la realización de su vigésima primera edición,
              consolidándose como uno de los festivales de su tipo más relevantes de América Latina.
              Este año, el 21 FIPQ estará dedicado a Roney Edelberto Alvarado-Gamarro y a su
              propuesta teórica “El Pueblo Originado”, en reconocimiento a su destacada trayectoria
              y compromiso con el pensamiento, la justicia social y la dignidad humana.
            </p>
            <p>
              Desde su fundación, el FIPQ ha sido un espacio de convergencia para poetas nacionales
              e internacionales, promoviendo el diálogo intercultural y el acceso gratuito a la
              palabra poética. En esta edición, que se celebrará del 25 al 28 de noviembre de 2026,
              se contará con la participación de poetas provenientes de diversos países, quienes
              compartirán su obra junto a poetas de Guatemala en actividades desarrolladas en
              Quetzaltenango y distintas ciudades del occidente del país, entre ellas:
              Huehuetenango, San Juan Ostuncalco, Concepción Chiquirichapa, Coatepeque, Nahualá,
              Ayutla, Mazatenango, Retalhuleu, Chi Xot y Quetzaltenango.
            </p>
            <p>
              Todas las actividades son libres y gratuitas al público, reafirmando el compromiso
              institucional del FIPQ con la democratización del arte, la cultura y la articulación
              comunitaria.
            </p>
          </div>

          <section aria-labelledby="actividades-prensa">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f1bc73]">
              25–28 de noviembre
            </p>
            <h2
              id="actividades-prensa"
              className="mt-2 font-display text-3xl uppercase text-cream sm:text-4xl"
            >
              Principales actividades programadas
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {actividades.map((actividad, index) => (
                <li key={actividad} className="border border-cream/20 bg-[#170b10]/75 p-5 sm:p-6">
                  <span className="mb-3 block text-sm font-bold tracking-[0.14em] text-[#f1bc73]">
                    {dias[index]}
                  </span>
                  {actividad}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="invitados-prensa">
            <h2
              id="invitados-prensa"
              className="font-display text-3xl uppercase text-cream sm:text-4xl"
            >
              Las y los invitados al 21 FIPQ
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {invitados.map((invitado) => (
                <li key={invitado} className="border-b border-cream/15 pb-2">
                  {invitado}
                </li>
              ))}
            </ul>
          </section>
          <p className="max-w-3xl border-l-2 border-[#f1bc73] pl-5 text-lg font-semibold text-cream sm:text-xl">
            El Festival Internacional de Poesía de Quetzaltenango -FIPQ- celebra veintiún años de
            labor ininterrumpida en favor de la poesía, la memoria y la convivencia comunitaria,
            reafirmando su papel como referente poético en el ámbito latinoamericano.
          </p>
          <section
            aria-labelledby="contactos-prensa"
            className="border-t border-cream/25 pt-8 text-base"
          >
            <h2
              id="contactos-prensa"
              className="font-display text-3xl uppercase text-cream sm:text-4xl"
            >
              Redes y contactos de prensa
            </h2>
            <p className="mt-4 max-w-3xl">
              Para información adicional y consulta de la agenda completa, se invita al público y a
              los medios de comunicación a visitar las redes oficiales del FIPQ:
            </p>
            <div className="mt-5 grid gap-6 border border-cream/20 bg-[#170b10]/75 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p>Facebook: Festival Internacional de Poesía de Quetzaltenango</p>
                <p>Instagram: @FIPQ_metafora</p>
              </div>
              <div>
                <p className="font-semibold">Contactos de prensa:</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="tel:+50233824608"
                      className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                    >
                      00502 33824608
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+50252279795"
                      className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                    >
                      00502 52279795
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+50259868850"
                      className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                    >
                      00502 59868850
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
