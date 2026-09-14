import { useState } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { contenidoImages } from "@/assets/contenido";
import { ediciones } from "../data/archive";

// Función/Componente para estandarizar el tamaño y forma de todos los afiches (Portafotos)
function PosterFrame({ image, title, onClick }: { image?: string; title: string; onClick: () => void }) {
  // Respetamos la forma original del afiche (w-auto) pero limitamos fuertemente la altura
  // para garantizar que la fila quepa en la pantalla (max-h-[55vh] o 60vh).
  return (
    <div className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center max-h-[55vh] md:max-h-[65vh] w-full" onClick={onClick}>
      {image ? (
        <img
          src={image}
          alt={`Afiche de ${title}`}
          loading="lazy"
          className="w-auto h-auto max-h-[55vh] md:max-h-[65vh] max-w-full object-contain border-4 border-ink shadow-[8px_8px_0_0_rgba(26,26,26,1)] bg-white group-hover:shadow-[12px_12px_0_0_rgba(186,0,56,1)] transition-shadow duration-300"
        />
      ) : (
        <div className="w-[300px] aspect-[3/4] bg-cream/50 flex items-center justify-center border-4 border-dashed border-ink/20 shadow-[8px_8px_0_0_rgba(26,26,26,0.3)]">
          <span className="font-mono text-sm uppercase text-ink/60 font-bold text-center px-4">
            Registro visual<br/>pendiente
          </span>
        </div>
      )}
    </div>
  );
}

export function FestivalArchivePage() {
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);
  const [activeGalleryEdition, setActiveGalleryEdition] = useState<
    (typeof ediciones)[number] | null
  >(null);

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
              <article className="w-full border-b-4 border-ink flex flex-col md:flex-row items-stretch min-h-[50vh]">
                
                {/* COLUMNA VISUAL (AFICHE EN PORTAFOTOS ESTANDARIZADO) */}
                <div 
                  className={`w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex items-center justify-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] bg-opacity-[0.03] ${
                    isImageLeft 
                      ? "md:order-1 border-b-4 md:border-b-0 md:border-r-4 border-ink" 
                      : "md:order-2 border-t-4 md:border-t-0 md:border-l-4 border-ink"
                  }`}
                >
                  <PosterFrame 
                    image={e.image} 
                    title={e.title} 
                    onClick={() => {
                      if(e.image) setSelectedFoto(e.image);
                    }} 
                  />
                </div>

                {/* COLUMNA DE INFORMACIÓN */}
                <div 
                  className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-cream ${
                    isImageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
                    
                    {/* Año y Título */}
                    <header className="flex flex-col">
                      <span className="font-mono text-xl sm:text-2xl font-bold tracking-[0.15em] text-carmine uppercase mb-2">
                        {e.year || "Edición en Proceso"}
                      </span>
                      <h3 className="font-display text-6xl sm:text-7xl uppercase leading-[0.8] font-black tracking-tighter text-ink mb-6">
                        {e.title}
                      </h3>
                      <hr className="border-t-4 border-ink w-full" />
                    </header>
                    
                    {/* Memoria Textual */}
                    <div className="py-2">
                      <p className="font-mono text-lg sm:text-xl text-ink/90 font-bold leading-relaxed whitespace-pre-wrap">
                        {e.body ?? "El archivo fotográfico e histórico de esta edición se encuentra en proceso de recuperación y digitalización."}
                      </p>
                    </div>

                    {/* Llamado a la Acción (Galería) */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(ev) => {
                          ev.stopPropagation();
                          setActiveGalleryEdition(e);
                        }}
                        className="inline-flex items-center gap-4 px-8 py-4 bg-ink text-cream border-4 border-ink font-mono text-sm sm:text-base uppercase tracking-widest font-bold hover:bg-mustard hover:text-ink transition-all shadow-[8px_8px_0_0_rgba(186,0,56,1)] active:translate-y-1 active:shadow-[2px_2px_0_0_rgba(186,0,56,1)] group"
                      >
                        Abrir Galería
                        <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>

              </article>
            </AnimatedSection>
          );
        })}
      </div>

      {/* MODAL DE GALERÍA INDIVIDUAL POR FESTIVAL */}
      {activeGalleryEdition && (
        <div
          role="dialog"
          aria-label={`Galería de fotos de ${activeGalleryEdition.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-10 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-cream border-4 border-ink shadow-[12px_12px_0_0_rgba(186,0,56,1)] max-w-5xl w-full p-6 md:p-12 relative rotate-[0.5deg]">
            <button
              onClick={() => setActiveGalleryEdition(null)}
              className="absolute -top-3 -right-3 h-12 w-12 bg-carmine text-cream border-4 border-ink shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-mustard hover:text-ink transition-colors flex items-center justify-center font-bold font-mono text-2xl cursor-pointer"
            >
              ×
            </button>

            <div className="text-center mb-8">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-carmine font-bold">
                Archivo Histórico
              </span>
              <h2 className="font-display text-5xl sm:text-7xl uppercase leading-none mt-2 text-ink font-black">
                Memoria {activeGalleryEdition.title}
              </h2>
              <p className="font-mono text-lg font-bold mt-4 text-ink/70">
                {activeGalleryEdition.year}
              </p>
            </div>

            <hr className="border-t-4 border-ink mb-8" />

            {/* Cuadrícula de fotos de la Galería */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getGalleryImagesForEdition(activeGalleryEdition.number).map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="bg-white border-4 border-ink p-2 shadow-[6px_6px_0_0_rgba(26,26,26,0.9)] hover:shadow-[10px_10px_0_0_rgba(186,0,56,1)] transition-all duration-300 relative group cursor-pointer overflow-hidden aspect-[4/3]"
                  onClick={() => setSelectedFoto(imgUrl)}
                >
                  <img
                    src={imgUrl}
                    alt={`Registro ${idx + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setActiveGalleryEdition(null)}
                className="border-4 border-ink bg-ink px-8 py-3.5 font-mono text-sm uppercase tracking-widest text-cream hover:bg-mustard hover:text-ink transition-colors font-bold cursor-pointer shadow-[6px_6px_0_0_rgba(186,0,56,1)] active:translate-y-1 active:shadow-none"
              >
                Volver al Listado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE FOTO INDIVIDUAL AMPLIADA */}
      {selectedFoto && (
        <div
          role="dialog"
          aria-label="Vista ampliada de la imagen"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-lg cursor-zoom-out animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelectedFoto(null)}
        >
          <div className="relative max-w-[90vw] md:max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedFoto}
              alt="Foto ampliada del archivo"
              className="max-h-[85vh] w-auto object-contain border-4 border-ink bg-white shadow-[16px_16px_0_0_rgba(186,0,56,1)]"
            />
            <button
              type="button"
              className="mt-8 font-mono text-sm text-cream uppercase tracking-widest bg-carmine px-8 py-4 font-bold hover:bg-mustard hover:text-ink transition-colors cursor-pointer border-4 border-ink shadow-[6px_6px_0_0_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none"
              onClick={() => setSelectedFoto(null)}
            >
              Cerrar vista previa
            </button>
          </div>
        </div>
      )}
    </>
  );
}
