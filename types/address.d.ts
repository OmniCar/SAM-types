import { ICountryRequest, ICountryResponse } from './country'

export interface IAddressRequest {
  address1: string
  address2?: string
  city: string
  postalCode: string
  country: ICountryRequest
}

export interface IAddressResponse {
  addressId: number
  address1: string
  address2?: string
  city: string
  postalCode: string
  country: ICountryResponse
}
