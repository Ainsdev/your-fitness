import * as z from "zod"
import { CompleteSession, RelatedSessionModel, CompleteKey, RelatedKeyModel, Completepassword_reset_token, Relatedpassword_reset_tokenModel, CompleteTrainerPost, RelatedTrainerPostModel, CompleteReview, RelatedReviewModel, CompleteContract, RelatedContractModel, CompleteCredit, RelatedCreditModel, CompleteCreditPurchase, RelatedCreditPurchaseModel, CompleteTrainerPayout, RelatedTrainerPayoutModel, CompleteBankAccount, RelatedBankAccountModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  status: z.string(),
  username: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  phone: z.number().int().nullish(),
  rut: z.string().nullish(),
  img: z.string().nullish(),
  location: z.string().nullish(),
  email_notifications: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainer_active: z.boolean(),
  default_plan: z.string(),
  isAvailable: z.boolean(),
  active: z.boolean(),
  bank_active: z.boolean(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  auth_session: CompleteSession[]
  key: CompleteKey[]
  password_reset_token: Completepassword_reset_token[]
  trainerPost: CompleteTrainerPost[]
  trainer_review: CompleteReview[]
  user_review: CompleteReview[]
  trainer_contract: CompleteContract[]
  user_contract: CompleteContract[]
  credits: CompleteCredit[]
  creditPurchase: CompleteCreditPurchase[]
  trainerPayout: CompleteTrainerPayout[]
  bankAccount: CompleteBankAccount[]
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
  trainerPost: RelatedTrainerPostModel.array(),
  trainer_review: RelatedReviewModel.array(),
  user_review: RelatedReviewModel.array(),
  trainer_contract: RelatedContractModel.array(),
  user_contract: RelatedContractModel.array(),
  credits: RelatedCreditModel.array(),
  creditPurchase: RelatedCreditPurchaseModel.array(),
  trainerPayout: RelatedTrainerPayoutModel.array(),
  bankAccount: RelatedBankAccountModel.array(),
}))
