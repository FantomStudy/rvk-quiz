import { createFileRoute } from "@tanstack/react-router";

import { CommonStatePage } from "@/modules/statistic";

export const Route = createFileRoute("/_statisticLayout/statistic/common")({
  component: CommonStatePage,
});
