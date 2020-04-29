import { IContractDetailsRecord } from '..'
import { DurationOptions, IContractOptionResponse } from '../..'
import { IContractTemplateResponse } from '../../contractTemplate'
import { PaymentGateway, PaymentType } from '../../payment'
import { Vehicle } from '../../vehicle'
import { IAdminCustomer } from '../customer/customer'
import { ICarCollection } from './carData'
import { IContractCalculationResponse } from './priceCalculation'
import { PriceSpecification } from './../../priceSpecification'

export type ContractType = 'STANDARD' | 'CUSTOM' | 'EXTERNAL'

export type ServiceContractFlag = 'DISTRIBUTE_DOWNPAYMENT' | 'NULLIFY_DOWNPAYMENT'

export interface IContractCreationData {
  payment: IContractCreationPayment
  termsOfTradeRef?: string
  externalWarrantiesEnabled?: boolean
  externalWarrantiesShowComponent?: boolean
  externalWarrantiesShowButton?: boolean
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
  paymentGateway: PaymentGateway
  customerId?: number
  customer?: IAdminCustomer
  invoiceCustomerId?: number
  invoiceCustomer?: IAdminCustomer
  isDownpaymentDistributed: boolean
}

export interface IContractAdjustmentRequest extends ICommonContractUpdateRequest {
  contractTemplateId: number
}

export interface ICustomContractCreationRequest extends ICommonContractCreationRequest {
  type: 'CUSTOM'
  amountPerPayment: number
  offerRequestId?: number
  offerRequestApprovalMessage?: string
}

export interface IStandardContractCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD'
}

export interface IContractPrintCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD' | 'CUSTOM'
  amountPerPayment?: number
  adjustedFrom?: string
  isAdjustment?: boolean
}

export interface ICreateFreeWarrantyRequest {
  warrantyId: number
  warrantyLengthMonths: number
  modelModelId?: number
  vehicle: Vehicle
  startMileage: number
  customerId?: number
  customer?: IAdminCustomer
}

export interface ICreateFreeWarrantyResponse {
  req: ICreateFreeWarrantyRequest
  success: boolean
  error: string
  startDate: Date
  endDate: Date
  warrantyType: string
}

export interface IAvailableFreeWarrantyRequest {
  vehicleId?: number
  vin: string
  regNumber: string
  regDate: string
  modelModelId?: number
  brandName: string
  brandId?: number
  vehicleModelName: string
  vehicleModelId?: number
  fuelTypeName: string
  fuelTypeId?: number
  startMileage: number
}

export interface IAvailableFreeWarrantyResponse {
  vehicleHasActiveWarranty: boolean
  minMilageDiffPerYear: number
  availableWarranties: IAvailableFreeWarranty[]
}

export interface IAvailableFreeWarranty {
  warrantyId: number
  warrantyName: string
  maxYears: number
  oneTimeFeeYear: PriceSpecification
  externalId: number
  calculationMethod: 100 | 200
  maxStartMileage: number
  maxEndMileage: number
  warrantyTermsRef: string
  contractStartDate: Date
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
  durations: DurationOptions[]
  duration: number
  mileage: number
  startMileage: number
  payments: IContractCalculationResponse
  paymentGateway: PaymentGateway
  customerId: number
  customer: IAdminCustomer
  invoiceCustomerId: number
  invoiceCustomer: IAdminCustomer
  availableTemplatesExtension?: IContractTemplateResponse[]
  availableDurationsExtension?: DurationOptions[]
}

export interface IContractOfferPrintData {
  token: string
}
