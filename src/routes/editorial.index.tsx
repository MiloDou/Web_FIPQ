import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/editorial/")({
  beforeLoad: () => {
    throw redirect({ to: "/editorial/catalogo", replace: true });
  },
});
