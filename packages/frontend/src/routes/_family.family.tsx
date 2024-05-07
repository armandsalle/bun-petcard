import { api } from "@/lib/api"
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

async function getFamily() {
  const res = await api.family.$get()

  if (res.status === 404) {
    const data = await res.json()
    return data as { error: string }
  }

  if (!res.ok) {
    throw new Error("aie")
  }

  const data = await res.json()
  return data
}

const Page = () => {
  const { family } = Route.useRouteContext()
  return (
    <div>
      <div>Family:{family?.name} </div>
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute("/_family/family")({
  beforeLoad: async ({ location }) => {
    if (location.href.includes("new")) {
      return { family: undefined }
    }

    const data = await getFamily()

    if ("error" in data) {
      throw redirect({
        to: "/family/new",
      })
    }

    return data
  },
  loader: ({ context }) => {
    if (context?.family) {
      return context.family
    }
  },
  component: Page,
})
