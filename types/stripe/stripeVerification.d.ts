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

export enum StripeVerificationEnum {
  'business_url' = 'Business URL is missing',
  'external_account' = 'No External Accounts created',
  'legal_entity.address.city' = 'City in address for Legal Entity is missing',
  'legal_entity.address.line1' = 'First line in address for Legal Entity is missing',
  'legal_entity.address.postal_code' = 'Postal code in address for Legal Entity is missing',
  'legal_entity.address.state' = 'State in address for Legal Entity is missing',
  'legal_entity.dob.day' = 'Day in Date of Birth for Legal Entity is missing',
  'legal_entity.dob.month' = 'Month in Date of Birth for Legal Entity is missing',
  'legal_entity.dob.year' = 'Year in Date of Birth for Legal Entity is missing',
  'legal_entity.first_name' = 'First Name for Legal Entity is missing',
  'legal_entity.last_name' = 'Last Name for Legal Entity is missing',
  'legal_entity.type' = 'Type for Legal Entity is missing',
  'product_description' = 'Product Description is missing',
  'support_phone' = 'Support Phone number is missing',
  'tos_acceptance.date' = 'Terms of Service Acceptance Date is missing',
  'tos_acceptance.ip' = 'Terms of Service Acceptance IP is missing',
}

export interface IStripeVerification {
  disabled_reason: string | null
  due_by: string | null
  fields_needed: StripeVerificationField[]
}
