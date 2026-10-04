import { useEffect, useRef, useState } from "react";

export function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] = useState<"ready" | "hidden" | "visible">("ready");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealState("visible");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setRevealState("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealState("visible");
          observer.unobserve(entry.target);
        } else if (entry.boundingClientRect.top >= window.innerHeight) {
          setRevealState("hidden");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-state={revealState}
      className={`animated-section transition-[opacity,transform] duration-[650ms] ease-out ${
        revealState === "hidden" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
