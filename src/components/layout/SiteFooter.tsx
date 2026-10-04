import { Link, useLocation } from "@tanstack/react-router";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { logoMetaforaCompleto } from "@/assets/contenido";

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-ink/80 transition-colors hover:text-carmine focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-2";

const socialClass =
  "inline-flex min-h-11 items-center gap-1.5 px-1.5 text-xs text-ink/80 transition-colors hover:text-carmine focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-2";

export function PieSitio() {
  const isFipq21 = useLocation().pathname === "/festival/21fipq";

  return (
    <footer className="border-t-2 border-carmine bg-cream px-5 pb-4 pt-8 sm:px-8 sm:pt-9">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 border-b border-ink/20 pb-7 sm:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1.2fr] lg:items-start lg:gap-8">
          <section aria-label="Identidad institucional">
            <div className="flex min-h-12 items-center gap-5">
              <span className="font-display text-3xl leading-none text-carmine">
                {isFipq21 ? "21FIPQ" : "FIPQ"}
              </span>
              {logoMetaforaCompleto && (
                <img
                  src={logoMetaforaCompleto}
                  alt="Metáfora, Literatura y Arte"
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              )}
            </div>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-ink/75">Desde Xelajuj</p>
          </section>

          <nav aria-label="Enlaces institucionales" className="grid grid-cols-2 gap-x-5">
            <div>
              <h2 className="mb-2 font-display text-sm uppercase tracking-wide text-ink">
                Festival
              </h2>
              <ul className="space-y-0.5">
                <li>
                  <Link to="/festival/21fipq" className={linkClass}>
                    21FIPQ
                  </Link>
                </li>
                <li>
                  <Link to="/festival/manifiesto" className={linkClass}>
                    Manifiesto
                  </Link>
                </li>
                <li>
                  <Link to="/festival/programa" className={linkClass}>
                    Programa
                  </Link>
                </li>
                <li>
                  <Link to="/festival/galeria" className={linkClass}>
                    Galería
                  </Link>
                </li>
                <li>
                  <Link to="/festival/archivo" className={linkClass}>
                    Archivo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-display text-sm uppercase tracking-wide text-ink">
                Metáfora Editores
              </h2>
              <ul className="space-y-0.5">
                <li>
                  <Link to="/editorial/catalogo" className={linkClass}>
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link to="/editorial/contacto" className={linkClass}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <section aria-labelledby="footer-contacto">
            <h2
              id="footer-contacto"
              className="mb-2 font-display text-sm uppercase tracking-wide text-ink"
            >
              Contacto
            </h2>
            <a
              href="mailto:correofipquetzaltenango@gmail.com"
              className="inline-flex min-h-11 items-center break-all text-sm text-ink/80 transition-colors hover:text-carmine focus-visible:outline-2 focus-visible:outline-carmine focus-visible:outline-offset-2"
            >
              correofipquetzaltenango@gmail.com
            </a>
            <nav aria-label="Redes sociales" className="mt-1 flex flex-wrap items-center gap-x-1">
              <a
                href="https://www.facebook.com/MetaforaFIPQ?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Metáfora FIPQ"
                className={socialClass}
              >
                <Facebook size={14} aria-hidden="true" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/fipq_metafora/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de FIPQ Metáfora"
                className={socialClass}
              >
                <Instagram size={14} aria-hidden="true" /> Instagram
              </a>
              <a
                href="https://www.youtube.com/@fipqmetaforaquetzaltenango4136"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube de FIPQ Metáfora Quetzaltenango"
                className={socialClass}
              >
                <Youtube size={14} aria-hidden="true" /> YouTube
              </a>
              <a
                href="https://x.com/MetaforaFIPQ"
                target="_blank"
                rel="noreferrer"
                aria-label="X de Metáfora FIPQ"
                className={socialClass}
              >
                X
              </a>
              <a
                href="https://open.spotify.com/show/1NorotrpoNkC6iN6nBN7rT"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify de FIPQ Metáfora"
                className={socialClass}
              >
                <Music2 size={14} aria-hidden="true" /> Spotify
              </a>
            </nav>
          </section>
        </div>

        <div className="flex flex-col gap-1.5 pt-3 font-mono text-xs text-ink/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Festival Internacional de Poesía de Quetzaltenango y
            Metáfora Editores
          </p>
        </div>
      </div>
    </footer>
  );
}
