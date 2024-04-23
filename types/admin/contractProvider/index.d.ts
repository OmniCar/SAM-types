import { IApiOtherWithContracts } from '../../admin/product'
import { IApiVehicleWithContracts } from '../../admin/vehicle'
import { IsoLocale } from '../../locale'

export type ContractProviderOrderBy = 'providerId' | 'administrativeName' | 'inactive'

export interface IEssentialContractProviderInfo {
  administrativeName: string
  email: string
  phone: string
  country: string
}

export interface IContractProviderInfo extends IEssentialContractProviderInfo {
  providerId: number
  parentProviderId: number | null
  logo: string
  address1: string
  address2?: string
  city: string
  zipcode: string
  locale: IsoLocale
  currency: string
  webTitle?: string | null
  isUseWhiteBGOnWeb?: boolean
  isShowLogoOnWeb?: boolean
  isForceEnableCustomContracts?: boolean
  productsEnabled?: boolean
  webLogoBanner?: string | null
  webLogoSquare?: string | null
  vatPct: number
  inactive: boolean
  isUsingV4PricingTool: boolean
  isUseV4PTOnlyForSigning: boolean
  noCustomV4PTContracts: boolean
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
