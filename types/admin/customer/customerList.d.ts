export type CustomerListOrderByType = 'name' | 'address' | 'zip' | 'city' | 'phone' | 'email'

export interface ICustomerListRecord {
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  customerCity: string
  customerZip: string | number
}
