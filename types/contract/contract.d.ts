import { IContractTemplateResponse } from '../contractTemplate'
import { IContractOptionResponse } from '../contractOption'
import { Customer } from '../customer'
import { Vehicle } from '../vehicle'
import { ICalculationResponse } from '../priceCalculation'
import { ContractState, PaymentGateway } from '../index'
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
  prettyIdentifier: string
  startDate: string
  endDate: string
  offerExpiresAt?: string
  state: ContractState
  contractProvider: IContractProviderResponse
  templateImage: string
  termsRef: string
  paymentGateway: PaymentGateway
}
