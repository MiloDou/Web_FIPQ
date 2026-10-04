import { useState, useEffect, useCallback } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fotosArchivoPorEdicion } from "@/assets/contenido";
import { ediciones } from "../data/archive";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef } from "react";
import { useAccessibleDialog } from "@/hooks/useAccessibleDialog";

// ─── Afiche / PosterFrame ───────────────────────────────────────────────────
function PosterFrame({
  image,
  title,
  onClick,
}: {
  image?: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!image}
      onClick={onClick}
      aria-label={`Ver afiche de ${title} en tamaño completo`}
      className="relative group enabled:cursor-pointer disabled:cursor-not-allowed transition-transform duration-300 enabled:hover:-translate-y-2 enabled:active:-translate-y-1 flex items-center justify-center max-h-[55vh] lg:max-h-[65vh] w-full bg-transparent border-0 p-0 focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4 disabled:focus-visible:outline-none"
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
            Registro visual
            <br />
            pendiente
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStartX = useRef<number | null>(null);
  useAccessibleDialog(dialogRef, true, onClose);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length],
  );

  useEffect(() => {
    thumbnailRefs.current[current]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [current]);

  // Navegación con teclado
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de fotos de ${edition.title}`}
      ref={dialogRef}
      tabIndex={-1}
      className="fixed inset-0 z-[60] flex flex-col bg-ink animate-in fade-in duration-200"
    >
      {/* Header del modal */}
      <div className="flex shrink-0 items-center justify-between border-b border-cream/15 px-4 py-1.5 sm:px-6 sm:py-2">
        <div className="flex flex-col">
          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-cream/55 sm:text-[9px]">
            Archivo Histórico
          </span>
          <h2 className="mt-0.5 font-display text-lg uppercase leading-none text-cream sm:text-2xl">
            <span className="text-carmine">{edition.number}</span> FIPQ
            {edition.year && (
              <span className="text-cream/40 text-lg sm:text-2xl ml-2">{edition.year}</span>
            )}
          </h2>
        </div>

        {/* Contador + controles */}
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className="font-mono text-[10px] tracking-widest text-cream/65 tabular-nums sm:text-xs"
            aria-live="polite"
          >
            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="h-8 w-8 sm:h-10 sm:w-10 bg-carmine text-cream border-2 border-cream/20 hover:bg-mustard hover:text-ink active:scale-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Área principal: imagen grande + flechas */}
      <div
        className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center overflow-hidden px-2 py-2 sm:px-4 sm:py-3"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX;
          if (start !== null && end !== undefined && Math.abs(end - start) > 48) {
            if (end < start) next();
            else prev();
          }
          touchStartX.current = null;
        }}
      >
        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-2 z-10 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center border border-cream/40 bg-ink/75 text-cream transition-colors hover:border-carmine hover:bg-carmine focus-visible:outline-2 focus-visible:outline-carmine sm:left-4 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Imagen */}
        <div className="flex h-full min-h-0 w-full items-center justify-center px-12 sm:px-16">
          <img
            key={current}
            src={images[current]}
            alt={`Fotografía ${current + 1} de ${images.length} del ${edition.title}`}
            decoding="async"
            className="h-auto max-h-full w-auto max-w-full border border-cream/25 bg-ink object-contain shadow-[4px_4px_0_0_#ba0038] animate-in fade-in duration-300"
          />
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-2 z-10 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center border border-cream/40 bg-ink/75 text-cream transition-colors hover:border-carmine hover:bg-carmine focus-visible:outline-2 focus-visible:outline-carmine sm:right-4 sm:h-12 sm:w-12"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Tira de miniaturas */}
      <div className="shrink-0 overflow-x-auto border-t border-cream/15 px-4 py-2 sm:py-3">
        <div className="mx-auto flex w-max snap-x snap-mandatory gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              ref={(element) => {
                thumbnailRefs.current[idx] = element;
              }}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Ver fotografía ${idx + 1}`}
              aria-pressed={idx === current}
              className={`h-12 w-16 shrink-0 snap-center overflow-hidden border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-carmine sm:h-14 sm:w-20 ${
                idx === current
                  ? "border-carmine opacity-100"
                  : "border-cream/20 opacity-45 hover:opacity-100 hover:border-cream/50"
              }`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full bg-ink object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Hint de teclado */}
      <div className="shrink-0 py-2 text-center">
        <span className="font-mono text-[9px] text-cream/35 uppercase tracking-widest sm:text-[10px]">
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
  const posterDialogRef = useRef<HTMLDivElement>(null);
  useAccessibleDialog(posterDialogRef, Boolean(selectedPoster), () => setSelectedPoster(null));

  return (
    <>
      <EncabezadoSeccion title="Veinte ediciones" accent="de historia.">
        Archivo visual del Festival Internacional de Poesía de Quetzaltenango. Un recorrido a través
        de las dos décadas de historia, memoria y poesía en la ciudad.
      </EncabezadoSeccion>

      <div className="w-full flex flex-col border-t-4 border-ink bg-cream">
        {ediciones.map((e, i) => {
          const isImageLeft = i % 2 === 0;
          const fotosEdicion = fotosArchivoPorEdicion[e.number] ?? [];

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
                    {/* Número y nombre de la edición */}
                    <div>
                      <h3 className="font-display leading-none tracking-tight text-ink text-6xl sm:text-7xl lg:text-8xl uppercase">
                        <span className="text-carmine">{e.number}</span> FIPQ
                      </h3>
                    </div>

                    <hr className="border-t-4 border-ink w-full" />

                    {/* Datos históricos de la edición */}
                    <div className="flex flex-col gap-3 border-l-4 border-carmine pl-5">
                      <p className="font-body text-sm sm:text-base text-ink leading-relaxed">
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-carmine">
                          Dedicado a:
                        </span>
                        <br />
                        <span className="font-medium">
                          {e.dedicated ?? (
                            <span className="text-ink/60">Detalles próximamente</span>
                          )}
                        </span>
                      </p>
                      <p className="font-body text-sm sm:text-base text-ink leading-relaxed">
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-carmine">
                          Fechas:
                        </span>
                        <br />
                        <span className="font-medium">
                          {e.dates ?? <span className="text-ink/60">Detalles próximamente</span>}
                        </span>
                      </p>
                    </div>

                    {fotosEdicion.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setActiveGallery({ edition: e, startIndex: 0 })}
                        className="group inline-flex min-h-12 w-fit items-center gap-3 border-2 border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-cream shadow-[4px_4px_0_0_#ba0038] transition-all hover:bg-carmine hover:shadow-[5px_5px_0_0_#121212] active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4 sm:text-sm"
                      >
                        Abrir galería
                        <ArrowRight
                          size={18}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
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
          images={fotosArchivoPorEdicion[activeGallery.edition.number] ?? []}
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
          ref={posterDialogRef}
          tabIndex={-1}
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
