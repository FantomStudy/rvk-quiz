import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { checkAuthQuery } from "@/modules/admin";

export const Route = createFileRoute("/_headerLayout/_adminLayout")({
  component: LayoutComponent,
  beforeLoad: async ({ context }) => {
    const redirectToLogin = () => {
      throw redirect({ to: "/admin" });
    };

    try {
      const auth = await context.queryClient.ensureQueryData(checkAuthQuery());
      if (!auth.isAdmin) {
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
