export type CustomerListOrderByType = 'name' | 'address' | 'zip' | 'city' | 'phone' | 'email'

export interface ICustomerListRecord {
  name: string
  email: string
  phone: string
  address: string
  city: string
  zip: string | number
}
