import { IChartDateValue, ITopSellerChart } from '../../chart'

export interface IChartCollection {
  name: string
  total: number
  months: IChartDateValue[]
}

export interface IBalanceChart {
  seriesInvoiced: IChartCollection
  seriesCosts: IChartCollection
  valuation: { totalContractValue: number; date: Date | string }
}

export interface IDashboardCharts {
  activeContractsChartCollection: IChartCollection[]
  sellerChart: ITopSellerChart
  balanceChart: IBalanceChart
}

export interface IDashboardQueryParams<Filtering = undefined> {
  filtering?: Filtering
}

export interface IDashboardContractChartsResponse<Result, Filtering> {
  result: Result
  filtering?: Filtering
}

export interface ICellDataPoint {
  x: Date
  y: number
}

export interface IContractCharts {
  sellerId?: number
  sellerName?: string | any
  startDate: Date
  endDate: Date
  chartsData: ICellDataPoint[]
}

export interface IDashboardContractCharts {
  chartType: string
  chartName: string
  charts: IContractCharts[]
}

export interface IDashboardContractChartViews {
  contract: IDashboardContractCharts[]
}
