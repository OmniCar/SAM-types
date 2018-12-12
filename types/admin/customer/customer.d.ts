export interface IAdminCustomer {
  id?: number
  prettyIdentifier?: string
  name: string
  email: string
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

export type CustomerType = 'PRIVATE' | 'BUSINESS'

export type VatLookup = 'INTERNAL' | 'REMOTE'
