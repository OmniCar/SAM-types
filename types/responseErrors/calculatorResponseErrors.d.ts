export type LicensePlateLookupResponseErrors =
  | 'REGNO_VEHICLE_NOT_FOUND'
  | 'REGNO_SERVICE_DATA_NOT_FOUND' // No service data found.
  | 'REGNO_ALL_REQUIRED_SERVICE_DATA_NOT_FOUND' // Not all (except spare part prices) required service data found.
  | 'REGNO_ALL_REQUIRED_SERVICE_SPARE_PART_PRICES_NOT_FOUND' // Not all (except oil price) spare part prices found.
  | 'REGNO_ACTIVE_CONTRACT_EXISTS'
  | 'REGNO_NO_CONTRACTS_AVAILABLE'
  | 'REGNO_NO_CONTRACTS_AVAILABLE_FUELTYPE_NOT_SUPPORTED'
  | 'REGNO_VEHICLE_DATA_LOOKUP_TIMEOUT' // Ex, timeout of "normal" vehicle lookup.
  | 'REGNO_SERVICE_DATA_LOOKUP_TIMEOUT' // Ex, timeout of service data lookup (like AutoDAP).

type ModelsLookupResponseErrors = 'MODELS_NO_MODELS'
type BrandsLookupResponseErrors = 'BRANDS_NO_BRANDS'
type FuelTypeLookupResponseErrors = 'FUELTYPES_NO_FUELTYPES'
type OptionsLookupResponseErrors = 'OPTIONS_NO_OPTIONS'
type ContractsLookupResponseErrors = 'CONTRACTS_NO_CONTRACTS' | 'INVALID_REGISTRATION_DATE'
type PriceLookupResponseErrors = 'PRICE_TEMPLATE_NOT_FOUND' | 'PRICE_MODEL_NOT_FOUND' | 'PRICE_LINE_NOT_FOUND'
type PaymentPlanResponseErrors = 'UNSUPPORTED_CONTRACT_TYPE' | 'CONTRACT_ENDS_BEFORE_START'
type ContractTemplateResponseErrors =
  | 'TEMPLATE: NUMBER_OF_CONTRACT_TEMPLATES_NOT_ONE'
  | 'TEMPLATE: ONLY_CALCULATION_METHOD_200_is_SUPPORTED'
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
  | ContractTemplateResponseErrors
  | AutoexpertenResponseErrors
