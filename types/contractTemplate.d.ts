import { IContractOptionResponse } from './contractOption'
import { ITermsOfServiceResponse, ITermsOfServiceRequest } from './termsOfService'
import { PriceSpecification } from './priceSpecification'

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
}

export interface IContractTemplateResponse {
  id: number
  name: string
  image: string
  description: string
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
}
