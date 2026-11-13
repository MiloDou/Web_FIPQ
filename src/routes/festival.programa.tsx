import { createFileRoute } from "@tanstack/react-router";
import { FestivalProgramPage } from "@/features/festival/pages/FestivalProgramPage";

export const Route = createFileRoute("/festival/programa")({
  head: () => ({
    meta: [
      { title: "Agenda de actividades — Festival FIPQ" },
      {
        name: "description",
        content:
          "Agenda completa del 21 Festival Internacional de Poesía de Quetzaltenango: horarios, actividades, sedes y poetas participantes.",
      },
    ],
  }),
  component: FestivalProgramPage,
});
