import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    PORT: z.number().positive().default(3000),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
