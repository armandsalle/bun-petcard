import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import { z } from "zod"

export const familySchema = z.object({
  name: z.string().min(1).max(255),
  bio: z.string(),
})

export type FamilySchema = z.infer<typeof familySchema>

let family: FamilySchema

export const familyRouter = new Hono()
  .get("/", (c) => {
    if (!family) {
      return c.json({ error: "family not found" }, 404)
    }

    return c.json({ family }, 200)
  })
  .post("/new", zValidator("json", familySchema), (c) => {
    const newFamily = c.req.valid("json")
    family = newFamily
    return c.json(newFamily, 201)
  })
