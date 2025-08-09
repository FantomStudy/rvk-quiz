import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { AdminNavigation } from "@/components/ui";
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
  return (
    <>
      <div className="container">
        <AdminNavigation />
      </div>

      <Outlet />
    </>
  );
}
