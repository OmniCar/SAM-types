import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
import { ICountryResponse, ICountryRequest } from './country'

export interface IContractProviderRequest {
  administrativeName: string
  cvrCode: string
  country: ICountryRequest
  postmarkFromEmail: string
  omnicarFee: number
  hoursToReminder1: number
  hoursToReminder2: number
  hoursToReminder3: number
  logo: string
  contactFormUrl: string
  showRegistrationSelectionPage: boolean
  sendWelcomeLetter: boolean
  finalizedDate: Date | null
  providerIdentifier: string
  contactPerson: IContactPersonRequest
  termsOfTradeRef: string
  webCalcEnabled: boolean
}

export interface IContractProviderResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  country: ICountryResponse
  postmarkFromEmail: string
  omnicarFee: number
  hoursToReminder1: number
  hoursToReminder2: number
  hoursToReminder3: number
  logo: string
  contactFormUrl: string
  showRegistrationSelectionPage: boolean
  sendWelcomeLetter: boolean
  finalizedDate: Date | null
  providerIdentifier: string
  contactPerson: IContactPersonResponse
  termsOfTradeRef: string
  webCalcEnabled: boolean
}
