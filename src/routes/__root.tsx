import type { QueryClient } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Header } from "@/components";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  );
}
