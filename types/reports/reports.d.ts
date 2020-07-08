import { DbType, AggregateType } from '../index'

export interface IDbColumn {
  name: string
  dbName?: string
  description: string
  dbType: DbType
  isCalculatedColumn?: boolean
  isGroupBy?: boolean
  aggregate?: AggregateType
  resultingDbType?: DbType
}

export interface IReportDefinition {
  name: string
  columns: IDbColumn[]
  groupByColumns: string[]
}

export interface IReportSearchRequest {
  name: string
  search: { col: string; search: string }[]
  groupBy: string[]
}

export interface IColDefResponse {
  header: string
  type: DbType
}

export type ColData = { [colName in string]: IColDefResponse }
export type CellData = string | number | Date | null
export type RowData = { [colName in string]: CellData }
export interface IReportSearchResponse3 {
  name: string
  cols: ColData
  data: RowData[]
}

export interface IReportSearchResponseArrays {
  headers: string[]
  types: DbType[]
  rows: CellData[][]
}
