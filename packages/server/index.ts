import { familyRouter } from "./routers/family-router"
import { Hono } from "hono"
import { serveStatic } from "hono/bun"
import { logger } from "hono/logger"
import { poweredBy } from "hono/powered-by"

const app = new Hono()
app.use(logger())
app.use(poweredBy())

const router = app.basePath("/api").route("/family", familyRouter)

app.get(
  "*",
  serveStatic({
    root: "../frontend/dist",
    // /family /whatever => serve the index.html file
    // /plop.js /logo.svg => serve the needed file
    rewriteRequestPath: (path) => {
      if (path.includes(".")) {
        return path
      }
      return "/"
    },
  }),
)

Bun.serve({
  port: process.env.PORT || 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
})

export type AppRouter = typeof router
