import { ContractState } from './../index'
import { IContractFilterOption, IContractFilterDate } from './contractFilter'
import { IContractHealth } from './../admin/contract/health'

export interface IContractListRecord {
  prettyIdentifier: string
  brand: string
  contractEndDate: Date | string
  contractCreationDate: Date | string
  contractState: ContractState
  contractTemplateName: string
  customerName: string
  registrationNumber: string
  sellerName: string
  health: IContractHealth[]
}

export type ContractListOrderByType =
  | 'prettyIdentifier'
  | 'brand'
  | 'contractEndDate'
  | 'contractCreationDate'
  | 'contractState'
  | 'contractTemplateName'
  | 'customerName'
  | 'registrationNumber'
  | 'sellerName'
