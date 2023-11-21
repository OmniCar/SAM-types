import { IContractTemplateResponse } from './contractTemplate'
import { DurationOptions, TMileageDurationsMap } from './durationOptions'

// **TODO: Rename to Product Contracts
// export interface VehicleContracts {
//   contracts: IContractTemplateResponse[]
//   durations: DurationOptions[] | null // Structure for ContractFlowDurationMileageVer1 for contracts using old legacy pricing.
//   durationMap: any // Structure for ContractFlowDurationMileageVer2 for V4PricingTool contracts.
// }

export interface VehicleContracts {
  contracts: IContractTemplateResponse[]
  durations: DurationOptions[] | null // Structure for ContractFlowDurationMileageVer1 for contracts using old legacy pricing.
  mileageDurationsMap: TMileageDurationsMap | null // Structure for ContractFlowDurationMileageVer2 for V4PricingTool contracts.
}
