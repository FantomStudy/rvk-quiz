import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/admin/statistic";

export const Route = createFileRoute("/practice")({
  component: PracticePage,
});
