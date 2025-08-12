import { createFileRoute } from "@tanstack/react-router";

import { PracticePage } from "@/modules/statistic";

export const Route = createFileRoute("/_adminLayout/statistic/practice")({
  component: PracticePage,
});
