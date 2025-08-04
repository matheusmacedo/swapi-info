import type { Person } from "@/types/Person";
import PersonAvatar from "../PersonAvatar";
import useFetchPlanetById from "../../../hooks/useFetchPlanetById";
import PlanetDetails from "../../planet/PlanetDetails";

function PersonDetails({
  person,
}: {
  person: Pick<Person, "name" | "birth_year" | "gender" | "homeworld" | "url">;
}) {
  const { data: homeworld } = useFetchPlanetById(
    person.homeworld.split("/").pop() || ""
  );

  return (
    <div className="flex items-center gap-4 p-4 bg-bg flex-col w-full">
      <PersonAvatar person={person} />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-text">{person.name}</h2>
        <p className="text-sm text-gray-500">{person.birth_year}</p>
        <p className="text-sm text-gray-500">{person.gender}</p>
      </div>

      {homeworld && <PlanetDetails planet={homeworld} />}
    </div>
  );
}

export default PersonDetails;
