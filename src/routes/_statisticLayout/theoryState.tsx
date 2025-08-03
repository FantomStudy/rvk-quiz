import { createFileRoute } from "@tanstack/react-router";

import { TestStatePage } from "@/modules/public-statistic";

export const Route = createFileRoute("/_statisticLayout/theoryState")({
  component: TestStatePage,
});
