import { createFileRoute } from "@tanstack/react-router"

const Page = () => {
  const { id } = Route.useParams()
  return <div>Family: {id}</div>
}

export const Route = createFileRoute("/_family/family/$id")({
  component: Page,
})
