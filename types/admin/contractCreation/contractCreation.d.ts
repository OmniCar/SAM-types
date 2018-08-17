import { PaymentGateway } from '../../payment'
import { ICarCollection } from './carData'
import { IContractTemplateResponse } from '../../contractTemplate'

export interface IContractCreationData {
  payment: IContractCreationPayment
  cars: ICarCollection
  templates: IContractTemplateResponse[]
}

export interface IContractCreationPayment {
  stripeToken: string
  paymentGateways: PaymentGateway[]
}
