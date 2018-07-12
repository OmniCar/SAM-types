export interface IContractFilterDate {
  min: string
  max: string
}

export interface IContractFilterOption {
  title: string
  id: number
}

export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  options: IContractFilterOption[]
  sellers: IContractFilterOption[]
  created: IContractFilterDate
  expired: IContractFilterDate
}

export interface IContractFilterParams {
  contractStates: number[]
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
