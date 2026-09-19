import { EncabezadoSitio } from "@/components/layout/SiteHeader";
import { PieSitio } from "@/components/layout/SiteFooter";
import { HeroSection } from "../components/HeroSection";
import { BifurcationSection } from "../components/BifurcationSection";
import { ManifestoPreview } from "../components/ManifestoPreview";

export function HomePage() {
  return (
    <div className="bg-cream text-ink font-body">
      <EncabezadoSitio />
      
      <HeroSection />
      
      <BifurcationSection />
      
      <ManifestoPreview />

      <PieSitio />
    </div>
  );
}
