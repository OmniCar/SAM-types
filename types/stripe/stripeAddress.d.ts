import { StripeCountryType } from './stripe'

export interface IStripeAddress {
  city: string
  country: StripeCountryType
  line1: string
  line2: string | null
  postalCode: number | string
  state: string | null
}
