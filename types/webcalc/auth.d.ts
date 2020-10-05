import { CustomerType, IsoLocale, PaymentCard, PaymentGateway, UserRole } from '..'

export interface IWebcalcLoginRequest {
  providerId: number
  username: string
  password: string
}

export interface IWebcalcCustomerIdResponse {
  id: number
}

export interface IWebcalcLoginResponse {
  id: number
  username: string
  email: string
  contractProvider: {
    id: number
    name: string
    email: string
    phone: string
    locale: IsoLocale
    showPricesWithVat: boolean
    supportedPaymentMethods: PaymentGateway[]
  }
  role: UserRole
  customer: {
    id: number
    name: string
    phone: string
    address1: string
    address2?: string
    city: string
    zip: string
    type: CustomerType
    email: string
    card?: PaymentCard
    prettyIdentifier: string
    cvr?: string
    ean?: string
    companyName?: string
  }
}
