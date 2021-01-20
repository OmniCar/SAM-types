import { PriceSpecification } from '../../index'

export interface ISettlementInvoicesBalance {
  regularPayments: PriceSpecification
  cashPayments: PriceSpecification
  providerPayments: PriceSpecification
}

export interface IContractBalanceStatistics {
  workshopBalance: PriceSpecification
  paymentBalance: PriceSpecification
  invoicesTotalSum: PriceSpecification
  settlementInvoices: ISettlementInvoicesBalance
  providerTotalCost: PriceSpecification
}
