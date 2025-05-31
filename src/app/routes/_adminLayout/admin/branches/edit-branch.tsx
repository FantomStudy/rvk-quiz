import { createFileRoute } from "@tanstack/react-router";

import { EditBranchPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/branches/edit-branch",
)({
  component: EditBranchPage,
});
