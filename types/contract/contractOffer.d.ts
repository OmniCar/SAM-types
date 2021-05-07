import { Customer } from '../customer'
import { Vehicle } from '../vehicle'
import { IContractOptionResponse } from './../contractOption'
import { IContractTemplateResponse } from './../contractTemplate'
import { PaymentGateway } from './../payment'

export interface IContractOfferRequest {
  userId?: number
  customer?: Customer
  vehicle?: Vehicle
  duration: number
  mileage: number
  startMileage: number
  template?: IContractTemplateResponse
  options: IContractOptionResponse[]
  paymentGateway: PaymentGateway
}

export interface IContractOfferResponse {
  contractId: number
  token: string
  paymentGateway: PaymentGateway
  prettyIdentifier: string
}
