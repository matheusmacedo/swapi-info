import type { Person } from "@/types/Person";
import PersonCard from "../../person/PersonCard";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocalStorage } from "usehooks-ts";
import { SearchIcon, StarIcon } from "lucide-react";

function PersonList({ data }: { data: Person[] }) {
  const [filteredData, setFilteredData] = useState(data);
  const [favoritePeople, setFavoritePeople] = useLocalStorage<string[]>(
    "favoritePeople",
    []
  );

  const handleSearch = (search: string) => {
    const filteredData = data.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const handleFavoriteFilter = () => {
    const filteredData = data.filter((person) =>
      favoritePeople.includes(person.name)
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="h-screen flex flex-col min-w-full">
      <div className="w-full p-1 flex flex-row gap-2 rounded-full bg-background px-3 items-center border border-gray-200 max-w-5xl mx-auto mb-5">
        <SearchIcon
          style={{
            color: "var(--accent)",
          }}
        />
        <input
          type="text"
          minLength={3}
          maxLength={100}
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
          className="rounded-lg w-full focus:outline-none text-base bg-background"
        />

        <button
          className="text-sm w-fit whitespace-nowrap text-text p-2 rounded-lg h-full flex items-center gap-1 hover:text-accent transition-all duration-300"
          type="button"
          onClick={handleFavoriteFilter}
        >
          <StarIcon /> Favorites
        </button>
      </div>

      <AnimatePresence mode="sync">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredData?.map((person: Person) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PersonCard person={person} avatarSize={32} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

export default PersonList;
