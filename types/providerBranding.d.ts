export interface IBrandingPayloadResponse {
  paymentInformation: IStripeInformationResponse
  providerInformation: IProviderInformationResponse
  providerBranding: IProviderBrandingResponse[]
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
}

export interface IProviderBrandingResponse {
  text: string
}
