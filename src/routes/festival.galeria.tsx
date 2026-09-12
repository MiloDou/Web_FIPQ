import { createFileRoute } from "@tanstack/react-router";
import { FestivalGalleryPage } from "@/features/festival/pages/FestivalGalleryPage";

export const Route = createFileRoute("/festival/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Festival FIPQ" },
      {
        name: "description",
        content: "Galería fotográfica del Festival Internacional de Poesía de Quetzaltenango.",
      },
    ],
  }),
  component: FestivalGalleryPage,
});
