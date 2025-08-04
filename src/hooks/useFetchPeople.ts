import { useQuery } from "@tanstack/react-query";

function useFetchPeople() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await fetch("https://swapi.info/api/people", {
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

export default useFetchPeople;
