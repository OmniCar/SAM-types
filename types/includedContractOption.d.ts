import { PriceSpecification } from './priceSpecification'
import { IContractResponse } from './contract/contract'

export interface IIncludedContractOption {
  id: number
  optionId: number
  description: string
  conditionText: string
  weight: number
  price: PriceSpecification
  assoc: 'PROPERTY' | 'ADDITIONAL'
  abbreviation: string
}
