import { ContractState, ContractType, IIncludedContractOption, PaymentGateway } from '../../index'
import { IContractHealth } from './health'

export interface IBasicContractInfo {
  contractState: ContractState
  contractType: ContractType
  paymentGateway: PaymentGateway
  templateDescription: string
  additionalOptions: IIncludedContractOption[]
  health: IContractHealth[]
  vehicleCanAddWarranty: boolean
  vehicleHasWarranty: boolean
}
