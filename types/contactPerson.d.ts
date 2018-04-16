import { IAddressRequest, IAddressResponse } from './address'

export interface IContactPersonRequest {
  name: string
  email: string
  phone: string
  address: IAddressRequest
}

export interface IContactPersonResponse {
  contactPersonId: number
  name: string
  email: string
  phone: string
  address: IAddressResponse
}
