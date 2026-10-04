import { Link } from "@tanstack/react-router";
import { imagenesSitio, logosPortada } from "@/assets/contenido";

export function HeroSection() {
  return (
    <section className="relative flex h-[100svh] min-h-[620px] w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-0 pb-8 pt-16 text-center">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={imagenesSitio.homeBackground}
          alt=""
          className="hero-backdrop-arrive h-full w-full object-[center_58%] object-cover grayscale opacity-90 blur-[3px]"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>

      <div className="relative z-10 my-auto flex w-full flex-col items-center">
        <div
          aria-hidden="true"
          className="hero-mark-print mb-1 h-16 w-16 -translate-y-6 bg-cream sm:mb-2 sm:h-20 sm:w-20"
          style={{
            maskImage: `url("${logosPortada.festival}")`,
            WebkitMaskImage: `url("${logosPortada.festival}")`,
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
        />

        <h1 className="sr-only">Festival Internacional de Poesía de Quetzaltenango</h1>
        <div
          role="img"
          aria-label="Festival Internacional de Poesía de Quetzaltenango"
          className="hero-wordmark-print aspect-[1.219] w-[min(86vw,520px)] bg-cream"
          style={{
            maskImage: `url("${logosPortada.central}")`,
            WebkitMaskImage: `url("${logosPortada.central}")`,
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </section>
  );
}
