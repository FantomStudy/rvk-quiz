import { createFileRoute } from "@tanstack/react-router";

import { AdminLoginPage } from "@pages/admin";

export const Route = createFileRoute("/_headerLayout/admin")({
  component: AdminLoginPage,
});
