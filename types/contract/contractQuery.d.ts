import { ISearchQuery, OrderDirection } from '../queryParams'
import { IContractFilterOptions } from './contractFilter'

// @NOTE - Deprecate down to where it says to use the below instead of the above
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

// @NOTE - Use this instead of the above
export type ContractOrderByType =
  | 'prettyIdentifier'
  | 'contractTemplateName'
  | 'registrationNumber'
  | 'customerName'
  | 'contractStartDate'
  | 'contractEndDate'
  | 'sellerName'
  | 'contractState'
  | 'brand'

export type ContractFieldType =
| 'prettyIdentifier'
| 'contractTemplateName'
| 'registrationNumber'
| 'customerName'
| 'contractStartDate'
| 'contractEndDate'
| 'sellerName'
| 'contractState'
| 'brand'