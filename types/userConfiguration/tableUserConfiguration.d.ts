import { OrderDirection } from '../queryParams'
import { ProductType } from '../admin/product'

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

export type TableConfigurationType = 'serviceContract' | 'productServiceContract' | 'warranty'
