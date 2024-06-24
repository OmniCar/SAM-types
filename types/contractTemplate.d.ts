import { TCurrency } from '../types/currency'
import { IFileItem } from './admin/contract/contractDetails'
import { IContractOptionResponse } from './contractOption'
import { PriceSpecification } from './priceSpecification'
import { ITermsOfServiceRequest, ITermsOfServiceResponse } from './termsOfService'
import { TV4PTPaymentType, TV4PTProductType } from './v4PricingTool'

export type PriceSource = 'Pricelist' | 'Autoexperten' | 'V4PricingTool'

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
  weight: number // (!) Sort order.
  underdrivenCharge: PriceSpecification
  overdrivenCharge: PriceSpecification
  totalPriceFactorInTenthOfCents: number | null
  disableServiceInfoFile: boolean | null
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
  defaultDuration: number | null
  defaultMileage: number | null
  minimumPaymentsCount: number | null
  termsOfService: ITermsOfServiceResponse
  providerId: number | null
  v4ProviderId?: number
  v4ProductId?: number
  formattedDescription: string | null
  weight: number // (!) Sort order.
  maxEndAge?: number
  serviceVariantName: string
  serviceVariantId: string
  isProductTemplate?: boolean
  maxEndMileage?: number
  totalPriceFactorInTenthOfCents: number | null
  disableServiceInfoFile: boolean | null
}

export interface IContractTemplateResponse extends IGenericContractTemplateResponse {
  underdrivenCharge: PriceSpecification
  overdrivenCharge: PriceSpecification
  showOnWebcalc: boolean
  v4ProductType: null | TV4PTProductType
  v4SupportedPaymentTypes: TV4PTPaymentType[]
  // v4FilesForCustomerAtActivation: { name: string; url: string }[] // Files attached in activation email to end-customer.
  filesContainerAlongContract: null | IFileItem[] // Optional extra files, except the TOS file.
}
export interface IProductContractTemplateResponse extends IGenericContractTemplateResponse {
  defaultHours: number
  defaultYearlyServices: number
  maxEndHours?: number
  maxEndServices?: number
  maxEndMileage?: number
}
