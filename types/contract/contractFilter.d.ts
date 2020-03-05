// import { ContractState, WarrantyState } from '../index'
import { ContractState } from '../index'

export interface IContractFilterDate {
  min: string
  max: string
}

export interface IContractFilterOption {
  title: string
  id: ContractState
}

// export interface IWarrantyFilterOption {
//   title: string
//   id: WarrantyState
// }

export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  options: IContractFilterOption[]
  sellers: IContractFilterOption[]
  created: IContractFilterDate
  expired: IContractFilterDate
}

export interface IContractFilterParams {
  contractStates: ContractState[]
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
export interface IWarrantyFilterParams {
  contractStates: ContractState[]
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
