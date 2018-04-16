import { Customer } from '../customer'
import { Vehicle } from '../vehicle'
import { IContractTemplateResponse } from './../contractTemplate'
import { IContractOptionResponse } from './../contractOption'

export interface IContractOfferRequest {
  userId?: number
  customer?: Customer
  vehicle?: Vehicle
  duration: number
  mileage: number
  startMileage: number
  template?: IContractTemplateResponse
  options: IContractOptionResponse[]
}

export interface IContractOfferResponse {
  contractId: number
  token: string
}
