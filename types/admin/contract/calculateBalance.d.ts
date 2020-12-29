export interface ISettlementInvoices {
  regularPayments: number
  cashPayments: number
  providerPayments: number
}

export interface ICalculateBalanceResponse {
  workshopBalance: number
  paymentBalance: number
  invoicesTotalSum: number
  settlementInvoices: ISettlementInvoices
  providerTotalCost: number
}
