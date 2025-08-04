import { createFileRoute } from "@tanstack/react-router";
import useFetchPersonById from "../../../hooks/useFetchPersonById";
import PersonDetails from "../../../components/person/PersonDetails";

export const Route = createFileRoute("/person_/$personId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { personId } = Route.useParams();
  const { data, isLoading, error } = useFetchPersonById(personId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex items-center gap-4 p-4 bg-bg rounded-lg flex-col">
      <PersonDetails person={data} />
    </div>
  );
}
