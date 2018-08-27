import { PriceSpecification } from './priceSpecification'

export interface DurationOptionsOptionPrice {
  contractId: number
  price: PriceSpecification
}

export interface DurationOptionsOption {
  mileage: number
  prices: DurationOptionsOptionPrice[]
}

export interface DurationOptions {
  options: DurationOptionsOption[]
  duration: number
}
