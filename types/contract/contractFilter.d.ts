import { TContractObject } from '../admin/product'
import { ContractState, WarrantyState } from '../index'

export interface IContractFilterDate {
  min: string
  max: string
}

export interface IContractFilterOption {
  title: string
  id: ContractState
}

export interface IWarrantyFilterOption {
  title: string
  id: WarrantyState
}

export interface IContractFilterOptions {
  contractStates: IContractFilterOption[]
  templates: IContractFilterOption[]
  options: IContractFilterOption[]
  sellers: IContractFilterOption[]
  subProviders: IContractFilterOption[]
  created: IContractFilterDate
  expired: IContractFilterDate
  activeTypes: TContractObject[]
}

export interface IContractStatusCount {
  contractState: ContractState
  count: number
}

export interface IContractProductTypeCountResponse {
  [contractObjectType: string]: number
}

export interface IContractFilterParams {
  contractStates: ContractState[]
  contractObjectType: TContractObject // Renamed from contractProduct.
  templates: number[]
  options: number[]
  sellers: number[]
  subProviders: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
  activeTypes: TContractObject[]
}

export interface IWarrantyFilterParams {
  contractStates: ContractState[]
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
