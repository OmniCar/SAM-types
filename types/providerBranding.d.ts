import { IsoLocale } from './locale'

export interface IBrandingPayloadResponse {
  locale: IsoLocale
  paymentInformation: IStripeInformationResponse
  providerInformation: IProviderInformationResponse
  providerBranding: IProviderBrandingResponse[]
  providerStyling: IProviderStylingResponse
  providerCustomization?: IProviderCustomizationResponse
  parentProviderId?: number | null
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
  hasAxTemplates: boolean // Autoexperten.
}

export interface IProviderBrandingResponse {
  text: string
}

export interface IProviderStylingResponse {
  brandingLogo: string
  hasProviderStyling: boolean
}

export interface IProviderCustomizationResponse {
  applyWebcalcSkorstensgaardFix: boolean | undefined // Set undefined if this setting is not loaded.
  webCalcTrackingPixelOrderConfirmationUrl: string | undefined // Set undefined if this setting is not loaded.
  webCalcTrackingPixelOrderConfirmationLastUpdated: string | undefined // Set undefined if this setting is not loaded.
  inheritParentStylingWebcalc: boolean | undefined // Set undefined if this setting is not loaded.
}
