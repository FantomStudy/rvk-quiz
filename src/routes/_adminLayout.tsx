import { createFileRoute, redirect } from "@tanstack/react-router";

import { AdminLayout, checkAuthQuery } from "@/modules/admin";

export const Route = createFileRoute("/_adminLayout")({
  component: AdminLayout,
  beforeLoad: async ({ context }) => {
    const redirectToLogin = () => {
      throw redirect({ to: "/admin" });
    };

    try {
      const isAdmin =
        await context.queryClient.ensureQueryData(checkAuthQuery());
      if (!isAdmin) {
        redirectToLogin();
      }
    } catch {
      redirectToLogin();
    }
  },
});
