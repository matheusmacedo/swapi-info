import { AnimatePresence, motion } from "motion/react";
import type { Planet } from "@/types/Planet";

function PlanetList({ data }: { data: Planet[] }) {
  return (
    <div className="bg-background w-full">
      <AnimatePresence mode="sync">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-background flex flex-row gap-2 overflow-x-auto m-2"
        >
          {data?.map((planet: Planet) => (
            <motion.li
              key={planet.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-sm whitespace-nowrap"
            >
              {planet.name}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

export default PlanetList;
