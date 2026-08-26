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
  links,
  children,
}: {
  branch: keyof typeof configuracionRamas;
  tagline: string;
  links: EnlaceRama[];
  children?: ReactNode;
}) {
  const location = useLocation();
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
          <nav className="mt-8 flex items-center overflow-x-auto no-scrollbar gap-1.5 border-t border-cream/20 pt-4 pb-1 -mx-6 px-6 sm:mx-0 sm:px-0">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${
                    active
                      ? "bg-cream text-ink font-bold shadow-sm"
                      : "text-cream/80 hover:bg-cream/15 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
      <main className="bg-cream text-ink">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {children}
          <Outlet />
        </div>
      </main>
    </>
  );
}
