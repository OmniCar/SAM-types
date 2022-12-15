import { ContractState, ContractType, IIncludedContractOption, PaymentGateway } from '../../index'
import { IContractHealth } from './health'
import { PriceSource } from '../../contractTemplate'

export interface IBasicContractInfo {
  contractState: ContractState
  contractType: ContractType
  priceSource: PriceSource | null
  extendedFromId: number | null
  extendedToId: number | null
  paymentGateway: PaymentGateway
  contractName: string // Contract (template) name.
  templateDescription: string
  additionalOptions: IIncludedContractOption[]
  health: IContractHealth[]
  productCanAddWarranty: boolean
  productHasWarranty: boolean
  productContract: boolean
  offerExpirationDate?: string
}
