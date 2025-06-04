import { AxiosError } from "axios";

import { createFileRoute, redirect } from "@tanstack/react-router";

import { UpdateUserPage } from "@pages/admin";

import { userByIdQueryOption } from "@entities/user";

export const Route = createFileRoute("/_adminLayout/admin/users/$userId")({
  component: UpdateUserPage,
  loader: async ({ context, params }) => {
    try {
      const userId = Number(params.userId);
      const user = await context.queryClient.ensureQueryData(
        userByIdQueryOption(userId),
      );

      return { user };
    } catch (err) {
      if (err instanceof AxiosError && err.status === 404) {
        console.log("Не удалось найти пользователя");

        throw redirect({ to: "/admin/users" });
      }

      throw err;
    }
  },
});
