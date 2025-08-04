import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_statisticLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <div className="container">
        <nav className="adminNav">
          <Link to="/admin/users">На главную</Link>
          <Link to="/statistic/theory">Теоретическая</Link>
          <Link to="/statistic/practice">Практическая</Link>
          <Link to="/statistic/common">Общая</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
