import { createFileRoute } from "@tanstack/react-router";
import { FestivalProgramPage } from "@/features/festival/pages/FestivalProgramPage";

export const Route = createFileRoute("/festival/programa")({
  head: () => ({
    meta: [
      { title: "Agenda de actividades — Festival FIPQ" },
      {
        name: "description",
        content:
          "Agenda actual del Festival Internacional de Poesía de Quetzaltenango. Próximamente.",
      },
    ],
  }),
  component: FestivalProgramPage,
});
