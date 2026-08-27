import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSitio } from "@/components/site/SiteHeader";
import { PieSitio } from "@/components/site/SiteFooter";
import { DisenoRama } from "@/components/site/BranchLayout";

export const Route = createFileRoute("/festival")({
  head: () => ({
    meta: [
      { title: "Festival — FIPQ" },
      {
        name: "description",
        content:
          "Festival Internacional de Poesía de Quetzaltenango: programa, galería, manifiesto y archivo.",
      },
    ],
  }),
  component: DisenoFestival,
});

function DisenoFestival() {
  return (
    <div className="bg-cream text-ink font-body min-h-screen flex flex-col">
      <EncabezadoSitio />
      <DisenoRama
        branch="festival"
        tagline="Poesía en acción: lecturas, talleres y comunidad desde Xelajuj No’j y el occidente."
      />
      <PieSitio />
    </div>
  );
}
