import { IContactPersonResponse } from './contactPerson'

export interface IUserResponse {
  userId: number
  email: string
  contactPerson: IContactPersonResponse
}

export interface IUserTheme {
  palette: {
    primary: string // value is a hexcolor
    secondary: string // value is a hexcolor
  }
}

export interface IUserMetadata {
  theme: IUserTheme
}
