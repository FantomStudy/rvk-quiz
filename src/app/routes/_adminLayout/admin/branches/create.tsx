import { createFileRoute } from "@tanstack/react-router";

import { CreateBranchPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/branches/create")({
  component: CreateBranchPage,
});
