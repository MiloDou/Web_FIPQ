import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";
import { contenidoImages } from "@/assets/contenido";

export const Route = createFileRoute("/festival/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Festival FIPQ" },
      {
        name: "description",
        content: "Galería fotográfica del Festival Internacional de Poesía de Quetzaltenango.",
      },
    ],
  }),
  component: PaginaGaleria,
});

const fotos = contenidoImages.map((src, index) => ({
  src,
  caption: `Registro fotográfico recibido · ${String(index + 1).padStart(2, "0")}`,
  rotate: index % 2 === 0 ? "rotate-1" : "-rotate-1",
}));

function PaginaGaleria() {
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);

  return (
    <>
      <EncabezadoSeccion
        eyebrow="Galería Fotográfica"
        title="Cada imagen"
        accent="conserva su forma."
      >
        Fotografías del archivo visual del festival, mostradas respetando sus proporciones
        originales. Haz clic en cualquier imagen para verla en pantalla completa.
      </EncabezadoSeccion>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-8 md:gap-10">
        {fotos.map((foto, i) => (
          <figure
            key={i}
            onClick={() => setSelectedFoto(foto.src)}
            className={`relative mb-10 break-inside-avoid ${foto.rotate} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 group cursor-pointer`}
          >
            <div className="absolute -top-3 left-8 h-6 w-20 bg-mustard/80 mix-blend-multiply z-10" />
            <img
              src={foto.src}
              alt={foto.caption}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto object-contain bg-ink shadow-[8px_8px_0_0_rgba(26,26,26,0.85)] ring-1 ring-ink/20 group-hover:shadow-[12px_12px_0_0_rgba(177,42,59,0.9)] transition-shadow duration-300"
            />
            <figcaption className="mt-3 font-mono text-[11px] font-bold uppercase tracking-widest text-ink/80 group-hover:text-carmine transition-colors">
              {foto.caption}
            </figcaption>
          </figure>
        ))}
      </div>

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
              className="max-h-[80vh] w-auto object-contain ring-4 ring-cream shadow-2xl rounded-sm"
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
