import * as z from "zod"
import { CompleteTrainer, RelatedTrainerModel } from "./index"

export const TrainerPayoutModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainerId: z.string(),
  amount: z.number(),
  status: z.string(),
})

export interface CompleteTrainerPayout extends z.infer<typeof TrainerPayoutModel> {
  trainer: CompleteTrainer
}

/**
 * RelatedTrainerPayoutModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrainerPayoutModel: z.ZodSchema<CompleteTrainerPayout> = z.lazy(() => TrainerPayoutModel.extend({
  trainer: RelatedTrainerModel,
}))
