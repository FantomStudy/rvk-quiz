import { createFileRoute } from "@tanstack/react-router";

import { TestStatePage } from "@/modules/statistic";

export const Route = createFileRoute("/_statisticLayout/statistic/theory")({
  component: TestStatePage,
});
