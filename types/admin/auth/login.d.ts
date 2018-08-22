import { UserRole } from './roles'
import { IUserInfo } from '../user/user'
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
  userInfo?: IUserInfo
  providerInfo?: IContractProvider
}
