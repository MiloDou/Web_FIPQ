import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSitio } from "@/components/layout/SiteHeader";
import { PieSitio } from "@/components/layout/SiteFooter";
import { DisenoRama } from "@/components/layout/BranchLayout";

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
      <DisenoRama branch="festival" tagline="" />
      <PieSitio />
    </div>
  );
}
