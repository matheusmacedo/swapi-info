import { createFileRoute } from "@tanstack/react-router";
import useFetchPeople from "../hooks/useFetchPeople";
import PersonList from "../components/home/PersonList";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data, isLoading, error } = useFetchPeople();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data?.length) return <div>Error: {error?.message}</div>;

  return (
    <div className="min-h-screen flex text-2xl items-center justify-center text-text bg-bg p-4">
      <PersonList data={data} />
    </div>
  );
}
