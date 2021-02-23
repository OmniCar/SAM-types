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
  settlementInvoicesTotalSum: PriceSpecification
  settlementInfo?: ISettlementInfo
  subscriptionPaidTotalSum: PriceSpecification
  underOverMileage?: IUnderOverMileageInfo
}

export interface IUnderOverMileageInfo {
  mileage: number
  cost: PriceSpecification
}

export interface ISettlementInfo {
  settlementDate: Date
  userName: string
  autoSettlement: boolean
}
