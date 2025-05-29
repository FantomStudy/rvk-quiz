import Index from "@pages/index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function RouteComponent() {
  return <div></div>;
}
