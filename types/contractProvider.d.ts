import { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
import { ICountryRequest, ICountryResponse } from './country'
import { ContractState, TCurrency, TV4PTProductType } from './index'
import { PaymentGateway } from './payment'
import { IProviderCustomizationResponse } from './providerBranding'

export interface IContractProviderRequest extends IProviderCustomizationResponse {
  administrativeName: string
  cvrCode: string
  country: ICountryRequest
  omnicarFee: number
  paymentGateways: PaymentGateway[]
  postmarkFromEmail: string
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
  autoSettlement: boolean
  fragusContactPersonName: string | null
  providerGroup: string | null
  providerCategory: string | null
  additionalEmails: string | null
  isUsingV4PricingTool: boolean
  isUseV4PTOnlyForSigning: boolean
  isLoadOptionalProviderCustomization: boolean
}

export interface IContractProviderResponse extends IProviderCustomizationResponse {
  contractProviderId: number
  administrativeName: string
  parentProviderId: number | null
  v4ProviderId: number | null
  cvrCode: string
  country: ICountryResponse
  currency?: TCurrency
  omnicarFee: number
  paymentGateways: PaymentGateway[]
  postmarkFromEmail: string
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
  state: ProviderState
  autoSettlement: boolean
  isAllowContractsWithoutVehiclePriceModel: boolean
  fragusContactPersonName: string | null
  providerGroup: string | null
  providerCategory: string | null
  additionalEmails: string | null
  isUsingV4PricingTool: boolean
  isUseV4PTOnlyForSigning: boolean
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
  isUseV4PTOnlyForSigning: boolean
  justGOContractsEnabled: boolean
  omnicarFee: number
  parentProviderId: number | null
  productsEnabled: boolean
  providerCategory: string | null
  providerGroup: string | null
  state: ProviderState
  webCalcEnabled: boolean
}

export interface IEssentialContract {
  prettyIdentifier: string
  contractState: ContractState
  contractStartDate: Date | string
  contractEndDate: Date | string
  contractName: string
  contractProductType: null | TV4PTProductType
}

export type ProviderState = 'Active' | 'Inactive'
