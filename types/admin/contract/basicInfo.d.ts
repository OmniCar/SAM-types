import { ContractState, ContractType, IIncludedContractOption, PaymentGateway } from '../../index'
import { IContractHealth } from './health'

export interface IBasicContractInfo {
  contractState: ContractState
  contractType: ContractType
  extendedFromId: number | null
  extendedToId: number | null
  paymentGateway: PaymentGateway
  templateDescription: string
  additionalOptions: IIncludedContractOption[]
  health: IContractHealth[]
  productCanAddWarranty: boolean
  productHasWarranty: boolean
  productContract: boolean
<<<<<<< HEAD
  offerExpirationDate?: string
=======
  offerExpirationDate?: Date
>>>>>>> 062f96d3d9a60abb6f53b8b9723cd3e7e8ff2414
}
