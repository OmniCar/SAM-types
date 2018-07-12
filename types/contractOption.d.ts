import { PriceSpecification } from './priceSpecification'

export interface IContractOptionRequest {
  description: string
  conditionText: string
  weight?: number
  price: PriceSpecification
  contractProviderId: number
  archived?: boolean
  abbreviation?: string
}

export interface IContractOptionResponse {
  id: number
  price: PriceSpecification
  description: string
  conditionText: string
  weight: number
  contractProviderId: number | null
  abbreviation: string
}
