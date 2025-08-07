import type { Person } from "@/types/Person";
import PersonAvatar from "../PersonAvatar";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function PersonCard({
  person,
  avatarSize = 50,
}: {
  person: Pick<Person, "name" | "birth_year" | "gender" | "homeworld" | "url">;
  avatarSize?: number;
}) {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial="initial"
      whileHover="hover"
    >
      <Link
        to="/person/$personId"
        params={{ personId: person.url.split("/").pop() || "" }}
        className="flex items-center gap-4 flex-col cursor-pointer"
      >
        <motion.div className="bg-foreground p-4">
          <motion.div
            transition={{ duration: 0.2 }}
            variants={{
              hover: {
                scale: 1.02,
              },
              initial: {
                scale: 1,
              },
            }}
          >
            <PersonAvatar person={person} />
          </motion.div>
          <h2 className="text-2xl font-bold text-text block text-center mt-5">
            {person.name}
          </h2>
          <motion.div
            variants={{
              hover: {
                opacity: 1,
                y: 0,
              },
              initial: {
                opacity: 0,
                y: 10,
              },
            }}
            transition={{ duration: 0.2 }}
            className="text-xs text-accent uppercase leading-none tracking-wider font-bold flex items-center gap-2 justify-end w-full"
          >
            Details <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default PersonCard;
