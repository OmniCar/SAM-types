export interface ILoginRequest {
  username: string
  password?: string
}

export interface ILoginResponse {
  username: boolean
  password: boolean
  token?: string
  metadata?: any
}
