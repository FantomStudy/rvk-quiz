import { createFileRoute } from "@tanstack/react-router";

import { TheoryPage } from "@/modules/admin/statistic";

export const Route = createFileRoute("/_adminLayout/statistic/theory")({
  component: TheoryPage,
});
