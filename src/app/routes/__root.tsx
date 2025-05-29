import { Header } from "@shared/ui/header/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
