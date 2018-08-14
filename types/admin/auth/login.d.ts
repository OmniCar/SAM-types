import { UserRole } from './roles'

export interface ILoginRequest {
  username: string
  password?: string
}

export interface ILoginResponse {
  username: boolean
  password: boolean
  role?: UserRole
  token?: string
  metadata?: any
}
