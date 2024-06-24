import { PriceSpecification } from './priceSpecification'
import { ITermsOfServiceResponse } from './termsOfService'

export interface IContractOptionRequest {
  description: string
  conditionText: string
  weight?: number
  price: PriceSpecification
  contractProviderId: number
  archived?: boolean
  abbreviation: string
  optionGroup: number | null
  internalName: string
  showOnWebcalc: boolean
  warranty: number | null
  calculationMethod: number | null
}

export interface IGenericContractOptionResponse {
  id: number
  price: PriceSpecification
  description: string
  conditionText: string
  weight: number // (!) Sort order, lowest sorted first.
  contractProviderId: number | null
  abbreviation: string
  optionGroup: number | null
  internalName: string
  warranty: number | null | undefined
  calculationMethod: number | null
  termsOfService?: ITermsOfServiceResponse | null
  maxEndAge?: number
}

export interface IContractOptionResponse extends IGenericContractOptionResponse {
  showOnWebcalc: boolean
  maxEndMileage?: number
}

export interface IProductContractOptionResponse extends IGenericContractOptionResponse {
  maxEndServices?: number
  maxEndHours?: number
}
