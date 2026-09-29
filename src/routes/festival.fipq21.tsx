import { createFileRoute } from "@tanstack/react-router";
import { Fipq21Page } from "@/features/fipq21/Fipq21Page";

export const Route = createFileRoute("/festival/fipq21")({
  head: () => ({
    meta: [
      { title: "21 FIPQ — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content: "Novedades y anuncios del FIPQ edición 21.",
      },
    ],
  }),
  component: Fipq21Page,
});
