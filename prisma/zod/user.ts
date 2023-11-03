import * as z from "zod"
import { CompleteSession, RelatedSessionModel, CompleteKey, RelatedKeyModel, Completepassword_reset_token, Relatedpassword_reset_tokenModel, CompleteTrainer, RelatedTrainerModel, CompleteReview, RelatedReviewModel, CompleteContract, RelatedContractModel, CompleteCredit, RelatedCreditModel, CompleteCreditPurchase, RelatedCreditPurchaseModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  phone: z.string().nullish(),
  rut: z.string().nullish(),
  email_notifications: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  auth_session: CompleteSession[]
  key: CompleteKey[]
  password_reset_token: Completepassword_reset_token[]
  trainer: CompleteTrainer[]
  review: CompleteReview[]
  contract: CompleteContract[]
  credits: CompleteCredit[]
  creditPurchase: CompleteCreditPurchase[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  auth_session: RelatedSessionModel.array(),
  key: RelatedKeyModel.array(),
  password_reset_token: Relatedpassword_reset_tokenModel.array(),
  trainer: RelatedTrainerModel.array(),
  review: RelatedReviewModel.array(),
  contract: RelatedContractModel.array(),
  credits: RelatedCreditModel.array(),
  creditPurchase: RelatedCreditPurchaseModel.array(),
}))
