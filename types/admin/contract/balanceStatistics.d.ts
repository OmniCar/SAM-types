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
  paidInvoicesTotalSum: PriceSpecification
  settlementInvoices: ISettlementInvoicesBalance
  providerTotalCost: PriceSpecification
  settlementInvoicesTotalSum: PriceSpecification
  settlementInfo?: ISettlementInfo
  subscriptionPaidTotalSum: PriceSpecification
  shouldPaid: PriceSpecification
  underOverUnits?: IUnderOverUnitsInfo
  shouldPaidByEnd?: PriceSpecification
}

export interface IUnderOverUnitsInfo {
  units: number
  cost: PriceSpecification
}

export interface ISettlementInfo {
  settlementDate: Date
  userName: string
  autoSettlement: boolean
}
