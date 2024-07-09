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

export interface IBasicContractOption {
  internalName: string
  description: string // External name.
  v4FixedPrice?: boolean
  v4PriceListID?: number
  v4ParameterIndex?: number // Index of PriceList parameter (parameterID).
  v4Value?: string | number
}

export interface IGenericContractOptionResponse extends IBasicContractOption {
  id: number
  price: PriceSpecification
  conditionText: string
  weight: number // (!) Sort order.
  contractProviderId: number | null
  abbreviation: string
  optionGroup: number | null
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
