// @NOTE - Deprecate this file
import { ISearchQuery, OrderDirection } from '../queryParams'
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
  filtering?: IContractFilterOptions
}
