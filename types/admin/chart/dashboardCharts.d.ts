import { IChartDateValue, ITopSellerChart } from '../../chart'

export interface IChartCollection {
  name: string
  total: number
  months: IChartDateValue[]
}

export interface IBalanceChart {
  seriesInvoiced: IChartCollection
  seriesCosts: IChartCollection
  seriesInvoicedExpected: IChartCollection
}

export interface IDashboardCharts {
  activeContractsChartCollection: IChartCollection[]
  sellerChart: ITopSellerChart
  balanceChart: IBalanceChart
}
