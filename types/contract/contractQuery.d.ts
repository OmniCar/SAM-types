import { ISearchQuery, OrderDirection } from '../searchQuery'
import {IContractFilterOptions} from "./contractFilter";

export type ContractOrderBy =
  | 'prettyIdentifier'
  | 'contractTemplateName'
  | 'registrationNumber'
  | 'customerName'
  | 'contractStartDate'
  | 'contractEndDate'
  | 'sellerName'
  | 'contractState'

export interface IContractQuery extends ISearchQuery {
  orderBy?: ContractOrderBy
  createdDateStart?: Date | string
  createdDateEnd?: Date | string
  expirationDateStart?: Date | string
  expirationDateEnd?: Date | string
  createdDate?: Date | string
  expirationDate?: Date | string
  roles?: string
  filtering?: IContractFilterOptions
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

export interface IContractSearchResultInfo {
  totalCount: number
  resultCount: number
  results: IContractSearchResult[]
}
