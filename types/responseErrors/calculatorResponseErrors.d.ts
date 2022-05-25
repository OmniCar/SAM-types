export type LicensePlateLookupResponseErrors =
  | 'REGNO_VEHICLE_NOT_FOUND'
  | 'REGNO_ACTIVE_CONTRACT_EXISTS'
  | 'REGNO_NO_CONTRACTS_AVAILABLE'

type ModelsLookupResponseErrors = 'MODELS_NO_MODELS'
type BrandsLookupResponseErrors = 'BRANDS_NO_BRANDS'
type FuelTypeLookupResponseErrors = 'FUELTYPES_NO_FUELTYPES'
type OptionsLookupResponseErrors = 'OPTIONS_NO_OPTIONS'
type ContractsLookupResponseErrors = 'CONTRACTS_NO_CONTRACTS' | 'INVALID_REGISTRATION_DATE'
type PriceLookupResponseErrors = 'PRICE_TEMPLATE_NOT_FOUND' | 'PRICE_MODEL_NOT_FOUND' | 'PRICE_PRICE_NOT_FOUND'
type PaymentPlanResponseErrors = 'UNSUPPORTED_CONTRACT_TYPE' | 'CONTRACT_ENDS_BEFORE_START'
type AutoexpertenResponseErrors = 'VEHICLE_TOO_OLD' | 'BRAND_NO_CONTRACTS_AVAILABLE'

export type CalculatorResponseErrors =
  | LicensePlateLookupResponseErrors
  | ModelsLookupResponseErrors
  | BrandsLookupResponseErrors
  | FuelTypeLookupResponseErrors
  | OptionsLookupResponseErrors
  | ContractsLookupResponseErrors
  | PriceLookupResponseErrors
  | PaymentPlanResponseErrors
  | AutoexpertenResponseErrors
