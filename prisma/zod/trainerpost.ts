import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const TrainerPostModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainerId: z.string(),
  level: z.number().int(),
  plan: z.string(),
  specializations: z.number().int(),
  sub_specializations: z.number().int(),
  methodology: z.string().nullish(),
  phone: z.string(),
  img: z.string().nullish(),
  social_medias: z.string().nullish(),
  free_days: z.number().int(),
  default_days: z.number().int(),
  default_hours: z.number().int(),
  title: z.string(),
  bio: z.string().nullish(),
  course_info: z.string().nullish(),
})

export interface CompleteTrainerPost extends z.infer<typeof TrainerPostModel> {
  trainer: CompleteUser
}

/**
 * RelatedTrainerPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrainerPostModel: z.ZodSchema<CompleteTrainerPost> = z.lazy(() => TrainerPostModel.extend({
  trainer: RelatedUserModel,
}))
