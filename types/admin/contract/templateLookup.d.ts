import { ContractType, TVehicleType, TVehicleTransmissionType, TVehicleDriveType } from '../../../types'

// TODO: To be switched over to the line below (extending IVehicleInfo)
// export interface ITemplateLookupRequest extends IVehicleInfo{
export interface ITemplateLookupRequest {
  contractType: ContractType
  regNo?: string
  vin?: string
  brand: string
  model: string
  fuelType: string
  regDate: string
  modelYear?: number
  engineMaxPower: number | null
  vehicleType: TVehicleType
  cylinderVolume: number
  transmissionType: TVehicleTransmissionType
  driveType: TVehicleDriveType
  hasFourWheelDrive?: boolean
}
