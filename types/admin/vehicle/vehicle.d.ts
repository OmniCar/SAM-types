import { PriceSpecification } from './../../priceSpecification'
import { ContractState } from './../../index'

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
}

export interface IApiVehicleIncludedContractOption {
  description: string
}
