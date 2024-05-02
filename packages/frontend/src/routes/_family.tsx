import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_family")({
  component: () => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        My family
      </h1>
      <Outlet />
    </div>
  ),
})
