import { PriceSpecification } from './priceSpecification'

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
