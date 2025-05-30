import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Header } from "@shared/ui";

export const Route = createFileRoute("/_headerLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
