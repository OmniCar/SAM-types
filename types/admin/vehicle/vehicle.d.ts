import { ContractState } from './../../index'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'

export interface IApiVehicleWithContracts {
  vehicleId: number
  registrationDate: Date | string
  vin: string
  registrationNumber: string
  brandName: string
  modelName: string
  fuelTypeName: string
  contracts: IApiVehicleContract[]
}

export interface IApiVehicleContract {
  serviceContractId: number
  amount: PriceSpecification
  contractStartDate: Date | string
  contractEndDate: Date | string
  tosUrl: string
  contractState: ContractState
  prettyIdentifier: string
  pdfUrl: string
  includedOptions: IApiVehicleIncludedContractOption[]
  contractTemplateName: string
  duration: number
  mileage: number
  paymentGateway?: PaymentGateway
  reference?: string
  activationUrl?: string
}

export interface IApiVehicleIncludedContractOption {
  description: string
  assoc: 'PROPERTY' | 'ADDITIONAL'
}
