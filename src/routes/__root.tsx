import TeamToggle from "../components/shared/TeamToggle";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="bg-background flex items-center justify-between w-full p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-text">Star Wars Characters</h1>
        </Link>
        <TeamToggle />
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
