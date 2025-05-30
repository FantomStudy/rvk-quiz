import { createFileRoute } from "@tanstack/react-router";

import { Analytic } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/analytic")({
  component: Analytic,
});
