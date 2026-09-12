import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIPQ — Festival Internacional de Poesía de Quetzaltenango" },
      {
        name: "description",
        content:
          "Lecturas públicas, talleres, comunidad y memoria del Festival Internacional de Poesía de Quetzaltenango.",
      },
      { property: "og:title", content: "FIPQ + Editorial Metáfora" },
      {
        property: "og:description",
        content:
          "Poesía en acción: una plataforma cultural construida desde Xelajuj No’j y el occidente de Guatemala.",
      },
    ],
  }),
  component: HomePage,
});
