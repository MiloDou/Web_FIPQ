import { createFileRoute } from "@tanstack/react-router";
import { EditorialManifestoPage } from "@/features/editorial/pages/EditorialManifestoPage";

export const Route = createFileRoute("/editorial/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto Editorial — Metáfora" },
      {
        name: "description",
        content:
          "Manifiesto editorial de Metáfora: imprenta artesanal, voces fuera del catálogo comercial.",
      },
    ],
  }),
  component: EditorialManifestoPage,
});
