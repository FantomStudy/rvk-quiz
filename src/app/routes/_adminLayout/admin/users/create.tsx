import { createFileRoute } from "@tanstack/react-router";

import { CreateUserPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/users/create")({
  component: CreateUserPage,
});
