import { createFileRoute } from "@tanstack/react-router";

import { AuthPage } from "@/modules/admin";

export const Route = createFileRoute("/_headerLayout/admin")({
  component: AuthPage,
});
