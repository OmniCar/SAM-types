export type UserRole = 'admin' | 'system' | 'customer' | 'seller' | 'reports'

export interface UserRoleRecord {
  role: UserRole
  contractProvider: {
    id: number
    administrativeName: string
    inactive?: boolean
  }
}
