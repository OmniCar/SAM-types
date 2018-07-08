import { ContractState } from './../index';
import { IContractFilterOption, IContractFilterDate } from './contractFilter';

export interface IContractListRecord {
  prettyIdentifier: string
  brand: string
  contractEndDate: Date | string
  contractStartDate: Date | string
  contractState: ContractState
  contractTemplateName: string
  customerName: string
  registrationNumber: string
  sellerName: string
}

export type ContractListOrderByType =
  | 'prettyIdentifier'
  | 'brand'
  | 'contractEndDate'
  | 'contractStartDate'
  | 'contractState'
  | 'contractTemplateName'
  | 'customerName'
  | 'registrationNumber'
  | 'sellerName'

  export interface IContractListFiltering {
    contractStates: IContractFilterOption[]
    templates: IContractFilterOption[]
    options: IContractFilterOption[]
    sellers: IContractFilterOption[]
    created: IContractFilterDate
    expired: IContractFilterDate
  }