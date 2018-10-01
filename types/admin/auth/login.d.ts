import { UserRole } from './roles'
import { IAdminUserInfo } from '../user/user'
import { IContractProviderResponse } from '../../contractProvider'
import { IContractProvider } from '../contractProvider'

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
  providerInfo?: IContractProvider
  stripePublicKey?: string
}
