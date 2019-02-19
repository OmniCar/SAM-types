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

export interface ICellCut {
  dimension: string
  paths: number[]
}

export interface IContractChartView {
  contractType: number
  chartName: string
  cellCut?: ICellCut[]
  levels: string[]
  cells: ICellDataPoint[]
  totalCellCount: number
}

export interface IDashboardContractChartViews {
  contract: IContractChartView[]
}
