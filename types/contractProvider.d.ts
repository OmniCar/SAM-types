import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
import { ICountryResponse, ICountryRequest } from './country'
import { TCurrency, WarrantyOnboardingConfig } from './index'
import { IProviderCustomizationResponse } from './providerBranding'

export interface IContractProviderRequest extends IProviderCustomizationResponse {
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
  fragusContactPersonName: string | null
  providerGroup: string | null
  providerCategory: string | null
  additionalEmails: string | null
  isUsingV4PricingTool: boolean
  isLoadOptionalProviderCustomization: boolean
}

export interface IContractProviderResponse extends IProviderCustomizationResponse {
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
  fragusContactPersonName: string | null
  providerGroup: string | null
  providerCategory: string | null
  additionalEmails: string | null
  isUsingV4PricingTool: boolean
  isLoadOptionalProviderCustomization: boolean // Has providerCustomizationLoaded been loaded?
}

export interface IContractProviderListItemResponse {
  administrativeName: string
  autoSettlement: boolean
  contractProviderId: number
  country: ICountryResponse
  cvrCode: string
  disableContractTemplates: boolean
  fragusContactPersonName: string | null
  freeWarrantiesButton: boolean
  isAllowContractsWithoutVehiclePriceModel: boolean
  isForceEnableCustomContract: boolean
  isShowLogoOnWeb: boolean
  isUseWhiteBGOnWeb: boolean
  isUsingV4PricingTool: boolean
  justGOContractsEnabled: boolean
  omnicarFee: number
  parentProviderId: number | null
  productsEnabled: boolean
  providerCategory: string | null
  providerGroup: string | null
  state: ProviderState
  webCalcEnabled: boolean
}

export type ProviderState = 'Active' | 'Inactive'
