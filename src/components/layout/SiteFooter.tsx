import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";

export function PieSitio() {
  return (
    <footer className="bg-cream pt-24 pb-12 px-6 border-t-4 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8 justify-between items-end mb-16">
          <div className="max-w-sm">
            <div className="text-5xl font-display text-carmine mb-4 leading-none uppercase">
              <i>FIPQ</i>
            </div>
            <p className="text-xs font-mono uppercase leading-relaxed">
              Festival Internacional de Poesía de Quetzaltenango y Metáfora Editores.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/MetaforaFIPQ?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Metáfora FIPQ"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream font-display text-sm uppercase hover:bg-carmine transition-colors"
            >
              <Facebook size={16} aria-hidden="true" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/fipq_metafora/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de FIPQ Metáfora"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream font-display text-sm uppercase hover:bg-carmine transition-colors"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@fipqmetaforaquetzaltenango4136"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube de FIPQ Metáfora Quetzaltenango"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream font-display text-sm uppercase hover:bg-carmine transition-colors"
            >
              <Youtube size={16} aria-hidden="true" />
              YouTube
            </a>
            <a
              href="https://x.com/MetaforaFIPQ"
              target="_blank"
              rel="noreferrer"
              aria-label="X de Metáfora FIPQ"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream font-display text-sm uppercase hover:bg-carmine transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://open.spotify.com/show/1NorotrpoNkC6iN6nBN7rT"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify de FIPQ Metáfora"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream font-display text-sm uppercase hover:bg-carmine transition-colors"
            >
              <Music2 size={16} aria-hidden="true" />
              Spotify
            </a>
          </div>
        </div>
        <div className="border-t border-ink/20 pt-8 flex flex-col md:flex-row gap-4 justify-between text-[10px] font-mono uppercase tracking-widest text-ink/60">
          <span>© {new Date().getFullYear()} Metáfora Editores</span>
          <span>Hecho en el valle de Xelajuj No’j</span>
        </div>
      </div>
    </footer>
  );
}
