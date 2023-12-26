import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const BankAccountModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  trainerId: z.string(),
  accountbank_name: z.string(),
  accountbank_sbif: z.string(),
  accountbank_type: z.string(),
  accountbank_num: z.string(),
  accountbank_personal_id: z.string(),
})

export interface CompleteBankAccount extends z.infer<typeof BankAccountModel> {
  trainer: CompleteUser
}

/**
 * RelatedBankAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBankAccountModel: z.ZodSchema<CompleteBankAccount> = z.lazy(() => BankAccountModel.extend({
  trainer: RelatedUserModel,
}))
