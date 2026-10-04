import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSitio } from "@/components/layout/SiteHeader";
import { PieSitio } from "@/components/layout/SiteFooter";
import { DisenoRama } from "@/components/layout/BranchLayout";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: "Editorial Metáfora — FIPQ" },
      {
        name: "description",
        content: "Editorial Metáfora: catálogo y archivo del sello independiente del FIPQ.",
      },
    ],
  }),
  component: DisenoEditorial,
});

function DisenoEditorial() {
  return (
    <div className="bg-cream text-ink font-body min-h-screen flex flex-col">
      <EncabezadoSitio />
      <DisenoRama branch="editorial" tagline="" />
      <PieSitio />
    </div>
  );
}
