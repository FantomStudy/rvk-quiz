import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/statistic";

export const Route = createFileRoute("/practice")({
  component: PracticePage,
});
