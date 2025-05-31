import { createFileRoute } from "@tanstack/react-router";

import { ResultsPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/results")({
  component: ResultsPage,
});
