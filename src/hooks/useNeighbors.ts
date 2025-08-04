import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Person } from "@/types/Person";
import type { Planet } from "../types/Planet";

export function useNeighbors(personUrl: string) {
  const queryClient = useQueryClient();

  const neighbors = useMemo(() => {
    const people = queryClient.getQueryData<Person[]>(["people"]);
    const planets = queryClient.getQueryData<Planet[]>(["planets"]);

    if (!people || !planets) return [];

    const person = people.find((p) => p.url === personUrl);
    if (!person) return [];

    const planet = planets.find((p) => p.url === person.homeworld);
    if (!planet) return [];

    const residents = people.filter(
      (p) => planet.residents.includes(p.url) && p.url !== personUrl
    );

    return residents;
  }, [personUrl, queryClient]);

  return neighbors;
}
