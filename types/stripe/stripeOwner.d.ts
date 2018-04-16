import { IStripeAddress } from './stripeAddress'
import { IStripeDateOfBirth } from './stripeDateOfBirth'

export interface IStripeOwner {
  address: IStripeAddress
  dob: IStripeDateOfBirth
  firstName: string
  lastName: string
}
