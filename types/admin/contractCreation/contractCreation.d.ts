import { IContractDetailsRecord } from '..'
import { DurationOptions, IContractOptionResponse, PriceSpecification } from '../..'
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

interface ICommonContractUpdateRequest {
  duration: number
  mileage: number
  optionIds: number[]
  providerPayments: number
  providerShare: number
  reference?: string
  startMileage?: number
  type: ContractType
}

interface ICommonContractCreationRequest extends ICommonContractUpdateRequest {
  contractTemplateId: number
  vehicle: Vehicle
  customerId?: number
  customer?: IUserInfo
  invoiceCustomerId?: number
  invoiceCustomer?: IUserInfo
}

export interface IContractAdjustmentRequest extends ICommonContractUpdateRequest {}

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

export interface IAdminContractAdjustmentResponse {
  type: ContractType
  vehicle: Vehicle
  contractTemplate: IContractTemplateResponse
  additionalOptions: IContractOptionResponse[]
  includedAdditionalOptions: IContractOptionResponse[]
  durations: DurationOptions
  duration: number
  mileage: number
  payments: {
    amountPerPayment: PriceSpecification
    downPayment: PriceSpecification
    firstPaymentDate: Date | string
    contractStartDate: Date | string
    contractEndDate: Date | string
    providerPayments: number
    providerShare: number
  }
  paymentGateway: PaymentGateway
  customerId: number
  customer: IUserInfo
  invoiceCustomerId: number
  invoiceCustomer: IUserInfo
}
