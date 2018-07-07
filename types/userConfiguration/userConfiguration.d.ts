import { TableConfigurationType, ITableUserConfiguration } from './tableUserConfiguration.d'

export type UserConfigurationType = TableConfigurationType
export type UserConfiguration<OrderBy> = ITableUserConfiguration<OrderBy>
export type UserConfigurations<OrderBy> = Record<string, ITableUserConfiguration<OrderBy>>
