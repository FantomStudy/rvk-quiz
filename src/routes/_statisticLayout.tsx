import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AdminNavigation } from "@/components/ui";

export const Route = createFileRoute("/_statisticLayout")({
  component: LayoutComponent,
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
