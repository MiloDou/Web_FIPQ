import { Link, Outlet, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

type EnlaceRama = { to: string; label: string };

const configuracionRamas = {
  festival: {
    eyebrow: " Acción Poética",
    title: "Festival",
    accent: "Metáfora ",
    headerClass: "bg-carmine text-cream",
  },
  editorial: {
    eyebrow: "Palabra Impresa",
    title: "Metáfora",
    accent: "Editorial Metáfora",
    headerClass: "bg-ink text-cream",
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
      <section className={`${config.headerClass} relative overflow-hidden border-b-4 border-ink`}>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.3em] opacity-80">
                {config.eyebrow}
              </span>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mt-2">
                {config.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm md:text-base opacity-80">{tagline}</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
              {config.accent}
            </span>
          </div>
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
