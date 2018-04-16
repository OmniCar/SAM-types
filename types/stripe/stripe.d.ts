import { IStripeDeclineChargeOn } from './stripeDeclineChargeOn'
import { IStripeExternalAccountResponse } from './stripeExternalAccount'
import { IStripeLegalEntity } from './stripeLegalEntity'

// @TODO - Export these out into some more generic place for others to use!!
export type StripeGenderType = 'male' | 'female'
export type StripeCountryType = 'DK' | 'SE' // Should go into apiTypes/country.d.ts
export type StripeCurrencyType = 'dkk' | 'sek' // Should go into apiTypes/currency.d.ts
export type StripeEntityType = 'company' | 'individual'

export interface IStripe {
  businessName: string
  businessUrl: string
  debitNegativeBalances: boolean // default is true
  declineChargeOn: IStripeDeclineChargeOn
  defaultCurrency: StripeCurrencyType
  legalEntity: IStripeLegalEntity
  payoutStatementDescriptor: string
  statementDescriptor: string // Max 22 characters!!
  supportEmail: string
  supportPhone: string
  supportUrl: string
}

export interface IStripeResponse extends IStripe {
  contractProviderId: number
  externalAccounts: IStripeExternalAccountResponse[]
}

export interface IStripeRequest extends IStripe {
  contractProviderId: number
}
