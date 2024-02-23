import {
  ContractState,
  ContractValueType,
  IEssentialContract,
  IIncludedContractOption,
  TV4PTProductType,
} from './../../index'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'

export interface IEssentialVehicle {
  registrationDate: Date | string
  modelYear: number
  vin: string
  registrationNumber: string
  brandName: string
  modelName: string
  fuelTypeName: string
}

export interface IApiVehicleWithContracts extends IEssentialVehicle {
  vehicleId: number
  contracts: IApiVehicleContract[]
}

export interface IApiVehicleWithEssentialContracts extends IEssentialVehicle {
  contracts: IEssentialContract[]
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
  contractProductType: null | TV4PTProductType
}

export interface IApiVehicleIncludedContractOption {
  description: string
  assoc: 'PROPERTY' | 'ADDITIONAL'
  termsRef: string | null
}
