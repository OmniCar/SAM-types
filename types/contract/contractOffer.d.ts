import { ProductAlongItsContracts } from '../product'
import { Customer } from '../customer'
import { VehicleAlongItsContracts } from '../vehicle'
import { IContractOptionResponse } from './../contractOption'
import { IContractTemplateResponse } from './../contractTemplate'
import { PaymentGateway } from './../payment'
import { ContractValueType } from '../admin'

export interface IContractOfferRequest<TProduct = VehicleAlongItsContracts> {
  userId?: number
  customer?: Customer
  product?: TProduct
  duration: number
  mileage: number
  startMileage: number
  value?: number
  startValue?: number
  valueType?: ContractValueType
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

type ProductTypeContract = VehicleAlongItsContracts | ProductAlongItsContracts
