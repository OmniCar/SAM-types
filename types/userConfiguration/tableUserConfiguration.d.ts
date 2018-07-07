import { OrderDirection } from './../searchQuery.d'

export interface IColumnUserConfiguration {
  enabled: boolean
  name: string
}

export interface ITableUserConfiguration {
  columns: IColumnUserConfiguration[]
  orderBy: string
  orderDirection: OrderDirection
}

export type TableConfigurationType = 'serviceContract'
