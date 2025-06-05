import { createFileRoute } from "@tanstack/react-router";

import { UsersPage } from "@pages/admin";

import { userListQuery } from "@entities/user";

export const Route = createFileRoute("/_adminLayout/admin/users/")({
  component: UsersPage,
  loader: async ({ context }) => {
    const users = await context.queryClient.ensureQueryData(userListQuery());

    return { users };
  },
});
