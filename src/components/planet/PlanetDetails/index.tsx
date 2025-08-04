import type { Planet } from "../../../types/Planet";
import PlanetResident from "../PlanetResident";

function PlanetDetails({ planet }: { planet: Planet }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-text">{planet.name}</h2>
      <p className="text-sm text-gray-500">{planet.population}</p>
      <p className="text-sm text-gray-500">{planet.climate}</p>
      <p className="text-sm text-gray-500">{planet.terrain}</p>
      <p className="text-sm text-gray-500">{planet.gravity}</p>
      <p className="text-sm text-gray-500">{planet.surface_water}</p>
      <p className="text-sm text-gray-500">{planet.rotation_period}</p>

      <h3 className="text-lg font-bold text-text">Neighbors</h3>
      <ul className="grid grid-cols-2 gap-4">
        {planet.residents.map((resident) => (
          <li key={resident}>
            <PlanetResident residentId={resident.split("/").pop() || ""} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetDetails;
