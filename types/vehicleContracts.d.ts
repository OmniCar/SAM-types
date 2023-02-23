import { IContractTemplateResponse } from './contractTemplate'
import { DurationOptions } from './durationOptions'

// **TODO: Rename to Product Contracts
// export interface VehicleContracts {
//   contracts: IContractTemplateResponse[]
//   durations: DurationOptions[] | null // Structure for ContractFlowDurationMileageVer1 for contracts using old legacy pricing.
//   durationMap: any // Structure for ContractFlowDurationMileageVer2 for V4PricingTool contracts.
// }

export interface VehicleContracts {
  contracts: IContractTemplateResponse[]
  durations: DurationOptions[] | null // Structure for ContractFlowDurationMileageVer1 for contracts using old legacy pricing.
  mileageDurationsMap: TMileageDurations // Structure for ContractFlowDurationMileageVer2 for V4PricingTool contracts.
}

export type TMileageDurations = Map<string, IMileageDurations>

export interface IMileageDurations {
  options: {
    mileage: number // Eg. 60000. In km.
    months: number[] // Eg. [24,36,48,60].
  }[]
}
