import { PriceSpecification } from './priceSpecification'
import { IContractResponse } from './contract/contract'

export type InvoiceOrderBy = 'invoice_id' | 'dateIssuedAt' | 'state' | 'amount' | 'url'

export type InvoiceState = 'Pending' | 'Paid' | 'Canceled'

export interface IInvoice {
  invoice_id: number
  dateIssuedAt: Date
  state: InvoiceState
  amount: PriceSpecification
  url: string
}
