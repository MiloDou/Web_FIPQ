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
    title: "Metáfora Editores",
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
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const subRoute = pathSegments.length > 1 ? pathSegments[pathSegments.length - 1].replace(/-/g, " ") : "";

  return (
    <>
      <section
        className={`${config.headerClass} relative overflow-hidden border-b-4 border-ink min-h-[160px] md:min-h-[200px] pt-24 pb-8 md:pt-28 md:pb-10 flex flex-col justify-center`}
      >
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
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest opacity-80">
              {config.title} {subRoute && ` / ${subRoute}`}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight">
              {subRoute ? subRoute : config.title}
            </h2>
          </div>
          <p className="mt-3 max-w-2xl font-body text-sm sm:text-base md:text-lg text-cream opacity-90 leading-relaxed tracking-wide">
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
