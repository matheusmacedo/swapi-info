import type { Person } from "@/types/Person";
import PersonAvatar from "../PersonAvatar";
import useFetchPlanetById from "../../../hooks/useFetchPlanetById";
import PlanetDetails from "../../planet/PlanetDetails";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import PlanetResidents from "../../planet/PlanetResidents";
import FavoritePerson from "../FavoritePerson";

function PersonDetails({ person }: { person: Person }) {
  const { data: homeworld } = useFetchPlanetById(
    person.homeworld.split("/").pop() || ""
  );

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-background flex-col w-full text-text">
        <Link
          to="/"
          className="flex items-center gap-2 justify-start w-full max-w-5xl mx-auto"
        >
          <ArrowLeft className="w-6 h-6" /> Go Back
        </Link>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 p-4 bg-background w-full max-w-screen-xl mx-auto">
        <PersonAvatar person={person} size={128} />

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-text mb-2">Information</h3>
          <h4 className="text-xl text-text font-bold">{person.name}</h4>
          <p className="text-sm text-gray-500">
            Birth Year: {person.birth_year}
          </p>
          <p className="text-sm text-gray-500">Gender: {person.gender}</p>
          <p className="text-sm text-gray-500">Height: {person.height} cm</p>
          <p className="text-sm text-gray-500">Mass: {person.mass} kg</p>
          <p className="text-sm text-gray-500">
            Hair Color: {person.hair_color}
          </p>
          <p className="text-sm text-gray-500">
            Skin Color: {person.skin_color}
          </p>
          <p className="text-sm text-gray-500">Eye Color: {person.eye_color}</p>

          <FavoritePerson name={person.name} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-text mb-2">Statistics</h3>
            <p className="text-sm text-gray-500">
              # Films: {person.films.length}
            </p>
            <p className="text-sm text-gray-500">
              # Species: {person.species.length}
            </p>
            <p className="text-sm text-gray-500">
              # Vehicles: {person.vehicles.length}
            </p>
            <p className="text-sm text-gray-500">
              # Starships: {person.starships.length}
            </p>
          </div>
          {homeworld && <PlanetDetails planet={homeworld} />}
        </div>
      </div>
      {homeworld && (
        <PlanetResidents
          planet={homeworld}
          currentPersonId={person.url.split("/").pop() || ""}
        />
      )}
    </>
  );
}

export default PersonDetails;
