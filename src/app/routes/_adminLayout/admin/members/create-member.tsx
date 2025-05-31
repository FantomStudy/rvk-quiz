import { createFileRoute } from "@tanstack/react-router";

import { CreateMemberPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/members/create-member",
)({
  component: CreateMemberPage,
});
