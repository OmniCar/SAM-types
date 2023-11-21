export type ContractResponseErrors =
  | ContractUpdateErrors
  | PostContractResponseErrors
  | ContractActivationPreventedBySystemForThisVehicle
  | WarrantyCheckErrors

type ContractUpdateErrors = 'CONTRACT_TRANSITION_INVALID_OR_ILLEGAL'
type PostContractResponseErrors =
  | 'CONTRACT_MISSING_OR_INVALID_INFORMATION'
  | 'ITEM_SERIALNO_ACTIVE_CONTRACT_EXISTS'
  | 'ACTIVE_CONTRACT_ALREADY_EXISTS_FOR_VEHICLE'

// In some situations StakeHolder (eg: CEO in Finland) wants to prevent the user from knowing exacly WHY a contract
// cannot be activated, ONLY that the system prevents it from beeing activated.
type ContractActivationPreventedBySystemForThisVehicle = 'CONTRACT_ACTIVATION_PREVENTED_BY_SYSTEM_FOR_THIS_VEHICLE'

type WarrantyCheckErrors =
  | 'WARRANTY_FREE_CONTRACT_NOT_ALLOWED'
  | 'WARRANTY_TEMPLATE_ID_NOT_FOUND'
  | 'WARRANTY_START_MILAGE_MISSING'
  | 'WARRANTY_START_MILAGE_EXCEEDS_WARRANTY_MAX_MILAGE'
  | 'WARRANTY_END_MILAGE_EXCEEDS_WARRANTY_MAX_MILAGE'
  | 'WARRANTY_ALREADY_EXISTS_FOR_VEHICLE'
  | 'WARRANTY_MODEL_NOT_FOUND'
  | 'WARRANTY_NOT_AVAILABLE_FOR_VEHICLE'
