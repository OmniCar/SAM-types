export interface IContractFilterDate {
  start: Date
  end: Date
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
