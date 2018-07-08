export interface IContractFilterDate {
  min: string
  max: string
}

export interface IContractFilterOption {
  title: string
  id: number
}

// @NOTE - Deprecate this
export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  options: IContractFilterOption[]
  sellers: IContractFilterOption[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
