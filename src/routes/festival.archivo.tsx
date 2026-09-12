import { createFileRoute } from "@tanstack/react-router";
import { FestivalArchivePage } from "@/features/festival/pages/FestivalArchivePage";

export const Route = createFileRoute("/festival/archivo")({
  head: () => ({
    meta: [
      { title: "Archivo Histórico — Festival FIPQ" },
      {
        name: "description",
        content:
          "Memoria de los festivales anteriores: dos décadas de poesía en el altiplano guatemalteco.",
      },
    ],
  }),
  component: FestivalArchivePage,
});
