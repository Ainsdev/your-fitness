import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteTrainerPost, RelatedTrainerPostModel } from "./index"

export const ContractModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  finishAt: z.date(),
  cancelationAt: z.date().nullish(),
  userId: z.string(),
  user_name: z.string(),
  user_phone: z.string(),
  trainerId: z.string(),
  trainer_name: z.string(),
  trainer_phone: z.string(),
  postId: z.string().nullish(),
  plan: z.number().int(),
  total_credits: z.number().int(),
  days: z.number().int(),
  canceled: z.boolean(),
  schedule_days: z.number().int().nullish(),
  shcedule_hours: z.number().int().nullish(),
})

export interface CompleteContract extends z.infer<typeof ContractModel> {
  user: CompleteUser
  trainer: CompleteUser
  post?: CompleteTrainerPost | null
}

/**
 * RelatedContractModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContractModel: z.ZodSchema<CompleteContract> = z.lazy(() => ContractModel.extend({
  user: RelatedUserModel,
  trainer: RelatedUserModel,
  post: RelatedTrainerPostModel.nullish(),
}))
