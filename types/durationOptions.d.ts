import { PriceSpecification } from './priceSpecification'

export interface DurationOptionsOptions {
  mileage: number
  prices: {
    contractId: number
    price: PriceSpecification
  }[]
}

export interface DurationOptions {
  options: DurationOptionsOptions[]
  duration: number
}
