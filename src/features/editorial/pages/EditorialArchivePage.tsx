import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { agotados } from "../data/archive";

export function EditorialArchivePage() {
  return (
    <>
      <EncabezadoSeccion
        eyebrow="Ediciones Agotadas · Memoria Viva"
        title="Lo que ya"
        accent="no se imprime."
      >
        Todos estos títulos están agotados. Algunos viven en bibliotecas, otros en cajones. Si
        tienes uno, eres parte del archivo.
      </EncabezadoSeccion>

      <div className="bg-ink text-cream p-8 md:p-12 overflow-x-auto">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b-2 border-cream/30">
              <th className="py-3 font-mono text-[11px] uppercase tracking-widest text-mustard">
                Año
              </th>
              <th className="py-3 font-mono text-[11px] uppercase tracking-widest text-mustard">
                Título
              </th>
              <th className="py-3 font-mono text-[11px] uppercase tracking-widest text-mustard hidden md:table-cell">
                Autoría
              </th>
              <th className="py-3 font-mono text-[11px] uppercase tracking-widest text-mustard hidden md:table-cell">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {agotados.map((a) => (
              <tr
                key={a.titulo}
                className="border-b border-cream/10 hover:bg-cream/10 transition-colors"
              >
                <td className="py-4 font-mono text-xs sm:text-sm text-mustard font-bold align-top">
                  {a.year}
                </td>
                <td className="py-4 font-display text-lg sm:text-xl md:text-2xl uppercase leading-snug font-bold align-top">
                  <span>{a.titulo}</span>
                  <div className="md:hidden mt-1 font-body text-xs italic text-cream/80 normal-case font-normal">
                    {a.autor} <span className="text-cream/40">·</span>{" "}
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mustard font-semibold">
                      {a.tiraje}
                    </span>
                  </div>
                </td>
                <td className="py-4 font-body text-sm italic text-cream/80 font-medium hidden md:table-cell align-top">
                  {a.autor}
                </td>
                <td className="py-4 font-mono text-[11px] uppercase tracking-widest text-cream/70 font-medium hidden md:table-cell align-top">
                  {a.tiraje}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-12 max-w-2xl text-base text-ink/75 leading-relaxed">
        ¿Tienes un ejemplar agotado y quieres aportarlo al archivo digital de la editorial?
        Escríbenos a{" "}
        <a
          href="mailto:archivo@fipq.org"
          className="text-ink font-bold underline hover:text-ink/80 active:text-ink/60 transition-colors inline-block py-2 px-1"
        >
          archivo@fipq.org
        </a>
        .
      </p>
    </>
  );
}
