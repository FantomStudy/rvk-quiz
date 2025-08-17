import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/admin/statistic";

export const Route = createFileRoute("/_adminLayout/statistic/practice")({
  component: PracticePage,
});
