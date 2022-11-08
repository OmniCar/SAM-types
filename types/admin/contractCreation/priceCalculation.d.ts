import { PriceSpecification } from '../../priceSpecification'
import { ContractValueType, ContractType } from './contractCreation'
import { IVehicleInfo } from '../../vehicle'
import { PriceSource } from '../../'

export interface IContractCalculationRequest {
  priceSource?: PriceSource
  contractTemplateId: number
  duration: number // AKA durationMonths, in months.
  isAdjustment: boolean
  isDownpaymentDistributed: boolean
  mileage: number // AKA distance, in km.
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

/**
 *  For V4PricingTool.
 */
export interface IV4PricingToolContractCalculationRequest extends IContractCalculationRequest {
  vehicleInfo: IVehicleInfo
  productId: number // V4 product / "template" id.
}

/**
 * The type returned by a price calculation.
 */
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
  x_adapDebugData?: any // For debugging purposes.
  x_debugData?: any // For debugging purposes.
}
