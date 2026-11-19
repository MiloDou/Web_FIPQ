import { createFileRoute } from "@tanstack/react-router";
import { Fipq21PrensaPage } from "@/features/fipq21/Fipq21PrensaPage";

export const Route = createFileRoute("/festival/prensa-21fipq")({
  head: () => ({
    meta: [
      { title: "Comunicado de prensa — 21FIPQ" },
      {
        name: "description",
        content: "Comunicado de prensa del 21 Festival Internacional de Poesía de Quetzaltenango.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Fipq21PrensaPage,
});
