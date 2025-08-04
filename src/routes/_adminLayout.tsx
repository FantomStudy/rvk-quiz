import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";

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
        <nav className="adminNav">
          <Link to="/admin/users">Главная</Link>
          <Link to="/admin/dashboard">Результаты</Link>
          <Link to="/statistic/theory">Статистика</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
