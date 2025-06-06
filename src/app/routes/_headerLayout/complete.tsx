import { createFileRoute } from "@tanstack/react-router";

import CompletePage from "@pages/complete/CompletePage";

export const Route = createFileRoute("/_headerLayout/complete")({
  component: CompletePage,
});
