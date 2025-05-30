import { createFileRoute } from "@tanstack/react-router";

import AdminLogin from "@pages/admin-login/AdminLogin";

export const Route = createFileRoute("/admin")({
  component: AdminLogin,
});
