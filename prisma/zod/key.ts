import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const KeyModel = z.object({
  id: z.string(),
  hashed_password: z.string().nullish(),
  user_id: z.string(),
})

export interface CompleteKey extends z.infer<typeof KeyModel> {
  user: CompleteUser
}

/**
 * RelatedKeyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKeyModel: z.ZodSchema<CompleteKey> = z.lazy(() => KeyModel.extend({
  user: RelatedUserModel,
}))
