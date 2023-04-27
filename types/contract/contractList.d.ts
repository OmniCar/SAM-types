import { ContractState } from './../index'
import { IContractFilterOption, IContractFilterDate } from './contractFilter'
import { IContractHealth } from './../admin/contract/health'

export interface IContractListRecord {
  prettyIdentifier: string
  brand: string
  contractEndDate: Date | string
  contractCreationDate: Date | string
  contractState: ContractState
  contractName: string
  contractTemplateDescription: string
  customerName: string
  customerCompanyName: string
  registrationNumber?: string
  serialNumber?: string
  itemNumber?: string
  itemNumber2?: string
  sellerName: string
  health: IContractHealth[]
}

export type ContractListOrderByType =
  | 'prettyIdentifier'
  | 'brand'
  | 'productBrand'
  | 'contractEndDate'
  | 'contractCreationDate'
  | 'contractState'
  | 'customerCompanyName'
  | 'contractTemplateDescription'
  | 'contractName'
  | 'customerName'
  | 'registrationNumber'
  | 'sellerName'
  | 'serialNumber'
  | 'serialNumber2'
  | 'itemNumber'
  | 'itemNumber2'
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
