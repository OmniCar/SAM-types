import { IsoLocale } from '../locale'
import { DbType, AggregateType, ProductType, TTranslationApplication } from '../index'

export interface IDbColumn {
  name: string
  description: string
  descriptionMap?: TTranslationMap
  dbType: DbType
  groupOnly?: true
}

export interface IReportDefinition {
  name: string
  defaultDescription: string
  columns: IDbColumn[]
  groupByColumns: string[]
  descriptionMap?: TTranslationMap
  hasProductFields?: boolean
}
export type IReportDefinitionsResponse = { [key in string]?: IReportDefinition[] }

export interface IReportSearchRequest {
  name: string
  search: { col: string; search: string }[]
  groupBy: string[]
  productType?: ProductType
}

export type TTranslationMap = { [key in IsoLocale]?: string }

export interface IColDefResponse {
  header: string
  type: DbType
}

export type ColData = { [colName in string]: IColDefResponse }
export type CellData = string | number | Date | null | RowData[]
export type RowData = { [colName in string]: CellData }
export interface IReportSearchResponse {
  name: string
  cols: ColData
  data: RowData[]
  links?: { [colName in string]: string }[]
}

export interface IReportSearchResponseArrays {
  headers: string[]
  types: DbType[]
  rows: CellData[][]
}

export interface ICheckTranslationsRequest {
  application: TTranslationApplication
  keys: string[]
}

export interface ICheckTranslationsResponse {
  missingTranslations: { [locale in IsoLocale | '']?: string[] }
}
