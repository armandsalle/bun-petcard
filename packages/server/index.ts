import { Hono } from "hono"
import { serveStatic } from "hono/bun"
import { logger } from "hono/logger"

const app = new Hono()
app.use(logger())

const router = app.get("/api", (c) => c.text("Hello Bun!"))

app.get("*", serveStatic({ root: "../frontend/dist" }))
app.get("*", serveStatic({ path: "../frontend/dist/index.html" }))

Bun.serve({
  port: process.env.PORT || 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
})

export type Router = typeof router
