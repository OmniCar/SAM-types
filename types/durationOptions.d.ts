import { PriceSpecification } from './priceSpecification'

export interface DurationOptionsOptionsPrices {
  contractId: number
  price: PriceSpecification
}

export interface DurationOptionsOptions {
  mileage: number
  prices: DurationOptionsOptionsPrices[]
}

export interface DurationOptions {
  options: DurationOptionsOptions[]
  duration: number
}
