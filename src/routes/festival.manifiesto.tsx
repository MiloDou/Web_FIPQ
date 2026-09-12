import { createFileRoute } from "@tanstack/react-router";
import { FestivalManifestoPage } from "@/features/festival/pages/FestivalManifestoPage";

export const Route = createFileRoute("/festival/manifiesto")({
  head: () => ({
    meta: [
      {
        title: " Festival Internacional de Poesía de Quetzaltenango",
      },
      {
        name: "description",
        content:
          "El manifiesto poético y los principios del Festival Internacional de Poesía de Quetzaltenango. Un canto colectivo a la memoria, la tierra y la resistencia.",
      },
    ],
  }),
  component: FestivalManifestoPage,
});
