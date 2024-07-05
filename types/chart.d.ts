import { IPaymentFailureReason } from './index'

// Generic charting types, ie. they are not specific to one application but generally usable in most types of charts.

export interface IChartValue {
  x: Date | string | number
  y: number
}

export interface IChartDateValue extends IChartValue {
  x: Date | string
}

export interface IChartInvoiceTooltip {
  state: number
  successfulPaymentDate?: Date
  failureReason?: IPaymentFailureReason
}

export interface IChartInvoiceValue extends IChartDateValue {
  tooltipData: IChartInvoiceTooltip
}

export interface IChartStringValue<TooltipData = undefined> extends IChartValue {
  x: string
}

export interface IProviderStats {
  offers: number
  created: number
  expiring: number
  avgDuration: number
  avgMileage: number
}

export interface ITopSellerChart {
  seriesTopSellers: IChartStringValue[]
}
