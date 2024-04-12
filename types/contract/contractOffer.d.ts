import { ContractValueType } from '../admin'
import { Customer } from '../customer'
import { ProductAlongItsContracts } from '../product'
import { VehicleAlongItsContracts } from '../vehicle'
import { IContractOptionResponse } from './../contractOption'
import { IContractTemplateResponse } from './../contractTemplate'
import { PaymentGateway } from './../payment'

export interface IContractOfferRequest<TProduct = VehicleAlongItsContracts> {
  contractProviderId: number
  userId?: number
  customer?: Customer
  product?: TProduct
  duration: number
  mileage: number
  startDateISOString: string
  startMileage: number
  value?: number
  valueType?: ContractValueType
  startValue?: number
  startValueType?: ContractValueType
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
