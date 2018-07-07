import { OrderDirection } from './../searchQuery.d'

export interface IColumnUserConfiguration {
  enabled: boolean
  name: string
}

export interface ITableUserConfiguration<OrderBy> {
  columns: IColumnUserConfiguration[]
  orderBy: OrderBy
  orderDirection: OrderDirection
}

export type TableConfigurationType = 'serviceContract'
