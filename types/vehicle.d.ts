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
  versionModelType?: string
  vehicleType?: TVehicleType // Note: Not same as type (now versionModelType).
  engineMaxPower?: number // Maximum power in kW, integer or decimal number like 115.5 or 132. NOTE: For now, engineMaxPower is the highest power of any of the engines on a multi-engine vehicle.
  cylinderVolume?: number // Engine size in cc or cm3.
  transmissionType?: TVehicleTransmissionType
  driveType?: TVehicleDriveType // Front, rear, or all wheel drive.
  hasFourWheelDrive?: boolean // Aka 4x4 ("four by four" or 4WD).
}

export interface IRegistrationNumberResponse {
  lookup: {
    vehicle: Vehicle
    debug?: {
      lookupCacheStatus?: string // Free text, for debugging purposes - Hint with info if vehicle was fetched from cache or via fresh lookup.
    }
  }
  serviceDataStatus?: {
    hasFoundAnyServiceData: boolean | null
    hasRequiredServiceValues: boolean | null
    hasRequiredSparePartPrices: boolean | null
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
  contracts: VehicleContracts | undefined
  hasActiveWarranty: boolean | undefined
}

export type TVehicleType =
  | '' // Unknown vehicle type.
  | 'Trailer' // sv: Släp.
  | 'Bus'
  | 'Truck' // sv: Lastbil.
  | 'Special Vehicle'
  | 'Van' // sv: Skåpbil/Paketbil/Varubil.
  | 'Car'
  | 'Tractor'
  | 'Mobile Machinery'
  | 'Off-road Vehicle'
  | 'Motorcycle'
  | 'L5' // Motor-vehicle with three wheels, sv: Trehjuligt motorfordon.
  | 'Moped'
  | 'Forklift' // sv: Truck.
  | 'Other'

export type TVehicleTransmissionType =
  | '' // Unknown transmission type.
  | 'Manual'
  | 'Automatic'
  | 'Continuously Variable' // Variomatic transmission type.

export type TVehicleDriveType =
  | '' // Unknown drive type.
  | 'Front Wheel Drive'
  | 'Rear Wheel Drive'
  | 'All Wheel Drive'

export interface VehicleUpdateResponse extends Vehicle {
  extSysRegNumberUpdateMessage?: string
  v4RegNumberUpdated?: boolean
}
