import { StripeVerificationReasonEnum, StripeVerificationFieldEnum } from '../index'

export interface IStripeVerification {
  disabled_reason: StripeVerificationReasonEnum | null
  due_by: string | null
  fields_needed: StripeVerificationFieldEnum[]
}
