import { createFileRoute } from "@tanstack/react-router";

import { AnalyticsPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/analytic")({
  component: AnalyticsPage,
});
