export type CustomerListOrderByType = 'prettyIdentifier' | 'name' | 'address' | 'zip' | 'city' | 'phone' | 'email'

export interface ICustomerListRecord {
  id?: number
  prettyIdentifier?: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  zip: string | number
}
