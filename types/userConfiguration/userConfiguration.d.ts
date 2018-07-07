import { TableConfigurationType, ITableUserConfiguration } from './tableUserConfiguration.d'

export type UserConfigurationType = TableConfigurationType
export type UserConfiguration = ITableUserConfiguration<string>
export type UserConfigurations = Record<string, ITableUserConfiguration<string>>
