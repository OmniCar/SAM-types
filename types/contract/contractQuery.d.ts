import { ISearchQuery, OrderDirection } from '../searchQuery'

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
  status?: string
  templateId?: number[]
  sellerId?: number[]
  createdDateStart?: Date
  createdDateEnd?: Date
  expirationDateStart?: Date
  expirationDateEnd?: Date
  createdDate?: Date
  expirationDate?: Date
}

export interface IMappedContractQuery extends IContractQuery {
  limit: number
  offset: number
  orderBy: ContractOrderBy
  orderDirection: OrderDirection
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
