import { ContractState, IIncludedContractOption } from './../../index'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'

export type TContractObject = 'Product' | 'Vehicle' // Renamed from: export type ProductType = 'Product' | 'Vehicle'

export interface IApiOtherWithContracts {
  otherId: number
  registrationDate: Date | string
  modelYear: number
  serialNumber: string
  serialNumber2: string
  itemNumber: string
  itemNumber2: string
  brandName: string
  modelName: string
  fuelTypeName: string
  contracts: IApiOtherContract[]
}

export interface IApiOtherContract {
  serviceContractId: number
  amount: PriceSpecification
  contractStartDate: Date | string
  contractEndDate: Date | string
  tosUrl: string
  totUrl: string
  contractState: ContractState
  prettyIdentifier: string
  pdfUrl: string
  includedOptions: IIncludedContractOption[]
  contractTemplateInternalName: string // Name used internally (in pricefile etc.)
  contractTemplateExternalName: string // The name shown to end-users.
  duration: number
  mileage: number
  paymentGateway?: PaymentGateway
  reference?: string
  activationUrl?: string
  extendedFrom?: number
}
