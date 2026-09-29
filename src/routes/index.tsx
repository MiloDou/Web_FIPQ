import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIPQ" },
      {
        name: "description",
        content:
          "Lecturas públicas, talleres, comunidad y memoria del Festival Internacional de Poesía de Quetzaltenango.",
      },
      { property: "og:title", content: "FIPQ" },
      {
        property: "og:description",
        content:
          "Poesía en acción: una plataforma cultural construida desde Xelajuj No’j y el occidente de Guatemala.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://fipqmetafora.com/#website",
              url: "https://fipqmetafora.com/",
              name: "FIPQ",
              alternateName: "Festival Internacional de Poesía de Quetzaltenango",
              inLanguage: "es-GT",
              publisher: { "@id": "https://fipqmetafora.com/#organization" },
            },
            {
              "@type": "Organization",
              "@id": "https://fipqmetafora.com/#organization",
              name: "Festival Internacional de Poesía de Quetzaltenango",
              alternateName: "FIPQ",
              url: "https://fipqmetafora.com/",
              logo: "https://fipqmetafora.com/logo.png",
              sameAs: [
                "https://www.facebook.com/MetaforaFIPQ",
                "https://www.instagram.com/fipq_metafora/",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
