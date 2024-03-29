// Note: response is handled as 200 OK or 500 Internal Server Error.
export interface IAdminCustomerLoginRequest {
  prettyIdentifier: string
}

export interface IAdminCustomer {
  id?: number
  prettyIdentifier?: string
  name: string
  email: string
  emailBounceType?: string | undefined
  phone: string
  address: string
  city: string
  zip: string | number
  customerType: CustomerType
  cvr?: string
  ean?: string
  companyName?: string
  vatLookup?: VatLookup
}

export interface CustomerUpdateResponse extends IAdminCustomer {
  extSysCustomerUpdateMessage?: string
}

export type CustomerType = 'PRIVATE' | 'BUSINESS'

export type VatLookup = 'INTERNAL' | 'REMOTE'
