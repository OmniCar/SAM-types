import { UserRole } from './admin'
import { IContactPersonResponse } from './contactPerson'

export interface IUserResponse {
  userId: number
  email: string
  contactPerson: IContactPersonResponse
  userRole: UserRole
  disabledAt: Date | null
}
