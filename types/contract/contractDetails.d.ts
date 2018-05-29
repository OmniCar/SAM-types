import { PriceSpecification } from '../priceSpecification'
import { IContactPersonResponse } from '../contactPerson'
import { IContractResponse } from './contract'
import { IContractOptionResponse } from '../contractOption'
import { IIncludedContractOption } from '../includedContractOption';

export interface IContractDetailsResponse {
  type: string
  duration: number | string
  mileage: number | string
  startDate: Date
  expirationDate: Date
  totalPrice: PriceSpecification
  monthlyPrice: PriceSpecification
  providerShare: PriceSpecification
  seller: IContactPersonResponse
  endMileage: number
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
}
