export interface ISettlementInvoices {
  regularPayments: number
  cashPayments: number
  providerPayments: number
}

export interface IContractBalanceStatistics {
  workshopBalance: number
  paymentBalance: number
  invoicesTotalSum: number
  settlementInvoices: ISettlementInvoices
  providerTotalCost: number
}
