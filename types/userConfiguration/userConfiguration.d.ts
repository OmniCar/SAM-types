import { TableConfigurationType, ITableUserConfiguration } from './tableUserConfiguration.d'

export type UserConfigurationType = TableConfigurationType
export type UserConfiguration<OrderBy = string> = ITableUserConfiguration<OrderBy>
export type UserConfigurations<OrderBy = string> = Record<string, ITableUserConfiguration<OrderBy>>
