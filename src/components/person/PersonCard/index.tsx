import type { Person } from "@/types/Person";
import PersonAvatar from "../PersonAvatar";

function PersonCard({
  person,
}: {
  person: Pick<Person, "name" | "birth_year" | "gender" | "homeworld" | "url">;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-foreground rounded-lg shadow-md flex-col cursor-pointer">
      <PersonAvatar person={person} />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-text">{person.name}</h2>
        <p className="text-sm text-gray-500">{person.birth_year}</p>
        <p className="text-sm text-gray-500">{person.gender}</p>
      </div>
    </div>
  );
}

export default PersonCard;
