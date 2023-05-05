import { PriceSpecification } from './priceSpecification'

// ----------------------------------------------------------------------------
// These below are mainly used in VERSION 1 of ContractFlowDurationMileage ('ContractFlowDurationMileageVer1')
export interface IDurationOptionsOptionPrice {
  contractId: number
  price: PriceSpecification
}
export interface IDurationOptionsOption {
  mileage: number
  prices: IDurationOptionsOptionPrice[]
}
export interface DurationOptions {
  options: IDurationOptionsOption[]
  duration: number
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// These below are mainly used in VERSION 2 of ContractFlowDurationMileage ('ContractFlowDurationMileageVer2')
export type TMileageDurationsMap = { [key: string]: IMileageDurations }

export interface IMileageDurations {
  options: IMileageDurationItem[]
}

export interface IMileageDurationItem {
  mileage: number // Eg. 60000. In km.
  months: number[] // Eg. [24,36,48,60].
}
// ----------------------------------------------------------------------------
