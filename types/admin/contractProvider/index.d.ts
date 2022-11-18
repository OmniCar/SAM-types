import { IApiOtherWithContracts } from '../../admin/product'
import { IApiVehicleWithContracts } from '../../admin/vehicle'
import { IsoLocale } from '../../locale'

export type ContractProviderOrderBy = 'providerId' | 'administrativeName' | 'inactive'

export interface IContractProviderInfo {
  providerId: number
  parentProviderId: number | null
  administrativeName: string
  logo: string
  email: string
  phone: string
  address1: string
  address2?: string
  city: string
  zipcode: string
  locale: IsoLocale
  country: string
  currency: string
  webTitle?: string | null
  isUseWhiteBGOnWeb?: boolean
  isShowLogoOnWeb?: boolean
  isForceEnableCustomContracts?: boolean
  webLogoBanner?: string | null
  webLogoSquare?: string | null
  vatPct: number
  inactive: boolean
  isUsingV4PricingTool: boolean
}

export interface ICreateTestContractProvider {
  administrativeName: string
  countryIsoCode: string
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
