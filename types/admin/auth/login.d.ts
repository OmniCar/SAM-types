import { UserRole } from './roles'
import { IAdminUserInfo } from '../user/user'
import { IContractProviderResponse } from '../../contractProvider'
import { IContractProvider } from '../contractProvider'
import { IAdminCustomer } from '../customer';

export interface ILoginRequest {
  username: string
  password?: string
}

export interface ILoginResponse {
  username: boolean
  password: boolean
  role?: UserRole
  token?: string
  userInfo?: IAdminUserInfo
  customerInfo?: IAdminCustomer
  providerInfo?: IContractProvider
  stripePublicKey?: string
}
