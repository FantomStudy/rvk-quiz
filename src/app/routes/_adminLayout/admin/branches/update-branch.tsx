import { createFileRoute } from "@tanstack/react-router";

import { UpdateBranchPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/branches/update-branch",
)({
  component: UpdateBranchPage,
});
