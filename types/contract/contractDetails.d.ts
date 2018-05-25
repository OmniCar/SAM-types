import { PriceSpecification } from 'priceSpecification'
import { IContactPersonResponse } from 'contactPerson'
import { IContractResponse } from './contract'
import { IContractOptionResponse } from 'contractOption'

export interface IContractDetailsResponse {
  type: string
  duration: number
  mileage: number
  startDate: Date
  expirationDate: Date
  totalPrice: PriceSpecification
  monthlyPrice: PriceSpecification
  providerShare: PriceSpecification
  seller: IContactPersonResponse
  endMileage: number
  extendedFrom: IContractResponse
  options: IContractOptionResponse[]
}
