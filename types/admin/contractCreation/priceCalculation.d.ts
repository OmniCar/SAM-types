import { PriceSpecification } from '../../priceSpecification'

export type ContractType = 'STANDARD' | 'CUSTOM'

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

export interface ICustomContractCalculationRequest extends IContractCalculationRequest {
  amountPrPayment: number
}

/**
 * The type returned by a price calculation
 */
export interface IContractCalculationResponse {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  firstPaymentDate: string
  contractStartDate: string
  contractEndDate: string
}
