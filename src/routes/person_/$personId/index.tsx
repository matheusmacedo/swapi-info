import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/person_/$personId/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/person_/$personId/"!</div>;
}
