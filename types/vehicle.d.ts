import { Model } from './model'
import { Brand } from './brand'
import { FuelType } from './fuelType'
import { VehicleContracts } from './vehicleContracts'

export interface Vehicle {
  id?: number
  vin?: string
  regNumber?: string
  regDate?: string
  brand: Brand
  model: Model
  fuelType: FuelType
  modelYear: number
  engineMaxPower?: number // Maximum power in kW, integer or decimal number like 132 or 115.5.
  vehicleType?: TVehicleType
  contracts?: VehicleContracts
  hasActiveWarranty?: boolean
}

export type TVehicleType =
  | '' // Unknown vehicle type.
  | 'Trailer' // sv: Släp.
  | 'Bus'
  | 'Truck' // sv: Lastbil.
  | 'Special vehicle'
  | 'Van' // sv: Skåpbil/Paketbil/Varubil.
  | 'Car'
  | 'Tractor'
  | 'Mobile machinery'
  | 'Off-road vehicle'
  | 'Motorcycle'
  | 'L5' // Motor-vehicle with three wheels, sv: Trehjuligt motorfordon.
  | 'Moped'
  | 'Forklift' // sv: Truck.
  | 'Other'
