import { ResponseErrors } from './responseErrors'
import { VehiclePartial } from './vehiclePartial'

export interface ApiError {
  message: ResponseErrors
  errorCode?: number
  debug?: object
  params?: INoContractsAvailableErrorParams
  messageReplacements?: { [key in string]: string }
}

export interface INoContractsAvailableErrorParams {
  matchedData: VehiclePartial
  lookupCountry: null | {
    id: number | null
    isoName: string
  }
  debug?: any
}
