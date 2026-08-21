import type { ReactNode } from "react";

const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"];
const tapeColors = ["bg-mustard/70", "bg-carmine/60", "bg-ink/40"];

export function CartelCollage({
  index = 0,
  tag,
  title,
  meta,
  image,
  children,
}: {
  index?: number;
  tag?: string;
  title: string;
  meta?: string;
  image?: string;
  children?: ReactNode;
}) {
  const rotate = rotations[index % rotations.length];
  const tape = tapeColors[index % tapeColors.length];
  return (
    <article
      className={`relative bg-cream ring-1 ring-ink/10 shadow-[6px_6px_0_0_rgba(26,26,26,0.85)] ${rotate} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
    >
      <span
        className={`absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 ${tape} mix-blend-multiply`}
      />
      {image && (
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover grayscale contrast-125"
          />
          {tag && (
            <span className="absolute top-3 left-3 bg-mustard px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className="p-5 border-t border-ink/15">
        <h3 className="font-display text-2xl uppercase leading-tight">{title}</h3>
        {meta && (
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-carmine">
            {meta}
          </p>
        )}
        {children && <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>}
      </div>
    </article>
  );
}
