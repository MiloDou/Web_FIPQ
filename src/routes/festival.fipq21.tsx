import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/festival/fipq21")({
  beforeLoad: () => {
    throw redirect({ to: "/festival/21fipq", replace: true });
  },
});
