import { IContractTemplateResponse } from '../contractTemplate'
import { IContractOptionResponse } from '../contractOption'
import { Customer } from '../customer'
import { Vehicle } from '../vehicle'
import { ICalculationResponse } from '../priceCalculation'
import { ContractState } from '../index'
import { ITermsOfServiceResponse } from '../termsOfService'
import { IContractProviderResponse } from '../contractProvider'

export interface IContractResponse {
  id: number
  customer: Customer
  vehicle: Vehicle
  duration: string
  mileage: string
  startMileage: number
  template: IContractTemplateResponse
  options: IContractOptionResponse[]
  payment: ICalculationResponse
  // planCalculationDate: string
  prettyIdentifier: string
  startDate: string
  endDate: string
  offerExpiresAt?: string
  state: ContractState
  contractProvider: IContractProviderResponse
  templateImage: string
  termsOfService: ITermsOfServiceResponse
}
