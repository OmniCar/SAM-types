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
  registrationNumber?: string
  serialNumber?: string
  sellerName: string
  health: IContractHealth[]
}

// **TODO: identifingNumber for reg and item num?
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
  | 'productId'
  | 'registrationNumber'
  | 'serialNumber'
  | 'sellerName'
  | 'createdByProvider'

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
