import { ISearchQuery, OrderDirection } from '../searchQuery'
import { IContractFilterOptions } from './contractFilter'

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
  filtering?: Partial<IContractFilterOptions>
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

export interface IContractSearchResult {
  prettyIdentifier: string
  contractStartDate: Date
  contractEndDate: Date
  sellerName: string
  registrationNumber: string
  brand: string
  customerName: string
}
