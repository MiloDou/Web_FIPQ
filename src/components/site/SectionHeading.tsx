import type { ReactNode } from "react";

export function EncabezadoSeccion({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <span className="block font-mono text-xs uppercase tracking-[0.25em] text-carmine font-bold mb-3">
          {eyebrow}
        </span>
      )}
      <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[1.05] tracking-wide font-bold">
        {title}
        {accent && <span className="text-carmine italic"> {accent}</span>}
      </h1>
      {children && (
        <div className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink/85 font-medium">
          {children}
        </div>
      )}
    </div>
  );
}
