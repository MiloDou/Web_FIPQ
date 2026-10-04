import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { videoFipq21 } from "@/assets/contenido";

export function Fipq21Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return;

    const syncMotionPreference = () => {
      if (motionPreference.matches) {
        video.pause();
        setIsPlaying(false);
        return;
      }

      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);
    return () => motionPreference.removeEventListener("change", syncMotionPreference);
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1222] p-4">
      <video
        ref={videoRef}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="fixed inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={videoFipq21} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[#080612]/55" />
      <h1 className="relative z-0 font-display text-5xl uppercase leading-none tracking-wide text-cream drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] sm:text-7xl md:text-9xl">
        21FIPQ
        <span className="sr-only"> — Festival Internacional de Poesía de Quetzaltenango</span>
      </h1>
      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pausar animación de fondo" : "Reanudar animación de fondo"}
        aria-pressed={isPlaying}
        className="fixed bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center border border-cream/50 bg-ink/80 text-cream transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2"
      >
        {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
      </button>
    </main>
  );
}
