import { Model } from './model'
import { Brand } from './brand'
import { FuelType } from './fuelType'
import { VehicleContracts } from './vehicleContracts'

/**
 * @note To dev: Are you looking for contracts here? - Please use VehicleAlongItsContracts instead!
 */
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
  // contracts?: VehicleContracts    //tillfälligt aktiverad
  // hasActiveWarranty?: boolean  //tillfälligt aktiverad
}

export interface IRegistrationNumberResponse {
  lookup: {
    vehicle: Vehicle
    debug?: {
      lookupCacheStatus?: string // Free text, for debugging purposes - Hint with info if vehicle was fetched from cache or via fresh lookup.
    }
  }
  contracts?: VehicleContracts
  hasActiveWarranty?: boolean
}

/**
 * Vehicle along with its Contracts.
 * @note Not to be confused with IApiVehicleWithContracts.
 *
 * This interface is same as the Vehicle interface, plus properties contracts
 * and hasActiveWarranty added.
 */
export interface VehicleAlongItsContracts extends Vehicle {
  // contracts?: VehicleContracts
  // hasActiveWarranty?: boolean
  contracts: VehicleContracts | undefined
  hasActiveWarranty: boolean | undefined
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
