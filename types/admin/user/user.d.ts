export interface IAdminUserInfo {
  name: string
  phone: string
  address: string
  zip: string
  city: string
  email: string
}

export interface IUserPasswordChangeRequest {
  password: string
  newPassword: string
}

export interface ICustomerPasswordChangeRequest {
  newPassword: string
}

export interface IUserRoleChangeRequest {
  roleId: number
  contractProviderId: number
  token: string
}
