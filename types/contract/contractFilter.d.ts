export interface IContractFilterDate {
  start: string
  end: string
}

export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  sellers: IContractFilterOption[]
  created: IContractFilterDate
  expired: IContractFilterDate
}

export interface IContractFilterOption {
  title: string
  id: number
}
