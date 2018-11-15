import { OrderDirection } from '../queryParams'

export interface IColumnUserConfiguration {
  enabled: boolean
  name: string
}

export interface ITableUserConfiguration<OrderBy> {
  columns: IColumnUserConfiguration[]
  orderBy: OrderBy
  orderDirection: OrderDirection
  rows: number
}

export type TableConfigurationType = 'serviceContract'
