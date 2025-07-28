import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Header } from "@/components";

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
