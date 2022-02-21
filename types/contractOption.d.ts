import { PriceSpecification } from './priceSpecification'
import { IWarrantyRequest, IWarrantyResponse } from './warranty'
import { ICalculationRequest } from './priceCalculation'
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

export interface IContractOptionResponse {
  id: number
  price: PriceSpecification
  description: string
  conditionText: string
  weight: number
  contractProviderId: number | null
  abbreviation: string
  optionGroup: number | null
  internalName: string
  showOnWebcalc: boolean
  warranty: number | null | undefined
  calculationMethod: number | null
  termsOfService?: ITermsOfServiceResponse | null
  maxEndMileage?: number
  maxEndAge?: number
}
