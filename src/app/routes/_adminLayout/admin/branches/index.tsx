import { createFileRoute } from "@tanstack/react-router";

import { BranchesPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/branches/")({
  component: BranchesPage,
});
