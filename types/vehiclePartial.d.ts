import { Brand } from './brand'
import { FuelType } from './fuelType'
import { Model } from './model'
import { TVehicleDriveType, TVehicleTransmissionType, TVehicleType } from './vehicle'

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
  versionModelType?: string
  vehicleType?: TVehicleType // Note: Not same as type (now versionModelType).
  engineMaxPower?: number // Maximum power in kW, integer or decimal number like 115.5 or 132. NOTE: For now, engineMaxPower is the highest power of any of the engines on a multi-engine vehicle.
  cylinderVolume?: number // Engine size in cc or cm3.
  transmissionType?: TVehicleTransmissionType
  driveType?: TVehicleDriveType // Front, rear, or all wheel drive.
  hasFourWheelDrive?: boolean // Aka 4x4 ("four by four" or 4WD).
}
