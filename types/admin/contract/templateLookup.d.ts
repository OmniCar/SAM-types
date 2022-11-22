import { ContractType } from '../../../types'

export interface ITemplateLookupRequest {
  contractType: ContractType
  regNo?: string
  vin?: string
  brand: string
  model: string
  fuelType: string
  regDate: string
  modelYear?: number
}
