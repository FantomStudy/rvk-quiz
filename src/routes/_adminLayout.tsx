import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { checkAuthQuery } from "@/modules/admin";

export const Route = createFileRoute("/_adminLayout")({
  component: LayoutComponent,
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

function LayoutComponent() {
  return (
    <>
      <Outlet />;
    </>
  );
}
