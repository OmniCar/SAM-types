import { PriceSpecification } from '../../index'

export interface ISettlementInvoicesBalance {
  stripePayment: PriceSpecification
  cashPayment: PriceSpecification
  providerPayment: PriceSpecification
}

export interface IContractBalanceStatistics {
  calculatedUnits: number
  calculationMethod: number
  closingDate: string
  monthsAtClosing: number
  remainingMonths: number
  remainingCharge: PriceSpecification
  customerCredit: number
  workshopCosts: PriceSpecification
  paidInvoicesTotalSum: PriceSpecification
  contractBalance: PriceSpecification
  settlementInvoices: ISettlementInvoicesBalance
  settlementInvoicesTotalSum: PriceSpecification
  settlementInfo?: ISettlementInfo
  underOverUnitsBalance?: IUnderOverUnitsInfo
  pendingInvoicesTotalSum?: PriceSpecification
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
