import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const PasswordResetTokenModel = z.object({
  /**
   * Token to send inside the reset link
   */
  id: z.string(),
  /**
   * Expiration (in milliseconds) of the token
   */
  expires: z.bigint(),
  user_id: z.string(),
})

export interface CompletePasswordResetToken extends z.infer<typeof PasswordResetTokenModel> {
  user: CompleteUser
}

/**
 * RelatedPasswordResetTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPasswordResetTokenModel: z.ZodSchema<CompletePasswordResetToken> = z.lazy(() => PasswordResetTokenModel.extend({
  user: RelatedUserModel,
}))
