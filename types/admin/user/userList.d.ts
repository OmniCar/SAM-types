import { UserRole } from '../auth'

export type UserListOrderByType = 'name' | 'role' | 'email' | 'phone'

export interface IUserListRecord {
  userId?: number
  name: string
  email: string
  phone: string
  role: UserRole
}
