import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
import { ICountryResponse, ICountryRequest } from './country'
import { WarrantyOnboardingConfig } from './index'

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
  webTitle: string | null
  isUseWhiteBGOnWeb: boolean
  isShowLogoOnWeb: boolean
  webLogoBanner: string | null
  webLogoSquare: string | null
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  parentProviderId: number | null
  warrantyOnboardingConfig: WarrantyOnboardingConfig | null
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
  logoUrl?: string | null
  contactFormUrl: string
  showRegistrationSelectionPage: boolean
  sendWelcomeLetter: boolean
  finalizedDate: Date | null
  providerIdentifier: string
  contactPerson: IContactPersonResponse
  termsOfTradeRef: string
  webCalcEnabled: boolean
  webTitle: string | null
  isUseWhiteBGOnWeb: boolean
  isShowLogoOnWeb: boolean
  webLogoBanner: string | null
  webLogoBannerUrl?: string | null
  webLogoSquare: string | null
  webLogoSquareUrl?: string | null
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  productContracts: boolean
  parentProviderId: number | null
  warrantyOnboardingConfig: WarrantyOnboardingConfig | null
}
