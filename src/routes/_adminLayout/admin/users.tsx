import { createFileRoute } from "@tanstack/react-router";

import { UserManagePage } from "@/modules/admin";

export const Route = createFileRoute("/_adminLayout/admin/users")({
  component: UserManagePage,
});
