import { useState } from "react";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { contenidoImages } from "@/assets/contenido";
import { ediciones } from "../data/archive";

const tapeColors = ["bg-mustard/90", "bg-carmine/90", "bg-cream/90"];
const shadowColors = [
  "shadow-[8px_8px_0_0_rgba(26,26,26,0.85)]",
  "shadow-[8px_8px_0_0_rgba(186,0,56,0.9)]",
  "shadow-[8px_8px_0_0_rgba(227,160,29,0.9)]",
];

export function FestivalArchivePage() {
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);
  const [activeGalleryEdition, setActiveGalleryEdition] = useState<
    (typeof ediciones)[number] | null
  >(null);

  const getEraColors = (year: string | undefined) => {
    if (!year)
      return { textBg: "bg-ink text-cream", shadow: "shadow-[8px_8px_0_0_rgba(227,160,29,0.9)]" };
    const y = parseInt(year);
    if (y >= 2020)
      return { textBg: "bg-ink text-cream", shadow: "shadow-[8px_8px_0_0_rgba(227,160,29,0.9)]" };
    if (y >= 2010)
      return {
        textBg: "bg-carmine text-cream",
        shadow: "shadow-[8px_8px_0_0_rgba(26,26,26,0.85)]",
      };
    return { textBg: "bg-mustard text-ink", shadow: "shadow-[8px_8px_0_0_rgba(186,0,56,0.9)]" };
  };

  const getGalleryImagesForEdition = (numStr: string) => {
    const num = parseInt(numStr) || 1;
    // Dynamically grab 6 unique images based on the festival edition number
    const startIndex = (num * 4) % (contenidoImages.length - 6);
    return contenidoImages.slice(startIndex, startIndex + 6);
  };

  return (
    <>
      <EncabezadoSeccion eyebrow={<span>Archivo · <i>FIPQ</i></span>} title="Veinte ediciones" accent="de historia.">
        Archivo visual del Festival Internacional de Poesía de Quetzaltenango. Un recorrido a través
        de las dos décadas de historia, memoria y poesía en la ciudad.
      </EncabezadoSeccion>

      <div className="relative pb-32 pt-10">
        {/* Línea de tiempo vibrante */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-carmine via-mustard to-ink md:-translate-x-1/2 opacity-60" />

        <div className="space-y-32 md:space-y-48 perspective-[2000px]">
          {ediciones.map((e, i) => {
            const rotateClass = i % 2 === 0 ? "rotate-2" : "-rotate-2";
            const tape = tapeColors[i % tapeColors.length];
            const { textBg, shadow } = getEraColors(e.year);
            const floatClass = i % 2 === 0 ? "animate-float" : "animate-float-delayed";

            return (
              <AnimatedSection key={e.number}>
                <div
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center ${
                    i % 2 === 0 ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Etiqueta de la línea de tiempo */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-cream border-4 border-ink rounded-full md:-translate-y-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-carmine rounded-full" />
                  </div>

                  {/* BLOQUE DE TEXTO */}
                  <div
                    className={`lg:col-span-5 lg:[direction:ltr] pl-16 md:pl-0 md:px-12 z-20 ${floatClass}`}
                  >
                    <div
                      className={`${textBg} p-8 sm:p-12 ${shadow} border-2 border-ink hover:-translate-y-2 transition-transform duration-500`}
                    >
                      <div className="bg-white border-2 border-ink inline-block px-4 py-2 mb-6 shadow-sm">
                        <span className="font-mono text-sm sm:text-base uppercase tracking-[0.2em] text-ink font-bold">
                          {e.year ? <span>{e.year} · <i>FIPQ</i> {e.number}</span> : <span>Pendiente · <i>FIPQ</i> {e.number}</span>}
                        </span>
                      </div>

                      <h3 className="font-display text-6xl sm:text-7xl uppercase leading-[0.9] tracking-tight text-balance break-words font-black">
                        {e.title}
                      </h3>
                    </div>
                  </div>

                  {/* BLOQUE DE IMAGEN - FLIP CARD 3D */}
                  <div
                    className={`lg:col-span-7 lg:[direction:ltr] pl-16 pr-6 md:px-12 flex justify-center w-full group perspective-[1500px] ${i % 2 !== 0 ? "animate-float" : "animate-float-delayed"}`}
                  >
                    <div
                      className={`relative w-full cursor-pointer transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${rotateClass} flex justify-center`}
                    >
                      {/* FRONT FACE (Poster) */}
                      <div
                        className={`[backface-visibility:hidden] relative w-full bg-cream p-4 pb-12 md:p-6 md:pb-20 border-2 border-ink ${shadow} inline-block max-w-full`}
                      >
                        <div
                          className={`absolute -top-6 left-1/2 -translate-x-1/2 h-8 w-32 ${tape} mix-blend-multiply z-20 rotate-[-3deg] border border-ink/20 shadow-sm`}
                        />
                        {e.image ? (
                          <img
                            src={e.image}
                            alt={`Afiche de ${e.title}`}
                            loading="lazy"
                            className="w-full max-h-[75vh] object-contain border border-ink/20"
                            onClick={(ev) => {
                              ev.stopPropagation();
                              setSelectedFoto(e.image);
                            }}
                          />
                        ) : (
                          <div className="w-full aspect-[3/4] border-4 border-dashed border-ink/20 flex flex-col items-center justify-center text-center p-6 bg-ink/5">
                            <span className="font-mono text-sm uppercase text-ink/60 font-bold">
                              Registro visual
                              <br />
                              pendiente
                            </span>
                          </div>
                        )}
                      </div>

                      {/* BACK FACE (Ficha Técnica / Homenaje + Botón de Galería) */}
                      <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] absolute inset-0 w-full h-full bg-cream border-2 border-ink shadow-[8px_8px_0_0_rgba(26,26,26,0.85)] flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px] bg-opacity-5">
                        <div
                          className={`absolute top-0 right-1/4 h-8 w-32 bg-ink/30 mix-blend-multiply z-20 rotate-[12deg]`}
                        />

                        <div className="bg-cream border-2 border-ink p-8 shadow-sm relative rotate-[-2deg] max-w-sm w-full">
                          <h4 className="font-display text-4xl text-carmine uppercase mb-4">
                            Memoria <i>FIPQ</i>
                          </h4>
                          <hr className="border-ink/20 mb-4" />
                          <p className="font-mono text-sm sm:text-base leading-relaxed text-ink/90 font-bold mb-4 min-h-[60px]">
                            {e.body ?? "Sin notas de archivo disponibles para esta edición."}
                          </p>
                          <hr className="border-ink/20 mt-4 mb-4" />

                          <button
                            type="button"
                            onClick={(ev) => {
                              ev.stopPropagation();
                              setActiveGalleryEdition(e);
                            }}
                            className="w-full py-3 bg-ink border-2 border-ink text-cream hover:bg-carmine hover:border-carmine transition-colors font-mono text-[11px] sm:text-xs tracking-widest uppercase font-bold cursor-pointer mb-3 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-0.5"
                          >
                            Ver Galería
                          </button>

                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 font-bold">
                            Xelajuj No'j — {e.year || "Pendiente"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* MODAL DE GALERÍA INDIVIDUAL POR FESTIVAL (En Construcción) */}
      {activeGalleryEdition && (
        <div
          role="dialog"
          aria-label={`Galería de fotos de ${activeGalleryEdition.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-10 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-cream border-4 border-ink shadow-[12px_12px_0_0_rgba(186,0,56,1)] max-w-4xl w-full p-6 md:p-10 relative rotate-[0.5deg]">
            {/* Botón Cerrar */}
            <button
              onClick={() => setActiveGalleryEdition(null)}
              className="absolute -top-3 -right-3 h-10 w-10 bg-carmine text-cream border-2 border-ink shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-mustard hover:text-ink transition-colors flex items-center justify-center font-bold font-mono text-xl cursor-pointer"
            >
              ×
            </button>

            {/* Cabecera */}
            <div className="text-center mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-carmine font-bold">
                Archivo Histórico <i>FIPQ</i>
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase leading-none mt-2">
                Galería {activeGalleryEdition.title} ({activeGalleryEdition.year})
              </h2>

              {/* Cartel En Construcción */}
              <div className="mt-3 inline-flex items-center gap-2 bg-mustard border-2 border-ink px-5 py-2 font-mono text-xs sm:text-sm uppercase font-bold tracking-wider rotate-[-1deg] shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                Sección en Construcción · Archivo en Proceso
              </div>
            </div>

            {/* Cuadrícula de fotos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {getGalleryImagesForEdition(activeGalleryEdition.number).map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-ink p-1.5 shadow-[4px_4px_0_0_rgba(26,26,26,0.8)] hover:shadow-[6px_6px_0_0_rgba(186,0,56,1)] transition-all duration-300 relative group cursor-pointer overflow-hidden aspect-[4/3]"
                  onClick={() => setSelectedFoto(imgUrl)}
                >
                  <img
                    src={imgUrl}
                    alt={`Foto histórica de la edición ${activeGalleryEdition.number} - Registro ${idx + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-103"
                  />
                </div>
              ))}
            </div>

            {/* Notas del pie */}
            <div className="mt-8 text-center">
              <p className="font-body text-xs text-ink/70 leading-relaxed max-w-xl mx-auto">
                El archivo fotográfico completo de esta edición se encuentra en restauración y
                digitalización. Se muestran fotos de registro general del festival y de la comunidad
                de Quetzaltenango.
              </p>
              <button
                onClick={() => setActiveGalleryEdition(null)}
                className="mt-6 border-2 border-ink bg-ink px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-cream hover:bg-carmine hover:border-carmine transition-colors font-bold cursor-pointer"
              >
                Cerrar Galería
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedFoto && (
        <div
          role="dialog"
          aria-label="Vista ampliada de la imagen"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-lg cursor-zoom-out animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelectedFoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedFoto}
              alt="Foto ampliada del archivo"
              className="max-h-[85vh] w-auto object-contain ring-8 ring-cream shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm"
            />
            <button
              type="button"
              className="mt-8 font-mono text-xs text-cream uppercase tracking-widest bg-carmine px-6 py-3 font-bold hover:bg-mustard hover:text-ink transition-colors cursor-pointer border-2 border-ink shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]"
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
