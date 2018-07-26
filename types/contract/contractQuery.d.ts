// @NOTE - Deprecate this file
import { ISearchQuery, OrderDirection } from '../queryParams'
import { IContractFilterOptions } from './contractFilter'
import { PaymentGateway } from './../payment'

export type ContractOrderBy =
  | 'prettyIdentifier'
  | 'contractTemplateName'
  | 'registrationNumber'
  | 'customerName'
  | 'contractStartDate'
  | 'contractEndDate'
  | 'sellerName'
  | 'contractState'
  | 'brand'

export interface IContractQuery extends ISearchQuery<ContractOrderBy> {
  createdDateStart?: Date | string
  createdDateEnd?: Date | string
  expirationDateStart?: Date | string
  expirationDateEnd?: Date | string
  createdDate?: Date | string
  expirationDate?: Date | string
  filtering?: IContractFilterOptions
}

export interface IContractSearchResult {
  prettyIdentifier: string
  contractStartDate: Date
  contractEndDate: Date
  sellerName: string
  registrationNumber: string
  brand: string
  customerName: string
  paymentMethod: PaymentGateway
}

export interface IMappedContractQuery extends IContractQuery {
  limit: number
  offset: number
  orderBy: ContractOrderBy
  orderDirection: OrderDirection
  createdDateStart?: Date
  createdDateEnd?: Date
  expirationDateStart?: Date
  expirationDateEnd?: Date
  createdDate?: Date
  expirationDate?: Date
}
