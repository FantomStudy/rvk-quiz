import { createFileRoute } from "@tanstack/react-router";

import { UpdateMemberPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/members/$memberId")({
  component: UpdateMemberPage,
});
