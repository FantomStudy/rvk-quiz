import { createFileRoute } from "@tanstack/react-router";

import { DashboardPage } from "@/modules/admin";

export const Route = createFileRoute(
  "/_headerLayout/_adminLayout/admin/dashboard",
)({
  component: DashboardPage,
});
