export type UserListOrderByType = 'name' | 'role' | 'email' | 'phone'

export interface IUserListRecord {
  name: string
  email: string
  phone: string
  role: string
}
