import { IContractTemplateResponse } from './contractTemplate'
import { DurationOptions } from './durationOptions'

export interface VehicleContracts {
  contracts: IContractTemplateResponse[]
  durations: DurationOptions[]
}
