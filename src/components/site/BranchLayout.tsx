import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { ReactNode } from "react";
import { imagenesSitio } from "@/assets/contenido";

const configuracionRamas = {
  festival: {
    title: "Festival",
    headerClass: "bg-carmine text-cream",
    bgImage: imagenesSitio.festivalHeaderBg,
  },
  editorial: {
    title: "Metáfora",
    headerClass: "bg-ink text-cream",
    bgImage: imagenesSitio.editorialHeaderBg,
  },
} as const;

export function DisenoRama({
  branch,
  tagline,
  children,
}: {
  branch: keyof typeof configuracionRamas;
  tagline: string;
  children?: ReactNode;
}) {
  const config = configuracionRamas[branch];

  return (
    <>
      <section className={`${config.headerClass} relative overflow-hidden border-b-4 border-ink min-h-[300px] md:min-h-[380px] py-16 md:py-20 flex flex-col justify-center`}>
        {/* Full-bleed Background Image with Flat screen-print texture (no gradients) */}
        {config.bgImage && (
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={config.bgImage}
              alt=""
              className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.85] opacity-20 mix-blend-multiply"
            />
          </div>
        )}

        {/* Text overlaid directly on the flat textured background (highly legible) */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 flex flex-col justify-center">
          <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-cream uppercase leading-none tracking-tight">
            {config.title}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base sm:text-lg md:text-xl text-cream opacity-90 leading-relaxed tracking-wide">
            {tagline}
          </p>
        </div>
      </section>
      <main id="contenido" className="bg-cream text-ink">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {children}
          <Outlet />
        </div>
      </main>
    </>
  );
}
