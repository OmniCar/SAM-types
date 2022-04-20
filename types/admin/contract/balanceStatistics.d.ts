import { PriceSpecification } from '../../index'

export interface ISettlementInvoicesBalance {
  stripePayment: PriceSpecification
  stripeRefund: PriceSpecification
  cashPayment: PriceSpecification
  cashPayout: PriceSpecification
  providerPayment: PriceSpecification
}

export interface IContractBalanceStatistics {
  calculatedUnits: number
  calculationMethod: number
  closingDate: string
  monthsAtClosing: number
  remainingMonths: number
  remainingCharge: PriceSpecification
  workshopCosts: PriceSpecification
  paidInvoicesTotalSum: PriceSpecification
  contractBalance: PriceSpecification
  settlementInvoices: ISettlementInvoicesBalance
  settlementInvoicesTotalSum: PriceSpecification
  settlementInfo?: ISettlementInfo
  underOverUnitsBalance?: IUnderOverUnitsInfo
  pendingInvoicesTotalSum?: PriceSpecification
  subscriptionPaidTotalSum: PriceSpecification
  shouldPaid: PriceSpecification
  underOverUnits?: IUnderOverUnitsInfo
  shouldPaidByEnd?: PriceSpecification
}

export interface IUnderOverUnitsInfo {
  units: number
  cost: PriceSpecification
  underUnitsLimit: number
}

export interface ISettlementInfo {
  settlementDate: Date
  userName: string
  autoSettlement: boolean
}
