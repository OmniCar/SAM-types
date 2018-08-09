export type UserListOrderByType = 'name' | 'role' | 'email' | 'phone'

export interface IUserListRecord {
  user_id: number
  name: string
  email: string
  phone: string
  role: string
}
