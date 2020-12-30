export interface ISettlementInvoicesBalance {
  regularPayments: number
  cashPayments: number
  providerPayments: number
}

export interface IContractBalanceStatistics {
  workshopBalance: number
  paymentBalance: number
  invoicesTotalSum: number
  settlementInvoices: ISettlementInvoicesBalance
  providerTotalCost: number
}
