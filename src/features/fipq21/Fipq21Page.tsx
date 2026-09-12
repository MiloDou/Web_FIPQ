import { contenidoFipq21 } from "./contenido";
import { EncabezadoSeccion } from "@/components/shared/SectionHeading";

export function Fipq21Page() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 bg-cream text-ink">
      <EncabezadoSeccion eyebrow={<span><i>FIPQ</i> 21</span>} title={<i>FIPQ</i>} accent="21">
        Lanzamiento y anuncios de la vigésima primera edición.
      </EncabezadoSeccion>

      <div className="mt-12 flex justify-center">
        <div className="border-4 border-ink p-2 bg-white shadow-[8px_8px_0_0_#121212] rounded-none">
          {/* Simple Instagram Embed for now */}
          <iframe
            src={contenidoFipq21.instagramEmbedUrl}
            width="400"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="w-full max-w-[400px]"
            title="FIPQ 21 Instagram Reel"
          ></iframe>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={contenidoFipq21.instagramReelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-carmine text-cream font-display text-sm uppercase tracking-widest hover:bg-ink transition-colors shadow-[4px_4px_0_0_#121212] hover:shadow-[4px_4px_0_0_#b23a3a] hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Ver en Instagram
        </a>
      </div>
    </article>
  );
}
