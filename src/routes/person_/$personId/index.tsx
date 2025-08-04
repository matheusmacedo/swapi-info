import { createFileRoute } from "@tanstack/react-router";
import PersonCard from "../../../components/person/PersonCard";
import type { Person } from "@/types/Person";

export const Route = createFileRoute("/person_/$personId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { personId } = Route.useParams();
  // const { data: person } = useFetchPerson(personId);

  return <div>{/* <PersonCard person={person} /> */}</div>;
}
