import { PriceSpecification } from '../../priceSpecification'

export type ContractType = 'STANDARD' | 'CUSTOM' | 'ADJUST'

export interface IContractCalculationRequest {
  type: ContractType
  contractTemplateId: number
  duration: number
  mileage: number
  registrationDate: string
  optionIds: number[]
  providerPayments: number
  providerShare: number
}

export interface IStandardContractCalculationRequest extends IContractCalculationRequest {
  brandId: number
  vehicleModelId: number
  fuelTypeId: number
}

export interface IAdjustContractCalculationRequest extends IStandardContractCalculationRequest {
  adjustedFrom: number
}

export interface ICustomContractCalculationRequest extends IContractCalculationRequest {
  amountPerPayment: number
}

/**
 * The type returned by a price calculation
 */ export interface IContractCalculationResponse {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  providerShare: PriceSpecification
  customerShare: PriceSpecification
  providerPayments: number
  customerPayments: number
  providerCost: PriceSpecification
  customerCost: PriceSpecification
  contractCost: PriceSpecification
  firstPaymentDate: string
  contractStartDate: string
  contractEndDate: string
  totalPriceNewContract?: PriceSpecification
  paidInTotalOnPreviousContract?: PriceSpecification
  paymentsLeftOnNewContract?: number
}
