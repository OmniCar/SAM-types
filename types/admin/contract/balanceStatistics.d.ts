import { PriceSpecification } from '../../index'

export interface ISettlementInvoicesBalance {
  stripePayment: PriceSpecification
  stripeRefund: PriceSpecification
  cashPayment: PriceSpecification
  cashPayout: PriceSpecification
  providerPayment: PriceSpecification
}

export interface IContractBalanceStatistics {
  workshopBalance: PriceSpecification
  workshopCosts: PriceSpecification
  paymentBalance: PriceSpecification
  invoicesTotalSum: PriceSpecification
  settlementInvoices: ISettlementInvoicesBalance
  providerTotalCost: PriceSpecification
  settlementInfo: ISettlementInfo
}
export interface ISettlementInfo {
  settlementDate?: Date
  userName?: string
  autoSettlement?: boolean
}
