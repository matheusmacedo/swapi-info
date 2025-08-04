import { AnimatePresence, motion } from "motion/react";
import PlanetResident from "../PlanetResident";
import type { Planet } from "@/types/Planet";

function PlanetResidents({
  planet,
  currentPersonId,
}: {
  planet: Planet;
  currentPersonId: string;
}) {
  const residents = planet.residents.filter(
    (resident) => resident.split("/").pop() !== currentPersonId
  );

  return (
    <>
      <h3 className="text-lg font-bold text-text block mb-4">
        Neighbors in {planet.name} ({residents.length})
      </h3>
      <AnimatePresence mode="sync">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {residents.map((resident) => (
            <motion.li
              key={resident}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PlanetResident residentId={resident.split("/").pop() || ""} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </>
  );
}

export default PlanetResidents;
