import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/features/editorial/pages/PortfolioPage";

export const Route = createFileRoute("/editorial/portafolio")({
  head: () => ({
    meta: [
      { title: "Portafolio Gráfico — Editorial Metáfora" },
      {
        name: "description",
        content:
          "Portafolio gráfico de la Editorial Metáfora: carteles, fanzines, libros y objetos editoriales.",
      },
    ],
  }),
  component: PortfolioPage,
});
