import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <div className="mt-4">
        <Button>Hello</Button>
      </div>
    </div>
  )
}
