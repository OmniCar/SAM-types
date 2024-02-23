import { IEssentialContractProviderInfo } from '../admin/contractProvider'
import { IEssentialVehicle } from '../admin/vehicle'
import { IContractOptionResponse } from '../contractOption'
import { IContractProviderResponse } from '../contractProvider'
import { IContractTemplateResponse } from '../contractTemplate'
import { Customer } from '../customer'
import {
  ContractState,
  ContractValueType,
  IIncludedContractOption,
  PaymentGateway,
  PriceSpecification,
  TV4PTProductType,
} from '../index'
import { ICalculationResponse } from '../priceCalculation'
import { Other } from '../product'
import { Vehicle } from '../vehicle'

export interface IEssentialContract {
  prettyIdentifier: string
  contractState: ContractState
  contractStartDate: Date | string
  contractEndDate: Date | string
  contractName: string
  contractProductType: null | TV4PTProductType
}

export interface IContractDetailsForCustomer extends IEssentialContract {
  includedOptions: IIncludedContractOption[]
  amount: PriceSpecification
  tosUrl: string
  totUrl: string
  serviceInfoPDFUrl?: string
  activationUrl?: string
  valueType?: ContractValueType
  value?: number
  duration: number
  vehicle: IEssentialVehicle
  provider: IEssentialContractProviderInfo
}

export interface IContractResponse {
  id: number
  customer: Customer
  product: Vehicle | Other
  duration: string
  mileage: string
  value?: string
  valueType?: ContractValueType
  startMileage: number
  startValue?: number
  startValueType?: ContractValueType
  template: null | IContractTemplateResponse
  calculationMethod: number
  options: IContractOptionResponse[]
  payment: ICalculationResponse
  prettyIdentifier: string
  startDate: string
  endDate: string
  offerExpiresAt?: string
  state: ContractState
  contractProvider: IContractProviderResponse
  templateImage: string
  termsRef: string
  termsOfTradeRef?: string
  paymentGateway: PaymentGateway
}
