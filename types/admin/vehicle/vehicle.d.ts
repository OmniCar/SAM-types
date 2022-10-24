import { ContractState, ContractValueType, IIncludedContractOption } from './../../index'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'

export interface IApiVehicleWithContracts {
  vehicleId: number
  registrationDate: Date | string
  modelYear: number
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
  totUrl: string
  contractState: ContractState
  prettyIdentifier: string
  pdfUrl: string
  serviceInfoPDFUrl?: string
  includedOptions: IIncludedContractOption[]
  contractTemplateInternalName: string // Name used internally (in pricefile etc.)
  contractTemplateExternalName: string // The name shown to end-users.
  duration: number
  mileage: number
  paymentGateway?: PaymentGateway
  reference?: string
  activationUrl?: string
  extendedFrom?: number
  value?: number
  valueType?: ContractValueType
}

export interface IApiVehicleIncludedContractOption {
  description: string
  assoc: 'PROPERTY' | 'ADDITIONAL'
  termsRef: string | null
}
