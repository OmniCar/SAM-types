import { IContractOptionResponse } from './contractOption'
import { ITermsOfServiceResponse, ITermsOfServiceRequest } from './termsOfService'
import { PriceSpecification } from './priceSpecification'

export interface IContractTemplateCloneRequest {
  templateIds: number[]
  providerId: number
  includePrices: boolean
}

export interface IContractTemplateRequest {
  providerId: number
  name: string
  description: string
  image: string
  minAge: number
  maxAge: number
  properties: IContractOptionResponse[]
  options: IContractOptionResponse[]
  underDrivenCharge: PriceSpecification
  overDrivenCharge: PriceSpecification
  calculationMethod: number
  termsOfService: ITermsOfServiceRequest
  archived?: boolean
  formattedDescription: string | null
  weight: number
  showOnWebcalc: boolean
}

export interface IContractTemplateResponse {
  id: number
  name: string // Internal name (used in price files etc)
  image: string
  imageUrl?: string | null
  description: string // External name (shown to customer)
  properties: IContractOptionResponse[]
  options: IContractOptionResponse[]
  calculationMethod: number
  minAge: number
  maxAge: number
  underDrivenCharge: PriceSpecification
  overDrivenCharge: PriceSpecification
  termsOfService: ITermsOfServiceResponse
  providerId: number | null
  formattedDescription: string | null
  weight: number
  showOnWebcalc: boolean
  maxEndMileage?: number
  maxEndAge?: number
}
