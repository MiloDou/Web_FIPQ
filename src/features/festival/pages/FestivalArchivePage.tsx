import { useState, useEffect, useCallback } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { contenidoImages } from "@/assets/contenido";
import { ediciones } from "../data/archive";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ─── Afiche / PosterFrame ───────────────────────────────────────────────────
function PosterFrame({ image, title, onClick }: { image?: string; title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver afiche de ${title} en tamaño completo`}
      className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:-translate-y-1 flex items-center justify-center max-h-[55vh] lg:max-h-[65vh] w-full bg-transparent border-0 p-0 focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4"
    >
      {image ? (
        <img
          src={image}
          alt={`Afiche de ${title}`}
          loading="lazy"
          className="w-auto h-auto max-h-[55vh] lg:max-h-[65vh] max-w-full object-contain border-4 border-ink shadow-[8px_8px_0_0_rgba(26,26,26,1)] bg-white group-hover:shadow-[12px_12px_0_0_rgba(186,0,56,1)] transition-shadow duration-300"
        />
      ) : (
        <div className="w-[240px] sm:w-[300px] aspect-[3/4] bg-cream/50 flex items-center justify-center border-4 border-dashed border-ink/20 shadow-[8px_8px_0_0_rgba(26,26,26,0.3)]">
          <span className="font-mono text-sm uppercase text-ink/60 font-bold text-center px-4">
            Registro visual<br/>pendiente
          </span>
        </div>
      )}
    </button>
  );
}

// ─── Modal galería con navegación ──────────────────────────────────────────
function GaleriaModal({
  images,
  initialIndex,
  edition,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  edition: (typeof ediciones)[number];
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  // Navegación con teclado
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de fotos de ${edition.title}`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink animate-in fade-in duration-200"
    >
      {/* Header del modal */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b-4 border-cream/20 shrink-0">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-carmine font-bold">
            Archivo Histórico
          </span>
          <h2 className="font-display text-2xl sm:text-4xl uppercase leading-none text-cream mt-1">
            <span className="text-carmine">{edition.number}</span> FIPQ
            {edition.year && (
              <span className="text-cream/40 text-xl sm:text-3xl ml-3">{edition.year}</span>
            )}
          </h2>
        </div>

        {/* Contador + controles */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="font-mono text-xs sm:text-sm text-cream/50 tracking-widest tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="h-10 w-10 sm:h-12 sm:w-12 bg-carmine text-cream border-2 border-cream/20 hover:bg-mustard hover:text-ink active:scale-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Área principal: imagen grande + flechas */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-2 sm:px-4 py-4">
        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-2 sm:left-4 z-10 h-12 w-12 sm:h-14 sm:w-14 bg-cream/10 hover:bg-carmine active:bg-carmine border-2 border-cream/20 hover:border-carmine text-cream flex items-center justify-center transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-carmine"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Imagen */}
        <div className="mx-16 sm:mx-20 flex items-center justify-center w-full h-full">
          <img
            key={current}
            src={images[current]}
            alt={`Registro fotográfico ${current + 1} de ${edition.title}`}
            className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain border-4 border-cream/20 bg-cream/5 shadow-[8px_8px_0_0_rgba(186,0,56,0.4)] animate-in fade-in zoom-in-95 duration-200"
          />
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-2 sm:right-4 z-10 h-12 w-12 sm:h-14 sm:w-14 bg-cream/10 hover:bg-carmine active:bg-carmine border-2 border-cream/20 hover:border-carmine text-cream flex items-center justify-center transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-carmine"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Tira de miniaturas */}
      <div className="shrink-0 border-t-4 border-cream/20 px-4 py-3 sm:py-4 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 w-max mx-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Ver fotografía ${idx + 1}`}
              aria-pressed={idx === current}
              className={`shrink-0 h-14 w-14 sm:h-20 sm:w-20 overflow-hidden border-4 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-carmine ${
                idx === current
                  ? "border-carmine scale-105 shadow-[0_0_0_2px_rgba(186,0,56,1)]"
                  : "border-cream/20 opacity-50 hover:opacity-100 hover:border-cream/50"
              }`}
            >
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Hint de teclado */}
      <div className="shrink-0 py-2 text-center">
        <span className="font-mono text-[9px] sm:text-[10px] text-cream/25 uppercase tracking-widest">
          ← → para navegar · Esc para cerrar
        </span>
      </div>
    </div>
  );
}

// ─── Página principal ──────────────────────────────────────────────────────
export function FestivalArchivePage() {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<{
    edition: (typeof ediciones)[number];
    startIndex: number;
  } | null>(null);

  const getGalleryImagesForEdition = (numStr: string) => {
    const num = parseInt(numStr) || 1;
    const startIndex = (num * 4) % (contenidoImages.length - 6);
    return contenidoImages.slice(startIndex, startIndex + 6);
  };

  return (
    <>
      <EncabezadoSeccion title="Veinte ediciones" accent="de historia.">
        Archivo visual del Festival Internacional de Poesía de Quetzaltenango. Un recorrido a través
        de las dos décadas de historia, memoria y poesía en la ciudad.
      </EncabezadoSeccion>

      <div id="contenido-pagina" className="w-full flex flex-col border-t-4 border-ink bg-cream scroll-mt-20">
        {ediciones.map((e, i) => {
          const isImageLeft = i % 2 === 0;

          return (
            <AnimatedSection key={e.number} className="w-full">
              <article className="w-full border-b-4 border-ink flex flex-col lg:flex-row items-stretch">

                {/* COLUMNA VISUAL */}
                <div
                  className={`w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] min-h-[40vh] lg:min-h-[50vh] ${
                    isImageLeft
                      ? "lg:order-1 border-b-4 lg:border-b-0 lg:border-r-4 border-ink"
                      : "lg:order-2 lg:border-l-4 border-ink"
                  }`}
                >
                  <PosterFrame
                    image={e.image}
                    title={e.title}
                    onClick={() => {
                      if (e.image) setSelectedPoster(e.image);
                    }}
                  />
                </div>

                {/* COLUMNA DE INFORMACIÓN */}
                <div
                  className={`w-full lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-cream ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-col gap-6 w-full max-w-xl">

                    {/* Número grande + separador */}
                    <div className="flex items-end gap-4">
                      <span className="font-mono text-sm sm:text-base font-bold tracking-[0.15em] text-carmine uppercase leading-none">
                        {e.year || "En proceso"}
                      </span>
                      <div className="flex-1 h-[3px] bg-ink mb-1" />
                    </div>

                    {/* Título FIPQ N */}
                    <div>
                      <h3 className="font-display leading-none tracking-tight text-ink text-6xl sm:text-7xl lg:text-8xl uppercase">
                        <span className="text-carmine">{e.number}</span> FIPQ
                      </h3>
                    </div>

                    <hr className="border-t-4 border-ink w-full" />

                    {/* Memoria Textual */}
                    <p className="font-mono text-sm sm:text-base text-ink/80 font-bold leading-relaxed">
                      {e.body ?? "El archivo fotográfico e histórico de esta edición se encuentra en proceso de recuperación y digitalización."}
                    </p>

                    {/* Botón galería — solo para FIPQ 20 / mensaje de construcción para las demás */}
                    {e.number === "20" ? (
                      <div>
                        <button
                          type="button"
                          onClick={(ev) => {
                            ev.stopPropagation();
                            setActiveGallery({ edition: e, startIndex: 0 });
                          }}
                          className="inline-flex items-center gap-4 px-6 sm:px-8 py-4 min-h-[44px] bg-ink text-cream border-4 border-ink font-mono text-sm sm:text-base uppercase tracking-widest font-bold hover:bg-mustard hover:text-ink transition-all shadow-[8px_8px_0_0_rgba(186,0,56,1)] active:translate-y-1 active:shadow-[2px_2px_0_0_rgba(186,0,56,1)] group focus-visible:outline-2 focus-visible:outline-carmine"
                        >
                          Abrir Galería
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="border-l-4 border-mustard pl-4 py-1 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-mustard shrink-0" aria-hidden="true" />
                          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink/60 font-bold">
                            Galería en construcción
                          </p>
                        </div>
                        <p className="font-body text-sm text-ink/70 leading-relaxed">
                          Estamos recuperando el archivo visual de esta edición.
                          Si tienes fotografías, videos o materiales de este festival,{" "}
                          <strong className="text-ink">agradecemos profundamente tu apoyo</strong>.
                        </p>
                        <a
                          href="mailto:archivo@fipq.org"
                          aria-label="Enviar material del festival al archivo de FIPQ"
                          className="inline-flex items-center gap-2 w-fit font-mono text-xs sm:text-sm text-carmine font-bold uppercase tracking-widest hover:text-ink active:text-ink transition-colors border-b-2 border-carmine hover:border-ink pb-0.5"
                        >
                          archivo@fipq.org →
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>

      {/* MODAL GALERÍA CON NAVEGACIÓN */}
      {activeGallery && (
        <GaleriaModal
          images={getGalleryImagesForEdition(activeGallery.edition.number)}
          initialIndex={activeGallery.startIndex}
          edition={activeGallery.edition}
          onClose={() => setActiveGallery(null)}
        />
      )}

      {/* MODAL AFICHE AMPLIADO */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del afiche"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-lg cursor-zoom-out animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-[90vw] md:max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPoster}
              alt="Afiche del festival ampliado"
              className="max-h-[80vh] w-auto object-contain border-4 border-cream/20 bg-white shadow-[16px_16px_0_0_rgba(186,0,56,1)]"
            />
            <button
              type="button"
              aria-label="Cerrar afiche ampliado"
              className="mt-6 font-mono text-sm text-cream uppercase tracking-widest bg-carmine px-8 py-3 min-h-[44px] font-bold hover:bg-mustard hover:text-ink active:bg-mustard active:text-ink transition-colors cursor-pointer border-4 border-cream/20 shadow-[6px_6px_0_0_rgba(255,255,255,0.15)] active:translate-y-1 active:shadow-none"
              onClick={() => setSelectedPoster(null)}
            >
              Cerrar ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
