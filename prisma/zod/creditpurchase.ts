import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const CreditPurchaseModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  amount: z.number(),
  credits: z.number().int(),
  transactionId: z.string().nullish(),
  status: z.string(),
})

export interface CompleteCreditPurchase extends z.infer<typeof CreditPurchaseModel> {
  user: CompleteUser
}

/**
 * RelatedCreditPurchaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCreditPurchaseModel: z.ZodSchema<CompleteCreditPurchase> = z.lazy(() => CreditPurchaseModel.extend({
  user: RelatedUserModel,
}))
