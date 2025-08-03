import { createFileRoute } from "@tanstack/react-router";

import { AdminAuthPage } from "@/modules/admin";

export const Route = createFileRoute("/admin")({
  component: AdminAuthPage,
});
