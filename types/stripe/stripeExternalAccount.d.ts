import { StripeCountryType, StripeCurrencyType, StripeEntityType } from './stripe'

export interface IStripeExternalAccount {
  providerId: number
  accountNumber: string // IBAN account, can be validated via IBAN.org
  country: StripeCountryType // dropdown with supported stripe countries (not implemented yet, hardcode DK)
  currency: StripeCurrencyType // dropdown with supported currencies (not implemented yet, hardcode dkk)
  accountHolderName: string
  accountHolderType: StripeEntityType // The type of entity that holds the account.
  defaultForCurrency: boolean
}

export interface IStripeExternalAccountResponse {
  id: string
  accountHolderName: string
  bankName: string
  defaultForCurrency: boolean
  last4: string
}
