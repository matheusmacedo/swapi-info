import { useQuery } from "@tanstack/react-query";

function useFetchPlanetById(planetId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["planet", planetId],
    queryFn: async () => {
      const response = await fetch(
        `https://swapi.info/api/planets/${planetId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, error };
}

export default useFetchPlanetById;
