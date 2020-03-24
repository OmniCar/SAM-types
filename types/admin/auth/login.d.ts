import { IContractProvider } from '../contractProvider'
import { IAdminCustomer } from '../customer'
import { IAdminUserInfo } from '../user/user'
import { UserRole } from './roles'

export interface ILoginRequest {
  username: string
  password?: string
}

export interface ILoginResponse {
  username: boolean
  password: boolean
  role?: UserRole
  roles?: UserRole[]
  token?: string
  userInfo?: IAdminUserInfo
  customerInfo?: IAdminCustomer
  providerInfo?: IContractProvider
  stripePublicKey?: string
  webCalcEnabled?: boolean
  offerRequestsEnabled?: boolean
}
