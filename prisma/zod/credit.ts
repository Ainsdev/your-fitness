import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const CreditModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  credits: z.number().int(),
  hasPlan: z.boolean(),
  plan: z.number().int().nullish(),
})

export interface CompleteCredit extends z.infer<typeof CreditModel> {
  user: CompleteUser
}

/**
 * RelatedCreditModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCreditModel: z.ZodSchema<CompleteCredit> = z.lazy(() => CreditModel.extend({
  user: RelatedUserModel,
}))
