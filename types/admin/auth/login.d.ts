import { IContractProviderInfo } from '../contractProvider'
import { IAdminCustomer } from '../customer'
import { IAdminUserInfo } from '../user/user'
import { UserRole, UserRoleRecord } from './roles'

export interface ILoginRequest {
  username: string
  password?: string
}

export interface ILoginResponse {
  username: boolean
  password: boolean
  role?: UserRole
  roles?: UserRoleRecord[]
  token?: string
  userInfo?: IAdminUserInfo
  customerInfo?: IAdminCustomer
  providerInfo?: IContractProviderInfo
  stripePublicKey?: string
  webCalcEnabled?: boolean
  offerRequestsEnabled?: boolean
  disableContractTemplates?: boolean
  isSuperAdmin?: boolean
  isDev?: boolean
}
