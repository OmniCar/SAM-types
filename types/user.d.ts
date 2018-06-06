import { IContactPersonResponse } from './contactPerson'

export interface IUserResponse {
  userId: number
  email: string
  contactPerson: IContactPersonResponse
}

export interface IUserTheme {
  name: string
}

export interface IUserMetadata {
  theme: IUserTheme
}
