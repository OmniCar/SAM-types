import { IVehicleInfo } from './vehicleLookup'
import { Model } from './../../model'

export interface ICalcResponse {
  registrationNumber: string
  vehicleInfo: IVehicleInfo
  registrationDate: string | Date
  validatedModel: Model
}
