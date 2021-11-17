import { ProductType } from 'admin/product/product'
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
  created: IContractFilterDate
  expired: IContractFilterDate
}

export interface IContractStatusCount {
  contractState: ContractState
  count: number
}

export interface IContractProductTypeCount {
  type: ProductType
  count: number
}

export type ContractProductType = ProductType

export interface IContractFilterParams {
  contractStates: ContractState[]
  contractProduct: ContractProductType
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
  activeTypes: ContractProductType[]
}

export interface IWarrantyFilterParams {
  contractStates: ContractState[]
  templates: number[]
  options: number[]
  sellers: number[]
  created: IContractFilterDate
  expired: IContractFilterDate
}
