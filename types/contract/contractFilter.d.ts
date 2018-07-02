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
  createds: IContractFilterDate
  expireds: IContractFilterDate
}
