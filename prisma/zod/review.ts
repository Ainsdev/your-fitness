import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const ReviewModel = z.object({
  id: z.string(),
  userId: z.string(),
  trainerId: z.string(),
  rating: z.number(),
  comment: z.string(),
  createdAt: z.date(),
})

export interface CompleteReview extends z.infer<typeof ReviewModel> {
  user: CompleteUser
  trainer: CompleteUser
}

/**
 * RelatedReviewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedReviewModel: z.ZodSchema<CompleteReview> = z.lazy(() => ReviewModel.extend({
  user: RelatedUserModel,
  trainer: RelatedUserModel,
}))
