import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteContract, RelatedContractModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const TrainerPostModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainerId: z.string(),
  disabled: z.boolean(),
  credits: z.number().int(),
  plan: z.number().int(),
  experience: z.number().int(),
  specialization: z.number().int(),
  sub_specializations: z.number().int(),
  methodology: z.string().nullish(),
  phone: z.string(),
  images: jsonSchema,
  name: z.string(),
  social_medias: z.string().nullish(),
  free_days: z.number().int(),
  default_days: z.number().int(),
  default_hours: z.number().int(),
  title: z.string(),
  bio: z.string().nullish(),
  course_info: z.string().nullish(),
  location: z.string().nullish(),
})

export interface CompleteTrainerPost extends z.infer<typeof TrainerPostModel> {
  trainer: CompleteUser
  Contract: CompleteContract[]
}

/**
 * RelatedTrainerPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrainerPostModel: z.ZodSchema<CompleteTrainerPost> = z.lazy(() => TrainerPostModel.extend({
  trainer: RelatedUserModel,
  Contract: RelatedContractModel.array(),
}))
