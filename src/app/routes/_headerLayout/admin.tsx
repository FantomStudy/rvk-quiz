import { createFileRoute } from "@tanstack/react-router";

import { AdminLogin } from "@pages/admin";

export const Route = createFileRoute("/_headerLayout/admin")({
  component: AdminLogin,
});
