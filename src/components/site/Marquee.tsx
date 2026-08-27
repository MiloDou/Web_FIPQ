import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export function Marquee({
  children,
  className = "",
  speed = "normal",
  direction = "left",
}: MarqueeProps) {
  // We'll use arbitrary CSS variables for duration and direction, or Tailwind classes if defined
  const durationStyle =
    speed === "slow" ? "40s" : speed === "fast" ? "15s" : "25s";
  const directionStyle = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={`relative flex w-full overflow-hidden border-y-[3px] border-ink py-3 ${className}`}
    >
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-12 pr-12 animate-marquee"
        style={{ 
          animationDuration: durationStyle,
          animationDirection: directionStyle 
        }}
      >
        {children}
      </div>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-12 pr-12 animate-marquee"
        style={{ 
          animationDuration: durationStyle,
          animationDirection: directionStyle 
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
