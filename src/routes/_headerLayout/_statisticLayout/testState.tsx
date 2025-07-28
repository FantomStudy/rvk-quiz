import { createFileRoute } from "@tanstack/react-router";

import { TestStatePage } from "@/modules/public-statistic";

export const Route = createFileRoute("/_headerLayout/_statisticLayout/testState")({
  component: TestStatePage,
});
