import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { checkAuthQuery } from "@/modules/admin";

const redirectToLogin = () => {
  throw redirect({ to: "/admin" });
};

export const Route = createFileRoute("/_adminLayout")({
  component: LayoutComponent,
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(checkAuthQuery());
    } catch {
      redirectToLogin();
    }
  },
});

function LayoutComponent() {
  return <Outlet />;
}
