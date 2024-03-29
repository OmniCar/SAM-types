export type UserAndCustomerErrors =
  | 'GENERIC_CONTACT_PERSON_NOT_FOUND'
  | 'GENERIC_CUSTOMER_ALREADY_EXISTS'
  | 'GENERIC_CUSTOMER_EMAIL_ALREADY_EXISTS_AS_USER' // The customer's email already exists as a (Seller/Admin/SuperAdmin/...) -User.
  | 'GENERIC_CUSTOMER_NOT_FOUND'
  | 'GENERIC_FORBIDDEN_ROLE'
  | 'GENERIC_NODE_ROLE_NOT_FOUND'
  | 'GENERIC_USER_ALREADY_EXISTS'
  | 'GENERIC_USER_CONFIGURATION_NOT_FOUND'
  | 'GENERIC_USER_NOT_FOUND'
  | 'GENERIC_USERNAME_OR_PASSWORD_NOT_FOUND'
