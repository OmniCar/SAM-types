import { StripeEntityType, StripeGenderType } from './stripe'
import { IStripeAddress } from './stripeAddress'
import { IStripeDateOfBirth } from './stripeDateOfBirth'
import { IStripeOwner } from './stripeOwner'

export interface IStripeLegalEntity {
  type: StripeEntityType // Either "individual" or "company", for what kind of legal entity the account owner is for
  dob: IStripeDateOfBirth // Primary owner
  firstName: string
  lastName: string
  gender: StripeGenderType
  personalAddress: IStripeAddress
  address: IStripeAddress
  phoneNumber: string
  additionalOwners: IStripeOwner[]
}
