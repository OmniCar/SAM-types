import { PriceSpecification } from './priceSpecification'
import { IContractResponse } from './contract/contract'

export type InvoiceOrderBy = 'invoiceId' | 'dateIssuedAt' | 'state' | 'amount' | 'url'
export type InvoiceState = 'Pending' | 'Paid' | 'Canceled'

export interface IInvoice {
  invoiceId: number
  dateIssuedAt: Date
  state: InvoiceState
  amount: PriceSpecification
  url: string
}
