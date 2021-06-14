import { Model } from './model'
import { Brand } from './brand'
import { FuelType } from './fuelType'
import { TVehicleType } from './vehicle'

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
  engineMaxPower?: number // Maximum power in kW, integer or decimal number like 132 or 115.5.
  vehicleType?: TVehicleType
}
