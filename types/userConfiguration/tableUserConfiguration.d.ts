import { OrderDirection } from '../queryParams'

export interface IColumnUserConfiguration {
  enabled: boolean
  name: string
}

export interface ITableUserConfiguration<OrderBy> {
  columns: IColumnUserConfiguration[]
  orderBy: OrderBy
  orderDirection: OrderDirection
  rowCount: number
}

export type TableConfigurationType = 'serviceContract' | 'warranty'
