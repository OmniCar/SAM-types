import { IContractOptionResponse } from './contractOption'
import { ITermsOfServiceResponse, ITermsOfServiceRequest } from './termsOfService'
import { PriceSpecification } from './priceSpecification'
import { TVehicleServiceType, TVehicleUsageType } from '../types/autoDAP/index'
import { TCurrency } from '../types/currency'

export type PriceSource = 'Pricelist' | 'Autoexperten' | 'AutoDAP'

export interface IContractTemplateCloneRequest {
  templateIds: number[]
  providerId: number
  includePrices: boolean
}

export interface IGenericContractTemplateRequest {
  providerId: number
  name: string
  description: string
  image: string
  minAge: number
  maxAge: number
  defaultDuration: number
  defaultMileage: number
  minimumPaymentsCount: number | null
  properties: IContractOptionResponse[]
  options: IContractOptionResponse[]
  calculationMethod: number
  priceSource: PriceSource
  termsOfService: ITermsOfServiceRequest
  archived?: boolean
  formattedDescription: string | null
  weight: number
  underdrivenCharge: PriceSpecification
  overdrivenCharge: PriceSpecification
  priceFactorForChildren?: IChildPriceFactorResponse[]
}

export interface IContractTemplateRequest extends IGenericContractTemplateRequest {
  underdrivenCharge: PriceSpecification
  overdrivenCharge: PriceSpecification
  showOnWebcalc: boolean
}

export interface IProductContractTemplateRequest extends IGenericContractTemplateRequest {
  defaultHours: number
  defaultYearlyServices: number
}

export interface IAutoDAPContractTemplateRequest extends IGenericContractTemplateRequest {
  vehicleServiceType: TVehicleServiceType //update
  vehicleUsageType: TVehicleUsageType //new
  oilLiterPrice: null | PriceSpecification
  labourHourCost: null | PriceSpecification
  euroToLocalCurrencyRateInTenthOfCents: number | null
  totalPriceFactorInTenthOfCents: number | null
  currencyPartsPrice: TCurrency | null
}

export interface IGenericContractTemplateResponse {
  id: number
  name: string // Internal name (used in price files etc)
  image: string
  imageUrl?: string | null
  description: string // External name (shown to customer)
  properties: IContractOptionResponse[]
  options: IContractOptionResponse[]
  calculationMethod: number
  priceSource: PriceSource
  minAge: number
  maxAge: number
  defaultDuration: number
  defaultMileage: number | null
  minimumPaymentsCount: number | null
  termsOfService: ITermsOfServiceResponse
  providerId: number | null
  formattedDescription: string | null
  weight: number
  maxEndAge?: number
  serviceVariantName: string
  serviceVariantId: string
  isProductTemplate?: boolean
  templateAutoDAPId?: number | null
  maxEndMileage?: number
  priceFactorForChildren?: IChildPriceFactorResponse[]
}

export interface IChildPriceFactorResponse {
  id?: number
  providerId: number
  administrativeName: string
  priceFactorInCents: number
}

export interface IContractTemplateResponse extends IGenericContractTemplateResponse {
  underdrivenCharge: PriceSpecification
  overdrivenCharge: PriceSpecification
  showOnWebcalc: boolean
}
export interface IProductContractTemplateResponse extends IGenericContractTemplateResponse {
  defaultHours: number
  defaultYearlyServices: number
  maxEndHours?: number
  maxEndServices?: number
  maxEndMileage?: number
}

export interface IAutoDAPContractTemplateResponse extends IGenericContractTemplateResponse {
  vehicleServiceType: TVehicleServiceType //update
  vehicleUsageType: TVehicleUsageType //new
  oilLiterPrice: null | PriceSpecification
  labourHourCost: null | PriceSpecification
  euroToLocalCurrencyRateInTenthOfCents: number | null
  totalPriceFactorInTenthOfCents: number | null
  currencyPartsPrice: TCurrency | null
}
