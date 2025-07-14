import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { checkAuthQuery } from "@/modules/admin";

export const Route = createFileRoute("/_headerLayout/_adminLayout")({
  component: LayoutComponent,
  beforeLoad: async ({ context }) => {
    const redirectToLogin = () => {
      throw redirect({ to: "/admin" });
    };

    try {
      await context.queryClient.ensureQueryData(checkAuthQuery());
    } catch {
      redirectToLogin();
    }
  },
});

function LayoutComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
