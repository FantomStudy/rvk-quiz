import { createFileRoute } from "@tanstack/react-router";

import { AdminAuthPage } from "@/modules/admin";

export const Route = createFileRoute("/_headerLayout/admin")({
  component: AdminAuthPage,
});
