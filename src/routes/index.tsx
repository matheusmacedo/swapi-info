import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen flex text-2xl items-center justify-center text-text bg-bg">
      Home
    </div>
  );
}
