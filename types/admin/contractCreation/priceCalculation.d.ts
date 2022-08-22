import { PriceSpecification } from '../../priceSpecification'
import { ContractValueType, ContractType } from './contractCreation'

export interface IContractCalculationRequest {
  contractTemplateId: number
  duration: number
  isAdjustment: boolean
  isDownpaymentDistributed: boolean
  mileage: number
  modelYear: number
  optionIds: number[]
  providerPayments: number
  providerShare: number
  registrationDate: string
  registrationNumber: string
  serviceVariantId: string
  type: ContractType
  valueType: ContractValueType
  adjustedFrom?: string
  startMileage?: number
  startValue?: number
  startValueType?: ContractValueType
  value?: number
  vin?: string
}

export interface IStandardContractCalculationRequest extends IContractCalculationRequest {
  brandId: number
  productModelId: number
  fuelTypeId: number
}

export interface IStandardAxContractCalculationRequest extends IContractCalculationRequest {
  brandName: string
  productModelName: string
  fuelTypeName: string
}

export interface IStandardADAPContractCalculationRequest extends IContractCalculationRequest {
  vin: string
  fuelTypeName: string
}

export interface ICustomContractCalculationRequest extends IContractCalculationRequest {
  amountPerPayment: number
  brandName: string
  productModelName: string
  fuelTypeName: string
}

// The type returned by a price calculation
export interface IContractCalculationResponse {
  adjustedAmount?: PriceSpecification
  adjustedContractFullCost?: PriceSpecification
  adjustedPaymentsLeft?: number
  amountPrPayment: PriceSpecification
  contractCost: PriceSpecification
  contractEndDate: string
  contractStartDate: string
  customerCost: PriceSpecification
  customerPayments: number
  customerShare: PriceSpecification
  distributedAmount: PriceSpecification
  downpayment: PriceSpecification
  firstPaymentDate: string
  isDownpaymentDistributed: boolean
  providerCost: PriceSpecification
  providerPayments: number
  providerShare: PriceSpecification
  x_adapDebugData?: any
}
