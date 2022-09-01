import { TIsoCountry } from '../country'
import { IStripeDeclineChargeOn } from './stripeDeclineChargeOn'
import { IStripeExternalAccountResponse } from './stripeExternalAccount'
import { IStripeLegalEntity } from './stripeLegalEntity'
import { IStripeVerification } from './stripeVerification'

// @TODO - Export these out into some more generic place for others to use!!
export type StripeGenderType = 'male' | 'female'
// export type StripeCountryType = 'DK' | 'SE' | 'FI' // Should (maybe) go into apiTypes/country.d.ts
export type StripeCountryType = TIsoCountry
export type StripeCurrencyType = 'dkk' | 'sek' | 'eur' // Should go into apiTypes/currency.d.ts
export type StripeEntityType = 'company' | 'individual'

export interface IStripe {
  businessName: string
  icon?: IStripeFile
  logo?: IStripeFile
  primaryColor?: string
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
  verification: IStripeVerification
}

export interface IStripeFile {
  id: string
  linkUrl?: string
  fileName: string
}

export interface IStripeResponse extends IStripe {
  contractProviderId: number
  externalAccounts: IStripeExternalAccountResponse[]
}

export interface IStripeRequest extends IStripe {
  contractProviderId: number
}

export interface IStripeRefund<StripeRefund> {
  refund: StripeRefund | undefined
  invoiceId: string
}
