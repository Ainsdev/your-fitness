import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const VerificationCodeModel = z.object({
  id: z.string(),
  user_id: z.string(),
  code: z.string(),
  expires: z.date(),
})

export interface CompleteVerificationCode extends z.infer<typeof VerificationCodeModel> {
  user: CompleteUser
}

/**
 * RelatedVerificationCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVerificationCodeModel: z.ZodSchema<CompleteVerificationCode> = z.lazy(() => VerificationCodeModel.extend({
  user: RelatedUserModel,
}))
