import { createFileRoute } from "@tanstack/react-router";

import { branchListQuery } from "@/api/branch/queries";
import { userListQuery, UserManagePage } from "@/modules/admin";

export const Route = createFileRoute("/_adminLayout/admin/users")(
  {
    component: RouteComponent,
    loader: async ({ context }) =>
      Promise.all([
        context.queryClient.ensureQueryData(userListQuery),
        context.queryClient.ensureQueryData(branchListQuery),
      ]),
  }
);

function RouteComponent() {
  const [users, branches] = Route.useLoaderData();

  return <UserManagePage branchList={branches} userList={users} />;
}
