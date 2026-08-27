import { createFileRoute } from "@tanstack/react-router";
import { EncabezadoSitio } from "@/components/site/SiteHeader";
import { PieSitio } from "@/components/site/SiteFooter";
import { DisenoRama } from "@/components/site/BranchLayout";

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
      <DisenoRama
        branch="editorial"
        tagline="De la voz al libro. Memoria editorial y poesía centroamericana desde el festival."
      />
      <PieSitio />
    </div>
  );
}
