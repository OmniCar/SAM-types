import { PriceSource } from '../../'
import { PriceSpecification } from '../../priceSpecification'
import { IVehicleInfo } from '../../vehicle'
import { ContractType, ContractValueType } from './contractCreation'

export interface IContractCalculationRequest {
  priceSource?: PriceSource
  adjustedFrom?: string
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
  startDateISOString: string
  startMileage?: number
  startValue?: number
  startValueType?: ContractValueType
  type: ContractType
  v4ProductId: 0 | number // V4 contract product / "template" id.
  value?: number
  valueType: ContractValueType
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

// NOTE: V4PT does not use this interface!
export interface ICustomContractCalculationRequest extends IContractCalculationRequest {
  amountPerPayment: number
  brandName: string
  productModelName: string
  fuelTypeName: string
}

/**
 * For V4PricingTool.
 * @note The product in v4ProductId, not to be confused with product that is either a Vehicle or Other.
 */
export interface IStandardV4PricingToolContractCalculationRequest extends IContractCalculationRequest {
  vehicleInfo: IVehicleInfo
  v4ProductId: number // V4 contract product / "template" id.
  amountPerPayment: null | number
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
  serviceInfo?: string[] // Service information, mainly for ax.
}
