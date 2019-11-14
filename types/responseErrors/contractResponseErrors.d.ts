
export type ContractResponseErrors =
  | ContractUpdateErrors
  | PostContractResponseErrors
  | WarrantyCheckErrors


type ContractUpdateErrors = 'CONTRACT_TRANSITION_INVALID_OR_ILLEGAL'
type PostContractResponseErrors = 'CONTRACT_MISSING_OR_INVALID_INFORMATION'

type WarrantyCheckErrors =
  | 'WARRANTY_FREE_CONTRACT_NOT_ALLOWED'
  | 'WARRANTY_TEMPLATE_ID_NOT_FOUND'
  | 'WARRANTY_START_MILAGE_MISSING'
  | 'WARRANTY_START_MILAGE_EXCEEDS_WARRANTY_MAX_MILAGE'
  | 'WARRANTY_END_MILAGE_EXCEEDS_WARRANTY_MAX_MILAGE'
