import { Outlet, createFileRoute } from "@tanstack/react-router";

import Header from "@/components/header/Header";

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
