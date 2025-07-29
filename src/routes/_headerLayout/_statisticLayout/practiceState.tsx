import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/public-statistic";

export const Route = createFileRoute(
  "/_headerLayout/_statisticLayout/practiceState"
)({
  component: PracticePage,
});
