import type { Person } from "@/types/Person";
import PersonCard from "../../person/PersonCard";
import { useState } from "react";

function PersonList({ data }: { data: Person[] }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (search: string) => {
    const filteredData = data.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="h-screen flex flex-col min-w-full">
      <div className="w-full p-4 bg-background border-b border-gray-200 sticky top-0 z-10">
        <input
          type="text"
          minLength={3}
          maxLength={100}
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent w-full"
        />
      </div>

      <div className="overflow-y-auto p-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredData?.map((person: Person) => (
            <li key={person.name}>
              <PersonCard person={person} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonList;
