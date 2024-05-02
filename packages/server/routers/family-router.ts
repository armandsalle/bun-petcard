import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import { z } from "zod"

export const familySchema = z.object({
  name: z.string().min(1).max(255),
  bio: z.string().optional(),
})

export type FamilySchema = z.infer<typeof familySchema>

let family: FamilySchema

export const familyRouter = new Hono()
  .post("/new", zValidator("json", familySchema), (c) => {
    const newFamily = c.req.valid("json")
    family = newFamily
    return c.json(newFamily, 201)
  })
  .get("/", (c) => {
    if (!family) {
      return c.json(
        {
          error: true,
        },
        404,
      )
    }
    return c.json(family)
  })
