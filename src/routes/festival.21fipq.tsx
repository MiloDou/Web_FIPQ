import { createFileRoute } from "@tanstack/react-router";
import { Fipq21Page } from "@/features/fipq21/Fipq21Page";

export const Route = createFileRoute("/festival/21fipq")({
  head: () => ({
    meta: [
      { title: "21FIPQ — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Del 25 al 28 de noviembre de 2026, poesía libre y gratuita en Quetzaltenango y el occidente de Guatemala. Conoce el programa y el kit de prensa del 21 FIPQ.",
      },
    ],
  }),
  component: Fipq21Page,
});
