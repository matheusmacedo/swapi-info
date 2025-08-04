import TeamToggle from "../components/shared/TeamToggle";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="fixed top-0 right-0 bg-background flex items-center justify-between w-full p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-text">Star Wars Characters</h1>
        </Link>
        <TeamToggle />
      </header>
      <div className="mt-20">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
