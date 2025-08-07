import { useQuery } from "@tanstack/react-query";

function useFetchPlanets() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["planets"],
    queryFn: async () => {
      const response = await fetch("https://swapi.info/api/planets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, error };
}

export default useFetchPlanets;
