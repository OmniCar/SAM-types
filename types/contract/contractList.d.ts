import { ContractState } from './../index';

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

export type ContractListFieldType =
  | 'prettyIdentifier'
  | 'brand'
  | 'contractEndDate'
  | 'contractStartDate'
  | 'contractState'
  | 'contractTemplateName'
  | 'customerName'
  | 'registrationNumber'
  | 'sellerName'

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