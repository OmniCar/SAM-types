// TODO: Possibly needs an update to facilate 3 decimals for euro /marko
export interface PriceSpecification {
  price: number
  priceInclVat: number
  vatShare: number
  currency: string
}
