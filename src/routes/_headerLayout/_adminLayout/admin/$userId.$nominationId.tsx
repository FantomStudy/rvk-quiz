import { createFileRoute } from "@tanstack/react-router";

import { AdminUserResult } from "@/modules/admin";
import { adminTestResultQuery } from "@/modules/admin/test-result/api/queries";

export const Route = createFileRoute(
  "/_headerLayout/_adminLayout/admin/$userId/$nominationId",
)({
  component: AdminUserResult,
  loader: async ({ context, params }) =>
    await context.queryClient.ensureQueryData(adminTestResultQuery(params)),
});
