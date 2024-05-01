import { Hono } from "hono"
import { logger } from "hono/logger"

const app = new Hono()
app.use(logger())

app.get("/", (c) => c.text("Hello Bun!"))

Bun.serve({
  port: process.env.PORT || 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
})
