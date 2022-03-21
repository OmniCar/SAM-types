// import { TCurrency } from "../types"

/**
 * Note: If priceWith3Decimals has a value then use this value as price (possible value in price
 * may be ignored), while if priceWith3Decimals is undefined then use the value in price.
 * 
 * @param price This value is the price only with max 2 decimals (the precision).
 * @param priceWith3Decimals This price facilates up to 3 decimals (needed for
 * calculations at least for euros to get rid of some rounding issues in
 * combination with VAT in some cases).
 */
// TODO: Switch type of currency to TCurrency
export interface PriceSpecification {
  price: number     // Price with max 2 decimals (should have been mapped from cents).
  priceWith3Decimals?: number // Price with upto 3 decimals (should have been mapped from tenth of cents).
  priceInclVat: number
  vatShare: number
  currency: string
  // currency: TCurrency
}
