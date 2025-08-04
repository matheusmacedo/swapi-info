import useFetchPersonById from "../../../hooks/useFetchPersonById";
import PersonCard from "../../person/PersonCard";

function PlanetResident({ residentId }: { residentId: string }) {
  const { data, isLoading, error } = useFetchPersonById(residentId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <PersonCard person={data} />;
}

export default PlanetResident;
