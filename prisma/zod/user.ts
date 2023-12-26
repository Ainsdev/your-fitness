import * as z from "zod"
import { CompleteSession, RelatedSessionModel, CompleteKey, RelatedKeyModel, CompleteVerificationCode, RelatedVerificationCodeModel, CompletePasswordResetToken, RelatedPasswordResetTokenModel, CompleteTrainerPost, RelatedTrainerPostModel, CompleteReview, RelatedReviewModel, CompleteContract, RelatedContractModel, CompleteCredit, RelatedCreditModel, CompleteCreditPurchase, RelatedCreditPurchaseModel, CompleteTrainerPayout, RelatedTrainerPayoutModel, CompleteBankAccount, RelatedBankAccountModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  status: z.string(),
  username: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  phone: z.string().nullish(),
  rut: z.string().nullish(),
  image: z.string().nullish(),
  location: z.string().nullish(),
  email_notifications: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainer_active: z.boolean(),
  isAvailable: z.boolean(),
  bank_active: z.boolean(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  auth_session: CompleteSession[]
  key: CompleteKey[]
  VerificationCode: CompleteVerificationCode[]
  PasswordResetToken: CompletePasswordResetToken[]
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
  VerificationCode: RelatedVerificationCodeModel.array(),
  PasswordResetToken: RelatedPasswordResetTokenModel.array(),
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
