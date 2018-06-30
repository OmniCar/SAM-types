export interface IContractFilterDate {
  min: string
  max: string
}

export interface IContractFilterOptions {
  contractStates?: IContractFilterOption[]
  templates?: IContractFilterOption[]
  options?: IContractFilterOption[]
  sellers?: IContractFilterOption[]
  creation?: IContractFilterDate
  expiration?: IContractFilterDate
}

export interface IContractFilterOption {
  title: string
  id: number
}
