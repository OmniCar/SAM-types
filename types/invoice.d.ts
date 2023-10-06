import { IContractResponse } from './contract/contract'
import { PriceSpecification } from './priceSpecification'

export type InvoiceOrderBy = 'invoiceId' | 'dateIssuedAt' | 'state' | 'amount' | 'url'
export type InvoiceState = 'Pending' | 'Paid' | 'Canceled'

export interface IInvoice {
  invoiceId: number
  dateIssuedAt: Date
  state: InvoiceState
  amount: PriceSpecification
  url: string
}
