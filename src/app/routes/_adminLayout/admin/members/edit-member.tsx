import { createFileRoute } from "@tanstack/react-router";

import { EditMemberPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/members/edit-member")(
  {
    component: EditMemberPage,
  },
);
