import { IsoLocale } from '../../locale'

export interface IContractProvider {
  providerId: number
  administrativeName: string
  logo: string
  email: string
  phone: string
  address1: string
  address2?: string
  city: string
  zipcode: string
  locale: IsoLocale
  currency: string
}
