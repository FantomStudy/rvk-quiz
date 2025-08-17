import { createFileRoute } from "@tanstack/react-router";

import { CommonPage } from "@/modules/admin/statistic";

export const Route = createFileRoute("/_adminLayout/statistic/common")({
  component: CommonPage,
});
