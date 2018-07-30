import { PriceSpecification } from '../../priceSpecification'

export type ContractType = 'STANDARD' | 'CUSTOM'

export interface ICalculationRequest {
  type: ContractType
  contractTemplateId: number
  duration: number
  mileage: number
  registrationDate: string
  optionIds: number[]
  providerPayments: number
  providerShare: number
}

export interface IStandardContractCalculationRequest extends ICalculationRequest {
  brandId: number
  vehicleModelId: number
  fuelTypeId: number
}

export interface ICustomContractCalculationRequest extends ICalculationRequest {
  brandName: string
  vehicleModelName: string
  fuelTypeName: string
}

/**
 * The type returned by a price calculation
 */
export interface ICalculationResponse {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  firstPaymentDate: string
  contractStartDate: string
  contractEndDate: string
}
