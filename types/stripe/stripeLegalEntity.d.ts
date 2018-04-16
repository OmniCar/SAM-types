import { StripeGenderType, StripeEntityType } from './stripe'
import { IStripeAddress } from './stripeAddress'
import { IStripeOwner } from './stripeOwner'
import { IStripeDateOfBirth } from './stripeDateOfBirth'

export interface IStripeLegalEntity {
  type: StripeEntityType // Either "individual" or "company", for what kind of legal entity the account owner is for
  businessTaxId: string
  businessVatId: string
  dob: IStripeDateOfBirth // Primary owner
  firstName: string
  lastName: string
  gender: StripeGenderType
  personalAddress: IStripeAddress
  address: IStripeAddress
  phoneNumber: string
  additionalOwners: IStripeOwner[]
}
