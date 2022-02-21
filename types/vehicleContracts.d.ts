import { IContractTemplateResponse } from './contractTemplate'
import { DurationOptions } from './durationOptions'

// **TODO: Rename to Product Contracts
export interface VehicleContracts {
  contracts: IContractTemplateResponse[]
  durations: DurationOptions[]
}
