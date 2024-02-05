import { ICountry, ICountryRequest } from './country'

export interface IAddressRequest {
  address1: string
  address2?: string
  city: string
  postalCode: string
  country: ICountry
}

export interface IAddressResponse {
  addressId: number
  address1: string
  address2?: string
  city: string
  postalCode: string
  country: ICountry
}
