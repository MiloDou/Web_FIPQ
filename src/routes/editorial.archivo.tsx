import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSeccion } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/editorial/archivo")({
  head: () => ({
    meta: [
      { title: "Archivo Editorial — Metáfora" },
      {
        name: "description",
        content: "Archivo histórico de ediciones, agotados y rarezas de la Editorial Metáfora.",
      },
    ],
  }),
  component: PaginaArchivoEditorial,
});

const agotados = [
  {
    year: "2014",
    titulo: "Cuaderno Negro",
    autor: "Humberto Ak’abal",
    tiraje: "300 ejemplares · agotado",
  },
  { year: "2013", titulo: "Marimba Insomne", autor: "VV.AA.", tiraje: "500 ejemplares · agotado" },
  {
    year: "2012",
    titulo: "El Cuerpo Habla",
    autor: "Aída Toledo",
    tiraje: "250 ejemplares · agotado",
  },
  {
    year: "2011",
    titulo: "Mitad de Pájaro",
    autor: "Wingston González",
    tiraje: "200 ejemplares · agotado",
  },
  { year: "2010", titulo: "Primer Riso", autor: "VV.AA.", tiraje: "150 ejemplares · agotado" },
  {
    year: "2009",
    titulo: "Acta Fundacional",
    autor: "Colectivo Metáfora",
    tiraje: "100 ejemplares · agotado",
  },
];

function PaginaArchivoEditorial() {
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

      <div className="bg-ink text-cream p-8 md:p-12">
        <table className="w-full text-left">
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
                className="border-b border-cream/10 hover:bg-carmine/20 transition-colors"
              >
                <td className="py-4 font-mono text-xs sm:text-sm text-carmine font-bold align-top">
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
        <a href="mailto:archivo@fipq.org" className="text-carmine underline">
          archivo@fipq.org
        </a>
        .
      </p>
    </>
  );
}
