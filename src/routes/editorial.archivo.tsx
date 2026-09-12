import { createFileRoute } from "@tanstack/react-router";
import { EditorialArchivePage } from "@/features/editorial/pages/EditorialArchivePage";

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
  component: EditorialArchivePage,
});
