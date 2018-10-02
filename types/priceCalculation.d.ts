import { PriceSpecification } from './priceSpecification'

export interface ICalculationRequest {
  contractTemplateId: number
  brandId: number
  vehicleModelId: number
  fuelTypeId: number
  duration: number
  mileage: number
  registrationDate?: string
  optionIds: number[]
}

/**
 * The type returned by a price calculation
 */
export interface ICalculationResponse {
  amountPerPayment: PriceSpecification
  downpayment: PriceSpecification
  firstPaymentDate: string
  contractStartDate: string
  contractEndDate: string
}
