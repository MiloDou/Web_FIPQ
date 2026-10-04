import { createFileRoute } from "@tanstack/react-router";
import { Fipq21Page } from "@/features/fipq21/Fipq21Page";

export const Route = createFileRoute("/festival/21fipq")({
  head: () => ({
    meta: [
      { title: "21FIPQ — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content: "Novedades y anuncios de 21FIPQ.",
      },
    ],
  }),
  component: Fipq21Page,
});
