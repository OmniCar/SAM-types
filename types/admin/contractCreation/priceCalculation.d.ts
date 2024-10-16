import { PriceSource, TV4PTProductType } from '../../'
import { PriceSpecification } from '../../priceSpecification'
import { IVehicleInfo } from '../../vehicle'
import { ContractType, ContractValueType } from './contractCreation'

export interface IContractCalculationRequest {
  priceSource?: PriceSource
  contractProductType: TV4PTProductType | null
  contractTemplateId: number
  duration: number // AKA durationMonths, in months.
  startDateISOString: string
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
  x_debugData?: any // For debugging purposes.
  serviceInfo?: string[] // Service information, mainly for ax.
}
