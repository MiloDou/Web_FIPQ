import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact/pages/ContactPage";

export const Route = createFileRoute("/editorial/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — FIPQ y Metáfora Editores" },
      {
        name: "description",
        content:
          "Ponte en contacto con el Festival Internacional de Poesía de Quetzaltenango y Metáfora Editores. Servicios editoriales, prensa y consultas generales.",
      },
    ],
  }),
  component: ContactPage,
});
