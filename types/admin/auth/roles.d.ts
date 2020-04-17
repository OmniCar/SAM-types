export type UserRole = 'admin' | 'system' | 'customer' | 'seller'

export interface UserRoleRecord {
  role: UserRole
  contractProvider: {
    id: number
    administrativeName: string
  }
}
