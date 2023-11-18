import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const ContractModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  finishAt: z.date(),
  userId: z.string(),
  trainerId: z.string(),
  status: z.boolean(),
  canceled: z.boolean(),
  plan: z.string(),
  days: z.number().int().nullish(),
  hours: z.number().int().nullish(),
  credits: z.number().int(),
})

export interface CompleteContract extends z.infer<typeof ContractModel> {
  user: CompleteUser
  trainer: CompleteUser
}

/**
 * RelatedContractModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContractModel: z.ZodSchema<CompleteContract> = z.lazy(() => ContractModel.extend({
  user: RelatedUserModel,
  trainer: RelatedUserModel,
}))
