import { IContactPersonResponse } from './contactPerson'

export interface IUserResponse {
  userId: number
  email: string
  contactPerson: IContactPersonResponse
}
