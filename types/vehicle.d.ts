import { Model } from './model'
import { Brand } from './brand'
import { FuelType } from './fuelType'
import { VehicleContracts } from './vehicleContracts'
import { TIsoCountry } from './country'

/**
 * Vehicle object wit properties of strings and types with id keys to database related rows.
 *
 * @note To dev: Are you looking for contracts here? - Please use VehicleAlongItsContracts instead!
 */
// TODO: In future (as of 2022 Nov) when on a stable build on API and Admin, rename this
// Vehicle to IVehicle, to avoid mix-up/confusion with Vehicle (same name!) entity. /marko
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

/**
 * Vehicle object with properties of strings or related types, has no
 * types with id keys to database rows etc.
 */
// TODO: To rename parameters to these below - 20221209
// {
//   // Here we implement based on a lookup on BG64770
//   vehicleRegistryId?: number
//   regNumber: string // 'BG64770',
//   vin: string // vin: 'VF3CCHMZ6GT105374',
//   // type: string // NOTE: Not same as vehicleType, this is vehicle type description like 'GTE Plug-In Hybrid 150 kW (204 hv) DSG-automaatti 4-ovinen'.
//   // @note param "type" renamed to "versionModelType" to avoid confusion with vehicleType
//   versionModelType: string // NOTE: Not same as vehicleType, this is vehicle type description like 'GTE Plug-In Hybrid 150 kW (204 hv) DSG-automaatti 4-ovinen'.
//   brandName: string // brand: 'Peugeot',
//   modelName: string // model: '208',
//   fuelTypeName: string // fuel_type: 'Benzin',
//   firstRegistrationDate: string | Date // first_registration_date: '2016-10-31',
//   expirationDate: string | null // null,
//   modelYear: number
//   engineMaxPower: number | null // Maximum power in kW, integer or decimal number like 115.5 or 132. NOTE: For now, engineMaxPower is the highest power of any of the engines on a multi-engine vehicle.
//   vehicleType: TVehicleType // Note: Not same as type (now versionModelType).
//   cylinderVolume?: number // Engine size in cc or cm3.
//   transmissionType?: TVehicleTransmissionType
//   driveType?: TVehicleDriveType // Front, rear, or all wheel drive.
//   hasFourWheelDrive?: boolean
//   lookupCacheStatus?: 'vehicleInfo fetched from cache' | 'vehicleInfo fetched via fresh lookup' // @note For debugging purposes. Hint with info if vehicle was fetched from cache or via fresh lookup.
// }
export interface IVehicleInfo {
  // Here we implement based on a lookup on BG64770
  vehicleRegistryId?: number
  registration: string // registration: 'BG64770',
  vin: string // vin: 'VF3CCHMZ6GT105374',
  // type: string // NOTE: Not same as vehicleType, this is vehicle type description like 'GTE Plug-In Hybrid 150 kW (204 hv) DSG-automaatti 4-ovinen'.
  // @note param "type" renamed to "versionModelType" to avoid confusion with vehicleType
  versionModelType: string // NOTE: Not same as vehicleType, this is vehicle type description like 'GTE Plug-In Hybrid 150 kW (204 hv) DSG-automaatti 4-ovinen'.
  brand: string // brand: 'Peugeot',
  model: string // model: '208',
  fuel_type: string // fuel_type: 'Benzin',
  first_registration_date: string | Date // first_registration_date: '2016-10-31',
  expire_date: string | null // null,
  model_year: number
  engineMaxPower: number | null // Maximum power in kW, integer or decimal number like 115.5 or 132. NOTE: For now, engineMaxPower is the highest power of any of the engines on a multi-engine vehicle.
  vehicleType: TVehicleType // Note: Not same as type (now versionModelType).
  cylinderVolume?: number // Engine size in cc or cm3.
  transmissionType?: TVehicleTransmissionType
  driveType?: TVehicleDriveType // Front, rear, or all wheel drive.
  hasFourWheelDrive?: boolean

  // lookupCacheStatus?: string | 'vehicleInfo fetched from cache' | 'vehicleInfo fetched via fresh lookup' // @note For debugging purposes. Hint with info if vehicle was fetched from cache or via fresh lookup.
  lookupCacheStatus?: 'vehicleInfo fetched from cache' | 'vehicleInfo fetched via fresh lookup' // @note For debugging purposes. Hint with info if vehicle was fetched from cache or via fresh lookup.
}

export interface IRegistrationNumberResponse {
  lookup: {
    vehicle: Vehicle
    lookupCountry: TIsoCountry
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
