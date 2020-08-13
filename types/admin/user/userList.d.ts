import { UserRole } from '../auth'

export type UserListOrderByType = 'name' | 'role' | 'email' | 'phone'

interface INullableRole {
  providerId: number
  role: UserRole | null
}

export interface IUserListRecord {
  userId?: number
  name: string
  email: string
  phone: string
  role?: UserRole
  roles?:  INullableRole[]
  localeCode?: string
}
