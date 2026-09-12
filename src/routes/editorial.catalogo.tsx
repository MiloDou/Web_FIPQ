import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/features/editorial/pages/CatalogPage";

export const Route = createFileRoute("/editorial/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Editorial Metáfora" },
      {
        name: "description",
        content: "Catálogo completo de la Editorial Metáfora: antologías, poemarios y ensayos.",
      },
    ],
  }),
  component: CatalogPage,
});
