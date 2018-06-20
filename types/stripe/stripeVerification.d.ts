export type StripeVerificationReason =
  | 'rejected.fraud'
  | 'rejected.terms_of_service'
  | 'rejected.listed'
  | 'rejected.other'
  | 'fields_needed'
  | 'listed'
  | 'under_review'
  | 'other'

export type StripeVerificationField =
  | 'business_url'
  | 'external_account'
  | 'legal_entity.address.city'
  | 'legal_entity.address.line1'
  | 'legal_entity.address.postal_code'
  | 'legal_entity.address.state'
  | 'legal_entity.dob.day'
  | 'legal_entity.dob.month'
  | 'legal_entity.dob.year'
  | 'legal_entity.first_name'
  | 'legal_entity.last_name'
  | 'legal_entity.type'
  | 'product_description'
  | 'support_phone'
  | 'tos_acceptance.date'
  | 'tos_acceptance.ip'

export interface IStripeVerification {
  disabled_reason: StripeVerificationReason | null
  due_by: string | null
  fields_needed: StripeVerificationField[]
}
