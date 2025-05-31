import { createFileRoute } from "@tanstack/react-router";

import { MembersPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/members/")({
  component: MembersPage,
});
