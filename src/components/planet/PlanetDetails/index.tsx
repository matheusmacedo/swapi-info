import type { Planet } from "../../../types/Planet";

function PlanetDetails({ planet }: { planet: Planet }) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-text mb-2">
        Homeworld: {planet.name}
      </h2>
      <div className="flex flex-col gap-2 mb-10">
        <p className="text-sm text-gray-500">Population: {planet.population}</p>
        <p className="text-sm text-gray-500">Climate: {planet.climate}</p>
        <p className="text-sm text-gray-500">Terrain: {planet.terrain}</p>
        <p className="text-sm text-gray-500">Gravity: {planet.gravity}</p>
        <p className="text-sm text-gray-500">
          Surface Water: {planet.surface_water}
        </p>
        <p className="text-sm text-gray-500">
          Rotation Period: {planet.rotation_period}
        </p>
      </div>
    </div>
  );
}

export default PlanetDetails;
