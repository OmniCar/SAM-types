export enum StripeVerificationReasonEnum {
  'rejected.fraud' = 'Rejected on suspicion of fraud',
  'rejected.terms_of_service' = 'Rejected due to Terms of Service violation',
  'rejected.listed' = 'Rejected due to reason listed',
  'rejected.other' = 'Rejected for other reason',
  'fields_needed' = 'Fields are needed',
  'listed' = 'Listed',
  'under_review' = 'Under Review',
  'other' = 'Other',
}

export enum StripeVerificationFieldEnum {
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
  disabled_reason: StripeVerificationReasonEnum | null
  due_by: string | null
  fields_needed: StripeVerificationFieldEnum[]
}
