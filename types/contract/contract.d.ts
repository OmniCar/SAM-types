import { IContractTemplateResponse } from '../contractTemplate'
import { IContractOptionResponse } from '../contractOption'
import { Customer } from '../customer'
import { Vehicle } from '../vehicle'
import { Other } from '../product'
import { ICalculationResponse } from '../priceCalculation'
import { ContractValueType, ContractState, PaymentGateway } from '../index'
import { IContractProviderResponse } from '../contractProvider'

export interface IContractResponse {
  id: number
  customer: Customer
  product: Vehicle | Other
  duration: string
  mileage: string
  value?: string
  valueType?: ContractValueType
  startMileage: number
  startValue?: number
  startValueType?: ContractValueType
  template: null | IContractTemplateResponse
  calculationMethod: number
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
  termsOfTradeRef?: string
  paymentGateway: PaymentGateway
}
