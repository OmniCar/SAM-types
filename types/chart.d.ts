// Generic charting types, ie. they are not specific to one application but generally usable in most types of charts.

export interface IChartDateValue {
  x: Date | string
  y: number
}

export interface IChartStringValue {
  x: string
  y: number
}

export interface IProviderStats {
  offers: number
  created: number
  expiring: number
  duration: number
  mileage: number
}

export interface ITopSellerChart {
  seriesTopSellers: IChartStringValue[]
}
