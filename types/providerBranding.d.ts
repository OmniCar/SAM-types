import { IsoLocale } from './locale'

export interface IBrandingPayloadResponse {
  paymentInformation: IStripeInformationResponse
  providerInformation: IProviderInformationResponse
  providerBranding: IProviderBrandingResponse[]
  providerStyling: IProviderStylingResponse
  locale: IsoLocale
}

export interface IStripeInformationResponse {
  public_key: string
}

export interface IProviderInformationResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  logo: string
  contactFormUrl: string
  showRegistrationSelectionPage: boolean
  email: string
  termsOfTradeRef: string
  webCalcEnabled: boolean
  offerRequestsEnabled: boolean
}

export interface IProviderBrandingResponse {
  text: string
}

export interface IProviderStylingResponse {
  brandingLogo: string
  hasProviderStyling: boolean
}
