import { createFileRoute } from "@tanstack/react-router";

import AdminLogin from "@pages/admin-login/AdminLogin";

export const Route = createFileRoute("/_headerLayout/admin")({
  component: AdminLogin,
});
