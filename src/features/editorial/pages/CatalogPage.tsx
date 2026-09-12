import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { catalogByAuthor } from "../data/catalog";

export function CatalogPage() {
  return (
    <>
      <EncabezadoSeccion title="Catálogo">
        Registro de títulos y autores vinculados al catálogo de Metáfora Editores
      </EncabezadoSeccion>

      <div className="space-y-16">
        {Object.entries(catalogByAuthor).map(([autor, titulos]) => (
          <section key={autor}>
            <div className="mb-4 border-b-2 border-ink pb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/75">
                Autor
              </span>
              <h2 className="font-display text-4xl uppercase leading-none">{autor}</h2>
            </div>
            <ul className="divide-y divide-ink/15">
              {titulos.map((titulo) => (
                <li
                  key={titulo.numero}
                  className="flex flex-row items-baseline gap-3 md:grid md:grid-cols-12 md:gap-4 py-3 md:py-4 hover:bg-ink/5 transition-colors px-3 rounded-sm -mx-3"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-ink/85 shrink-0 md:col-span-2">
                    {String(titulo.numero).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg sm:text-xl md:text-2xl uppercase leading-snug font-bold md:col-span-10">
                    {titulo.titulo.split("FIPQ").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i !== arr.length - 1 && <i>FIPQ</i>}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
