import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_statisticLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <nav className="stateNavigation">
        <Link to="/theoryState">Теоретическая</Link>
        <Link to="/practiceState">Практическая</Link>
        <Link to="/commonState">Общая</Link>
      </nav>
      <Outlet />
    </>
  );
}
