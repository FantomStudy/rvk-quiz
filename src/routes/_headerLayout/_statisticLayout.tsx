import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_headerLayout/_statisticLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <nav className="stateNavigation">
        <Link to="/testState">Тестовая</Link>
        <Link to="/practiceState">Практическая</Link>
        <Link to="/commonState">Общая</Link>
      </nav>
      <Outlet />
    </>
  );
}
