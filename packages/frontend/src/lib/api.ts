import { type AppRouter } from "@server/index"
import { hc } from "hono/client"

export const api = hc<AppRouter>("http://localhost:5173/").api
