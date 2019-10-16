import { PriceSpecification } from './priceSpecification'
import { IWarrantyRequest, IWarrantyResponse } from './warranty';
import { ICalculationRequest } from './priceCalculation';

export interface IContractOptionRequest {
  description: string
  conditionText: string
  weight?: number
  price: PriceSpecification
  contractProviderId: number
  archived?: boolean
  abbreviation: string
  optionGroup?: number
  internalName?: string
  showOnWebcalc?: boolean
  warrantyID?: number | null
  calculationMethod?: number | null
}

export interface IContractOptionResponse {
  id: number
  price: PriceSpecification
  description: string
  conditionText: string
  weight: number
  contractProviderId: number | null
  abbreviation: string
  optionGroup: number
  internalName: string
  showOnWebcalc: boolean
  warranty: IWarrantyResponse | null
  calculationMethod: number | null
}
