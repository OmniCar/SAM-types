import { OrderDirection } from './../searchQuery.d'

export interface IColumnUserConfiguration {
  enabled: boolean
  name: string
}

export interface ITableUserConfiguration {
  columns: IColumnUserConfiguration[]
  sortBy: string
  sortDirection: OrderDirection
}

export type TableConfigurationType = 'serviceContract'
