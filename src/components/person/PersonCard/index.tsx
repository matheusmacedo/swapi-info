import type { Person } from "@/types/Person";
import PersonAvatar from "../PersonAvatar";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function PersonCard({
  person,
}: {
  person: Pick<Person, "name" | "birth_year" | "gender" | "homeworld" | "url">;
}) {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      variants={{
        hover: {
          scale: 1.05,
        },
        initial: {
          scale: 1,
        },
      }}
      initial="initial"
      whileHover="hover"
    >
      <Link
        to="/person/$personId"
        params={{ personId: person.url.split("/").pop() || "" }}
        className="flex items-center gap-4 p-4 bg-foreground rounded-lg shadow-md flex-col cursor-pointer"
      >
        <PersonAvatar person={person} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-text">{person.name}</h2>
        </div>
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
      </Link>
    </motion.div>
  );
}

export default PersonCard;
