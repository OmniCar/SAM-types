import { IUserInfo } from 'admin/user/user'
import { IContractTemplateResponse } from '../../contractTemplate'
import { PaymentGateway } from '../../payment'
import { ICarCollection } from './carData'
import { ContractType } from './priceCalculation'

export interface IContractCreationData {
  payment: IContractCreationPayment
  cars: ICarCollection
  templates: IContractTemplateResponse[]
}

export interface IContractCreationPayment {
  stripeToken: string
  paymentGateways: PaymentGateway[]
}

interface ICommonContractCreationRequest {
  type: ContractType
  contractTemplateId: number
  duration: number
  mileage: number
  additionalOptionIds: number[]
  providerPayments: number
  providerShare: number
  customerId?: number
  customer?: IUserInfo
  invoiceCustomerId?: number
  invoiceCustomer?: IUserInfo
}

export interface ICustomContractCreationRequest extends ICommonContractCreationRequest {
  type: 'CUSTOM'
  amountPerPayment: number
  vehicle: {
    dateVehicleFirstRegistered: Date | string
    vin: string
    registrationNumber: string
    brandName: string
    modelName: string
    fuelTypeName: string
  }
}

export interface IStandardContractCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD'
  vehicle: {
    modelId?: number
    dateVehicleFirstRegistered: Date | string
    vin: string
    registrationNumber: string
  }
}

// Note: there is currently no need for a IContractCreationResponse, just a 200 OK is sufficient.
