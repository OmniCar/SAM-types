import { Model } from './model'
import { Brand } from './brand'
import { FuelType } from './fuelType'

// Note: Only vin is required, rest are optional.
export interface VehiclePartial {
  id?: number
  vin: string
  regNumber?: string
  regDate?: string
  brand?: Brand
  model?: Model
  fuelType?: FuelType
  modelYear?: number
}
