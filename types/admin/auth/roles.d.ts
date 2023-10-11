export type UserRole = 'system' | 'admin' | 'seller' | 'customer' | 'reports' | 'observer'

export interface UserRoleRecord {
  role: UserRole
  contractProvider: {
    id: number
    administrativeName: string
    inactive?: boolean
  }
}
