import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_adminLayout/admin/analytic")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_adminPanel/admin/analytic"!</div>;
}
