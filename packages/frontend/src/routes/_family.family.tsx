import { CreateFamily } from "@/components/create-family"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_family/family")({
  component: CreateFamily,
})
