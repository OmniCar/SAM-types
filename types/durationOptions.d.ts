import { PriceSpecification } from './priceSpecification'

export interface DurationOptions {
  options: {
    mileage: number
    prices: {
      contractId: number
      price: PriceSpecification
    }[]
  }[]
  duration: number
}
