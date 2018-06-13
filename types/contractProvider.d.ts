import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'

export interface IContractProviderRequest {
  administrativeName: string
  cvrCode: string
  country: string
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
}

export interface IContractProviderResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  country: string
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
}
