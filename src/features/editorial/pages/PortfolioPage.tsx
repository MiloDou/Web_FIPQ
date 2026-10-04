import { useState, useRef } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { piezas } from "../data/portfolio";
import { useAccessibleDialog } from "@/hooks/useAccessibleDialog";

export function PortfolioPage() {
  const [selectedPieza, setSelectedPieza] = useState<(typeof piezas)[0] | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useAccessibleDialog(dialogRef, Boolean(selectedPieza), () => setSelectedPieza(null));

  return (
    <>
      <EncabezadoSeccion
        eyebrow="Trabajo del taller · 2018→2026"
        title="Portafolio"
        accent="gráfico."
      >
        Selección del trabajo de impresión, diseño y encuadernación de la editorial. Todo hecho en
        la sede de Xelajuj No’j con prensas riso y técnicas mixtas. Haz clic en cualquier trabajo
        para ampliarlo.
      </EncabezadoSeccion>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {piezas.map((p, i) => (
          <figure
            key={i}
            className={`relative ${p.span} ${p.rotate} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 group`}
          >
            <button
              type="button"
              aria-label={`Ampliar ${p.titulo}, ${p.year}`}
              onClick={() => setSelectedPieza(p)}
              className="block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-4"
            >
              <div className="absolute -top-3 right-6 h-6 w-20 bg-ink/60 mix-blend-multiply z-10" />
              <img
                src={p.src}
                alt={p.titulo}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover shadow-[8px_8px_0_0_rgba(26,26,26,0.85)] ring-1 ring-ink/20 group-hover:shadow-[12px_12px_0_0_rgba(26,26,26,0.95)] transition-shadow duration-300"
              />
              <div className="mt-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/75">
                  {p.year} · {p.tipo}
                </span>
                <h3 className="font-display text-xl sm:text-2xl uppercase leading-tight font-bold mt-1 group-hover:underline transition-colors">
                  {p.titulo}
                </h3>
              </div>
            </button>
          </figure>
        ))}
      </div>

      {selectedPieza && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${selectedPieza.titulo}`}
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedPieza(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedPieza.src}
              alt={selectedPieza.titulo}
              className="max-h-[75vh] w-auto object-contain ring-4 ring-cream shadow-2xl rounded-sm"
            />
            <div className="mt-4 text-center">
              <span className="font-mono text-xs text-mustard uppercase tracking-widest block mb-1">
                {selectedPieza.year} · {selectedPieza.tipo}
              </span>
              <h3 className="font-display text-3xl text-cream uppercase">{selectedPieza.titulo}</h3>
            </div>
            <button
              type="button"
              className="mt-4 font-mono text-xs text-cream uppercase tracking-widest bg-ink px-4 py-2 hover:bg-cream hover:text-ink transition-colors cursor-pointer border border-ink"
              onClick={() => setSelectedPieza(null)}
            >
              Cerrar vista previa ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
