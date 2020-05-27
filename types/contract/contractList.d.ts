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
  contractTemplateDescription: string
  customerName: string
  customerCompanyName: string
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
  | 'customerCompanyName'
  | 'contractTemplateDescription'
  | 'contractTemplateName'
  | 'customerName'
  | 'registrationNumber'
  | 'sellerName'

export interface IWarrantyListRecord {
  prettyIdentifier: string
  brand: string
  warrantyEndDate: Date | string
  warrantyCreationDate: Date | string
  warrantyState: ContractState
  warrantyeName: string
  customerName: string
  customerCompanyName: string
  registrationNumber: string
  sellerName: string
}
