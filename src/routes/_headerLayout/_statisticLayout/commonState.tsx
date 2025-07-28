import { createFileRoute } from "@tanstack/react-router";

import { CommonStatePage } from "@/modules/public-statistic";

export const Route = createFileRoute("/_headerLayout/_statisticLayout/commonState")({
  component: CommonStatePage,
});
