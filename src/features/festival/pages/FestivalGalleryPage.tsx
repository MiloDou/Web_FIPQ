import { useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { galeriaImageAlt, galeriaImages } from "@/assets/contenido";
import { useAccessibleDialog } from "@/hooks/useAccessibleDialog";

const GRID_SIZE = 20;
const UNA_SEMANA_MS = 7 * 24 * 60 * 60 * 1000;

// Paleta del tape — sigue los colores de la página
const TAPE_COLORS = [
  "bg-carmine/70",
  "bg-mustard/80",
  "bg-ink/60",
  "bg-carmine/50",
  "bg-mustard/60",
];
const ROTATIONS = [
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-[0.5deg]",
  "-rotate-[0.5deg]",
];

function shuffleConSemilla<T>(arr: T[], semilla: number): T[] {
  const resultado = [...arr];
  let estado = semilla >>> 0;
  const aleatorio = () => {
    estado += 0x6d2b79f5;
    let valor = estado;
    valor = Math.imul(valor ^ (valor >>> 15), valor | 1);
    valor ^= valor + Math.imul(valor ^ (valor >>> 7), valor | 61);
    return ((valor ^ (valor >>> 14)) >>> 0) / 4294967296;
  };

  for (let i = resultado.length - 1; i > 0; i -= 1) {
    const j = Math.floor(aleatorio() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }
  return resultado;
}

function slotStyle(i: number) {
  return {
    rotation: ROTATIONS[i % ROTATIONS.length],
    tapeColor: TAPE_COLORS[i % TAPE_COLORS.length],
    tapeAngle: i % 2 === 0 ? "-rotate-[35deg]" : "rotate-[35deg]",
  };
}

function seleccionSemanal(semana: number, variacion = 0): string[] {
  const semilla = (semana + Math.imul(variacion, 0x9e3779b9)) >>> 0;
  const seleccion = shuffleConSemilla(galeriaImages, semilla).slice(0, GRID_SIZE);
  const seleccionAnterior = shuffleConSemilla(galeriaImages, semana - 1).slice(0, GRID_SIZE);

  if (seleccion.every((foto, i) => foto === seleccionAnterior[i]) && seleccion.length > 1) {
    seleccion.push(seleccion.shift()!);
  }

  return seleccion;
}

// ─── Foto individual ────────────────────────────────────────────────────────
// El tape vive DENTRO del marco polaroid (overflow-hidden) para que nunca
// aparezca suelto: si la imagen no cargó, el tape tampoco se muestra.
function FotoCard({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
  const [cargada, setCargada] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { rotation, tapeColor, tapeAngle } = slotStyle(index);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setCargada(true);
    }
  }, [src]);

  if (error) return null;

  return (
    <figure className="relative mb-8 md:mb-10 break-inside-avoid inline-block w-full">
      <button
        type="button"
        aria-label={`Ver fotografía ${index + 1} del Festival Internacional de Poesía de Quetzaltenango ampliada`}
        onClick={onClick}
        className={`group block w-full cursor-pointer text-left transition-transform duration-300 ease-out hover:scale-[1.03] hover:z-10 focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4 ${rotation} hover:rotate-0`}
      >
        {/* Marco polaroid — overflow-hidden asegura que el tape no escape */}
        <div className="bg-white p-2 pb-7 shadow-[4px_4px_0_0_rgba(26,26,26,0.65)] group-hover:shadow-[6px_6px_0_0_rgba(186,0,56,0.75)] transition-shadow duration-300 overflow-hidden relative">
          {/* TAPE — vive dentro del marco, centrado arriba, solo aparece cuando la foto cargó */}
          {cargada && (
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-12 h-[13px] md:h-[16px] ${tapeColor} ${tapeAngle} z-10 shadow-sm pointer-events-none transition-opacity duration-300`}
              style={{ mixBlendMode: "multiply" }}
              aria-hidden="true"
            />
          )}

          {/* Contenedor de la foto con placeholder neutro sin forzar altura cero */}
          <div className="relative w-full overflow-hidden bg-ink/5">
            {!cargada && (
              <div className="absolute inset-0 aspect-[4/3] bg-ink/10 animate-pulse pointer-events-none" />
            )}

            <img
              ref={imgRef}
              src={src}
              alt={
                galeriaImageAlt[src] ??
                "Registro fotográfico del Festival Internacional de Poesía de Quetzaltenango"
              }
              loading="lazy"
              decoding="async"
              onLoad={() => setCargada(true)}
              onError={() => setError(true)}
              className={`block w-full h-auto transition-opacity duration-500 ${
                cargada ? "opacity-100" : "opacity-0"
              }`}
              style={{
                filter: "contrast(1.08) saturate(1.12) brightness(1.03)",
              }}
            />
          </div>
        </div>
      </button>

      {/* Número de registro — solo cuando cargó */}
      {cargada && (
        <figcaption className="mt-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-ink/40 group-hover:text-carmine transition-colors text-center">
          — {String(index + 1).padStart(2, "0")} —
        </figcaption>
      )}
    </figure>
  );
}

// ─── Página ────────────────────────────────────────────────────────────────
export function FestivalGalleryPage() {
  const [slots, setSlots] = useState(() =>
    seleccionSemanal(Math.floor(Date.now() / UNA_SEMANA_MS), 0),
  );
  const [variacion, setVariacion] = useState(0);
  const [actualizando, setActualizando] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useAccessibleDialog(dialogRef, Boolean(selectedFoto), () => setSelectedFoto(null));

  useEffect(() => {
    let timeoutId: number;

    const activarSeleccionSemanal = () => {
      const ahora = Date.now();
      const semanaActual = Math.floor(ahora / UNA_SEMANA_MS);
      const proximaSemana = (semanaActual + 1) * UNA_SEMANA_MS;

      setSlots(seleccionSemanal(semanaActual, variacion));
      timeoutId = window.setTimeout(activarSeleccionSemanal, proximaSemana - ahora);
    };

    activarSeleccionSemanal();
    return () => window.clearTimeout(timeoutId);
  }, [variacion]);

  const handleActualizar = () => {
    setActualizando(true);
    setVariacion((actual) => actual + 1);
    window.setTimeout(() => setActualizando(false), 500);
  };

  return (
    <>
      <EncabezadoSeccion title="Cada imagen" accent="conserva su forma." />

      {/* Grid de fotos tipo polaroid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 py-6">
        {slots.map((src, i) => (
          <FotoCard key={`${src}-${i}`} src={src} index={i} onClick={() => setSelectedFoto(src)} />
        ))}
      </div>

      {/* Botón de actualizar galería al final de la página */}
      <div className="flex justify-center pb-12 pt-4">
        <button
          type="button"
          onClick={handleActualizar}
          className="inline-flex min-h-11 items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-carmine focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4 cursor-pointer shadow-[4px_4px_0_0_rgba(26,26,26,0.65)] hover:shadow-[6px_6px_0_0_rgba(186,0,56,0.75)]"
        >
          <RefreshCw
            size={15}
            className={actualizando ? "animate-spin" : ""}
            aria-hidden="true"
          />
          Actualizar galería
        </button>
      </div>

      {/* Modal lightbox */}
      {selectedFoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la imagen"
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedFoto(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedFoto}
              alt={
                galeriaImageAlt[selectedFoto] ??
                "Registro fotográfico del Festival Internacional de Poesía de Quetzaltenango"
              }
              className="max-h-[80vh] w-auto object-contain shadow-2xl"
              style={{ filter: "contrast(1.08) saturate(1.12) brightness(1.03)" }}
            />
            <button
              type="button"
              aria-label="Cerrar vista ampliada de la fotografía"
              className="mt-4 font-mono text-xs text-cream uppercase tracking-widest bg-carmine px-5 py-3 min-h-[44px] hover:bg-mustard hover:text-ink transition-colors cursor-pointer border border-ink"
              onClick={() => setSelectedFoto(null)}
            >
              Cerrar ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
