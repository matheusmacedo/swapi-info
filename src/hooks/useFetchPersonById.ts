import { useQuery } from "@tanstack/react-query";

function useFetchPersonById(personId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["person", personId],
    queryFn: async () => {
      const response = await fetch(
        `https://swapi.info/api/people/${personId}`,
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

export default useFetchPersonById;
