import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/statistic";

export const Route = createFileRoute("/_statisticLayout/statistic/practice")({
  component: PracticePage,
});
