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
        className={`${config.headerClass} relative overflow-hidden border-b-4 border-ink min-h-[220px] md:min-h-[350px] pt-24 pb-8 md:pt-32 md:pb-12 flex flex-col justify-center`}
      >
        {/* Full-bleed Background Image with Flat screen-print texture (no gradients) */}
        {config.bgImage && (
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={config.bgImage}
              alt=""
              className="w-full h-full object-cover object-[center_51%] grayscale contrast-[1.2] opacity-25 mix-blend-multiply"
            />
          </div>
        )}

        {/* Text overlaid directly on the flat textured background (highly legible) */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 flex flex-col justify-center">
          <div className="flex flex-col gap-1">
            <span className="font-body text-xs sm:text-sm tracking-wide opacity-60 font-medium">
              {config.title}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight">
              {subRoute ? subRoute : config.title}
            </h2>
          </div>
          <p className="mt-3 max-w-2xl font-body text-sm sm:text-base text-cream opacity-80 leading-relaxed font-light">
            {tagline}
          </p>
        </div>
      </section>
      <main id="contenido-pagina" className="bg-cream text-ink scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {children}
          <Outlet />
        </div>
      </main>
    </>
  );
}
