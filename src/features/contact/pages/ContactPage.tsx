import { EncabezadoSeccion } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Facebook, Instagram, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function CopyableEmail({
  email,
  className,
}: {
  email: string;
  className: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-start gap-1.5 font-mono text-[10px] leading-tight uppercase font-bold break-all w-full ${className}`}>
      <Mail size={12} className="shrink-0 mt-0.5" />
      <a href={`mailto:${email}`} className="hover:underline flex-1">
        {email}
      </a>
      <button
        onClick={handleCopy}
        title="Copiar correo"
        className="shrink-0 hover:scale-110 transition-transform focus:outline-none"
        aria-label="Copiar correo"
      >
        {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
      </button>
    </div>
  );
}

export function ContactPage() {
  return (
    <>
      <EncabezadoSeccion eyebrow="Contacto" title="Estamos para" accent="escucharte.">
        PARA CONSULTAS SOBRE EL FESTIVAL INTERNACIONAL DE POESÍA (<i>FIPQ</i>), METÁFORA EDITORES
        O PRENSA. ESCRÍBENOS, QUEREMOS MANTENER VIVA LA COMUNICACIÓN.
      </EncabezadoSeccion>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4 max-w-7xl mx-auto">
          {/* Contacto FIPQ */}
          <div className="bg-ink text-cream p-6 shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] flex flex-col">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-6 text-cream font-bold">
              CONTACTO <i>FIPQ</i>
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 mb-12 uppercase flex-grow">
              INFORMACIÓN GENERAL SOBRE EL FESTIVAL, VOLUNTARIADOS, PARTICIPACIÓN DE LA COMUNIDAD Y
              LECTURA DE POESÍA.
            </p>
            <CopyableEmail 
              email="correofipquetzaltenango@gmail.com"
              className="text-carmine hover:text-white transition-colors"
            />
          </div>

          {/* Metáfora Editores */}
          <div className="bg-cream text-ink p-6 border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] flex flex-col">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-6 font-bold">
              METÁFORA EDITORES
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-ink/90 mb-12 uppercase flex-grow">
              CONSULTAS SOBRE NUESTRO CATÁLOGO, DISTRIBUCIÓN DE LIBROS, Y PROYECTOS DE PUBLICACIÓN.
            </p>
            <CopyableEmail 
              email="correofipquetzaltenango@gmail.com"
              className="text-carmine hover:text-ink transition-colors"
            />
          </div>

          {/* Prensa */}
          <div className="bg-carmine text-cream p-6 border-2 border-ink shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] flex flex-col">
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-6 font-bold">PRENSA</h3>
            <p className="font-body text-sm sm:text-base leading-relaxed text-cream/90 mb-12 uppercase flex-grow">
              ENTREVISTAS, COBERTURA DE MEDIOS, COMUNICADOS DE PRENSA Y ALIANZAS DE DIFUSIÓN
              CULTURAL.
            </p>
            <CopyableEmail 
              email="correofipquetzaltenango@gmail.com"
              className="text-ink hover:text-white transition-colors"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-16 max-w-5xl mx-auto border-2 border-ink p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-white shadow-[6px_6px_0_0_#121212]">
          <div className="text-center md:text-left">
            <h3 className="font-display text-4xl uppercase mb-2 font-black text-ink">
              REDES SOCIALES
            </h3>
            <p className="font-body text-base leading-relaxed text-ink/80 uppercase">
              SÍGUENOS EN NUESTRAS PLATAFORMAS OFICIALES PARA ESTAR AL TANTO DE TODAS LAS
              ACTIVIDADES.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="inline-flex items-center justify-center gap-3 bg-ink text-cream font-display text-xl uppercase tracking-wider hover:bg-carmine shadow-[4px_4px_0_0_#121212]">
              <a
                href="https://www.facebook.com/MetaforaFIPQ?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                aria-label="Ir a nuestra página de Facebook"
              >
                <Facebook size={22} />
                FACEBOOK
              </a>
            </Button>
            <Button asChild size="lg" className="inline-flex items-center justify-center gap-3 bg-ink text-cream font-display text-xl uppercase tracking-wider hover:bg-carmine shadow-[4px_4px_0_0_#121212]">
              <a
                href="https://www.instagram.com/fipq_metafora/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ir a nuestro perfil de Instagram"
              >
                <Instagram size={22} />
                INSTAGRAM
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
