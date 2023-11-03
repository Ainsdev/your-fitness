import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteReview, RelatedReviewModel, CompleteContract, RelatedContractModel, CompleteTrainerPayout, RelatedTrainerPayoutModel, CompleteBankAccount, RelatedBankAccountModel } from "./index"

export const TrainerModel = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  plan: z.string(),
  isAvailable: z.boolean(),
  active: z.boolean(),
  verified: z.boolean(),
  region: z.string(),
  city: z.string(),
  commune: z.string(),
  level: z.number().int(),
  specializations: z.number().int(),
  sub_specializations: z.number().int(),
  methodology: z.string().nullish(),
  phone: z.string(),
  img: z.string().nullish(),
  social_medias: z.string().nullish(),
  free_days: z.number().int(),
  default_days: z.number().int(),
  default_hours: z.number().int(),
  max_students: z.number().int(),
  min_students: z.number().int(),
  title: z.string(),
  bio: z.string().nullish(),
  course_info: z.string().nullish(),
})

export interface CompleteTrainer extends z.infer<typeof TrainerModel> {
  user: CompleteUser
  review: CompleteReview[]
  contract: CompleteContract[]
  trainerPayout: CompleteTrainerPayout[]
  bankAccount: CompleteBankAccount[]
}

/**
 * RelatedTrainerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrainerModel: z.ZodSchema<CompleteTrainer> = z.lazy(() => TrainerModel.extend({
  user: RelatedUserModel,
  review: RelatedReviewModel.array(),
  contract: RelatedContractModel.array(),
  trainerPayout: RelatedTrainerPayoutModel.array(),
  bankAccount: RelatedBankAccountModel.array(),
}))
