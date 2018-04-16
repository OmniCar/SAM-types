export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  sellers: IContractFilterOption[]
}

export interface IContractFilterOption {
  title: string
  id: number
}
