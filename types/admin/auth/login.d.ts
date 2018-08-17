import { UserRole } from './roles'
import { IUserInfo } from '../user/user'

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
}
