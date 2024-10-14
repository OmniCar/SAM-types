import { IApiOtherWithContracts } from '../../admin/product'
import { IApiVehicleWithContracts } from '../../admin/vehicle'
import { IsoLocale } from '../../locale'

export type ContractProviderOrderBy = 'providerId' | 'administrativeName' | 'inactive'

export interface IEssentialContractProviderInfo {
  administrativeName: string
  email: string
  phone: string
  // TODO: add TIsoCountry type
  country: string
  logo: string
  isShowLogoOnWeb?: boolean
  webLogoBanner?: string | null
}

export interface IContractProviderInfo extends IEssentialContractProviderInfo {
  providerId: number
  parentProviderId: number | null
  address1: string
  address2?: string
  city: string
  zipcode: string
  locale: IsoLocale
  currency: string
  webTitle?: string | null
  isUseWhiteBGOnWeb?: boolean
  isForceEnableCustomContracts?: boolean
  productsEnabled?: boolean
  webLogoSquare?: string | null
  vatPct: number
  inactive: boolean
  isUsingV4PricingTool: boolean
  isUseV4PTOnlyForSigning: boolean
}

export interface ICreateTestContractProvider {
  administrativeName: string
  countryIsoCode: string
}

export interface IProviderWithContracts {
  provider: IContractProviderInfo
  vehicles?: IApiVehicleWithContracts[]
  products?: IApiOtherWithContracts[]
}
