export interface ITableUserConfiguration {
  columns: IColumnConfiguration[]
  rowDensity: string
  rowStyle: string
}

export interface IColumnConfiguration {
  enabled: boolean
  name: string
}

export type UserConfigurationType = 'serviceContract'
