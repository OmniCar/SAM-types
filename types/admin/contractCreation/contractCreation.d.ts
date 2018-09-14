import { IContractDetailsRecord } from '..'
import { IContractTemplateResponse } from '../../contractTemplate'
import { PaymentGateway, PaymentType } from '../../payment'
import { Vehicle } from '../../vehicle'
import { IUserInfo } from '../user/user'
import { ICarCollection } from './carData'
import { ContractType } from './priceCalculation'

export interface IContractCreationData {
  payment: IContractCreationPayment
  cars: ICarCollection
  templates: IContractTemplateResponse[]
}

export interface IContractCreationPayment {
  stripeToken: string
  paymentGateways: PaymentGateway[]
}

interface ICommonContractCreationRequest {
  type: ContractType
  contractTemplateId: number
  duration: number
  mileage: number
  vehicle: Vehicle
  optionIds: number[]
  providerPayments: number
  providerShare: number
  customerId?: number
  customer?: IUserInfo
  invoiceCustomerId?: number
  invoiceCustomer?: IUserInfo
}

export interface ICustomContractCreationRequest extends ICommonContractCreationRequest {
  type: 'CUSTOM'
  amountPerPayment: number
}

export interface IStandardContractCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD'
}

export interface IContractCreationResponse {
  serviceContractId: number
  prettyIdentifier: string
}

export interface IAdminContractActivationRequest {
  paymentGateway: PaymentGateway
  paymentType: PaymentType
  creditCardToken?: string
}

export interface IAdminContractActivationResponse {
  serviceContract: IContractDetailsRecord
}
