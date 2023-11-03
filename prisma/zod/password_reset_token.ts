import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const password_reset_tokenModel = z.object({
  id: z.string(),
  expires: z.bigint(),
  user_id: z.string(),
})

export interface Completepassword_reset_token extends z.infer<typeof password_reset_tokenModel> {
  user: CompleteUser
}

/**
 * Relatedpassword_reset_tokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedpassword_reset_tokenModel: z.ZodSchema<Completepassword_reset_token> = z.lazy(() => password_reset_tokenModel.extend({
  user: RelatedUserModel,
}))
