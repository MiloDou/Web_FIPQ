import { useState } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { galeriaImages } from "@/assets/contenido";
import { RefreshCw } from "lucide-react";

const GRID_SIZE = 9;
const STORAGE_KEY = "fipq_galeria_estado";
const UNA_SEMANA_MS = 7 * 24 * 60 * 60 * 1000;

// Paleta del tape — sigue los colores de la página
const TAPE_COLORS = ["bg-carmine/70", "bg-mustard/80", "bg-ink/60", "bg-carmine/50", "bg-mustard/60"];
const ROTATIONS = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-[0.5deg]", "-rotate-[0.5deg]"];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function nuevaSeleccion(): string[] {
  return shuffle(galeriaImages).slice(0, GRID_SIZE);
}

function cargarEstado(): { slots: string[]; guardado: number } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { slots: string[]; guardado: number };
      if (Date.now() - parsed.guardado < UNA_SEMANA_MS) return parsed;
    }
  } catch { /* ignorar */ }
  const estado = { slots: nuevaSeleccion(), guardado: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  return estado;
}

function slotStyle(i: number) {
  return {
    rotation: ROTATIONS[i % ROTATIONS.length],
    tapeColor: TAPE_COLORS[i % TAPE_COLORS.length],
    tapeAngle: i % 2 === 0 ? "-rotate-[35deg]" : "rotate-[35deg]",
  };
}

function diasHastaProximaActualizacion(guardado: number): number {
  const diff = UNA_SEMANA_MS - (Date.now() - guardado);
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// ─── Pantalla de carga al actualizar ──────────────────────────────────────
function PantallaActualizando() {
  return (
    <div className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-carmine">
          Actualizando galería
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-ink leading-none tracking-tight">
          FIPQ
        </h2>
      </div>

      {/* Barra brutalista */}
      <div className="w-48 h-[3px] bg-ink/10 relative overflow-hidden border border-ink/20">
        <div className="absolute inset-y-0 left-0 bg-carmine w-full animate-[loading-bar_1.4s_ease-in-out_infinite]" />
      </div>

      <span className="font-mono text-[9px] uppercase tracking-widest text-ink/30">
        Preparando nuevas fotografías
      </span>
    </div>
  );
}

// ─── Foto individual ────────────────────────────────────────────────────────
// El tape vive DENTRO del marco polaroid (overflow-hidden) para que nunca
// aparezca suelto: si la imagen no cargó, el tape tampoco se muestra.
function FotoCard({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  const [cargada, setCargada] = useState(false);
  const { rotation, tapeColor, tapeAngle } = slotStyle(index);

  return (
    <figure
      onClick={onClick}
      className={`relative mb-8 md:mb-12 break-inside-avoid cursor-pointer group
        transition-all duration-500 ease-in-out
        animate-in fade-in zoom-in-95
        ${rotation}
        hover:rotate-0 hover:scale-[1.04] hover:z-10`}
    >
      {/* Marco polaroid — overflow-hidden asegura que el tape no escape */}
      <div className="bg-white p-1.5 pb-7 shadow-[4px_4px_0_0_rgba(26,26,26,0.65)] group-hover:shadow-[6px_6px_0_0_rgba(186,0,56,0.75)] transition-shadow duration-300 overflow-hidden relative">

        {/* TAPE — vive dentro del marco, centrado arriba, solo aparece cuando la foto cargó */}
        {cargada && (
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-12 h-[13px] md:h-[16px] ${tapeColor} ${tapeAngle} z-10 shadow-sm pointer-events-none`}
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
        )}

        {/* Skeleton mientras carga */}
        {!cargada && (
          <div className="w-full aspect-[4/3] bg-ink/5 animate-pulse" />
        )}

        <img
          src={src}
          alt={`Fotografía del festival ${index + 1}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setCargada(true)}
          className={`block w-full h-auto transition-opacity duration-500 ${
            cargada ? "opacity-100" : "opacity-0 h-0"
          }`}
          style={{
            filter: "contrast(1.08) saturate(1.12) brightness(1.03)",
          }}
        />
      </div>

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
  const [estado, setEstado] = useState<{ slots: string[]; guardado: number }>(
    () => cargarEstado()
  );
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);
  const [actualizando, setActualizando] = useState(false);

  const handleRefresh = () => {
    // 1. Mostrar pantalla de carga
    setActualizando(true);
    // 2. Tras 1s (da tiempo a que se vea la animación), cargar nuevas fotos
    setTimeout(() => {
      const nuevoEstado = { slots: nuevaSeleccion(), guardado: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevoEstado));
      setEstado(nuevoEstado);
      // 3. Ocultar pantalla de carga y subir al inicio
      setActualizando(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  const diasRestantes = diasHastaProximaActualizacion(estado.guardado);

  return (
    <>
      {/* Pantalla de carga al presionar actualizar */}
      {actualizando && <PantallaActualizando />}

      <EncabezadoSeccion title="Cada imagen" accent="conserva su forma." />

      {/* Grid de fotos tipo polaroid */}
      <div
        id="contenido-pagina"
        className="columns-2 md:columns-3 gap-6 md:gap-10 scroll-mt-4 py-6"
      >
        {estado.slots.map((src, i) => (
          <FotoCard
            key={`${src}-${i}`}
            src={src}
            index={i}
            onClick={() => setSelectedFoto(src)}
          />
        ))}
      </div>

      {/* Pie de galería */}
      <div className="mt-4 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-ink pt-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-carmine" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Selección semanal activa
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30 pl-4">
            {diasRestantes === 0
              ? "Nueva selección disponible"
              : `Próxima renovación en ${diasRestantes} día${diasRestantes !== 1 ? "s" : ""}`}
          </span>
        </div>

        <button
          type="button"
          onClick={handleRefresh}
          disabled={actualizando}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest border-2 border-ink px-4 py-2.5 text-ink hover:bg-carmine hover:text-cream hover:border-carmine transition-all duration-200 shadow-[3px_3px_0_0_rgba(26,26,26,1)] hover:shadow-[3px_3px_0_0_rgba(186,0,56,1)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={12} className={`shrink-0 ${actualizando ? "animate-spin" : ""}`} />
          Actualizar galería
        </button>
      </div>

      {/* Modal lightbox */}
      {selectedFoto && (
        <div
          role="dialog"
          aria-label="Vista ampliada de la imagen"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedFoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedFoto}
              alt="Fotografía del festival ampliada"
              className="max-h-[80vh] w-auto object-contain shadow-2xl"
              style={{ filter: "contrast(1.08) saturate(1.12) brightness(1.03)" }}
            />
            <button
              type="button"
              className="mt-4 font-mono text-xs text-cream uppercase tracking-widest bg-carmine px-4 py-2 hover:bg-mustard hover:text-ink transition-colors cursor-pointer border border-ink"
              onClick={() => setSelectedFoto(null)}
            >
              Cerrar vista previa ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
