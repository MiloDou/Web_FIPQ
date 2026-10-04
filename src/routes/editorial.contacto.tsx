import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact/pages/ContactPage";

export const Route = createFileRoute("/editorial/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — FIPQ y Metáfora Editores" },
      {
        name: "description",
        content:
          "Ponte en contacto con el Festival Internacional de Poesía de Quetzaltenango y Metáfora Editores para consultas generales y servicios editoriales.",
      },
    ],
  }),
  component: ContactPage,
});
