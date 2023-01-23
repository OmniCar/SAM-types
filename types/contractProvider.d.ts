import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
import { ICountryResponse, ICountryRequest } from './country'
import { TCurrency, WarrantyOnboardingConfig } from './index'

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
  visibleToOtherChildren: boolean
  webCalcEnabled: boolean
  webTitle: string | null
  isUseWhiteBGOnWeb: boolean
  isForceEnableCustomContract: boolean
  isForceAllowCustomContracts: boolean
  isShowLogoOnWeb: boolean
  webLogoBanner: string | null
  webLogoSquare: string | null
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  productsEnabled: boolean
  justGOContractsEnabled: boolean
  parentProviderId: number | null
  warrantyOnboardingConfig: WarrantyOnboardingConfig | null
  autoSettlement: boolean
}

export interface IContractProviderResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  country: ICountryResponse
  currency?: TCurrency
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
  visibleToOtherChildren: boolean
  webCalcEnabled: boolean
  webTitle: string | null
  isUseWhiteBGOnWeb: boolean
  isForceEnableCustomContract: boolean
  isForceAllowCustomContracts: boolean
  isShowLogoOnWeb: boolean
  webLogoBanner: string | null
  webLogoBannerUrl?: string | null
  webLogoSquare: string | null
  webLogoSquareUrl?: string | null
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  productsEnabled: boolean
  justGOContractsEnabled: boolean
  parentProviderId: number | null
  warrantyOnboardingConfig: WarrantyOnboardingConfig | null
  state: ProviderState
  autoSettlement: boolean
  isAllowContractsWithoutVehiclePriceModel: boolean
}

export interface IContractProviderListItemResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  country: ICountryResponse
  omnicarFee: number
  webCalcEnabled: boolean
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  productsEnabled: boolean
  isForceEnableCustomContract: boolean
  justGOContractsEnabled: boolean
  parentProviderId: number | null,
  autoSettlement: boolean
  state: ProviderState
}

export interface IContractProviderListItemResponse {
  contractProviderId: number
  administrativeName: string
  cvrCode: string
  country: ICountryResponse
  omnicarFee: number
  webCalcEnabled: boolean
  freeWarrantiesButton: boolean
  disableContractTemplates: boolean
  productsEnabled: boolean
  isForceEnableCustomContract: boolean
  justGOContractsEnabled: boolean
  parentProviderId: number | null,
  autoSettlement: boolean
  state: ProviderState
}

export type ProviderState = 'Active' | 'Inactive'
