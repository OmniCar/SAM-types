import { PriceSpecification } from '../..'
import { IChartDateValue } from '../../chart'

export interface IPaymentChart {
  seriesExpectedEarnings: IChartDateValue[] // chart series.
  seriesEarnings: IChartDateValue[] // chart series.
  seriesCosts: IChartDateValue[] // chart series.
  totalExpectedEarnings: PriceSpecification // summary.
  totalEarnings: PriceSpecification // summary.
  totalCosts: PriceSpecification // summary.
  totalBalance: PriceSpecification // summary.
  contractStartDate: Date | string // chart legend.
  contractEndDate: Date | string // chart legend.
  duration: {
    // chart legend.
    total: number
    current: number
  }
}

export interface IMileageChart {
  seriesExpectedMileage: IChartDateValue[] // chart series.
  seriesMileage: IChartDateValue[] // chart series.
  totalExpectedMileage: number // summary.
  totalMileage: number // summary.
  totalBalance: number // summary.
  contractStartDate: Date | string // chart legend.
  contractEndDate: Date | string // chart legend.
  duration: {
    // chart legend.
    total: number
    current: number
  }
}

export interface IPaymentMileageCharts {
  paymentChart: IPaymentChart
  mileageChart: IMileageChart
}
