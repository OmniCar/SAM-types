import { PriceSource } from '../../contractTemplate'
import { ContractState, ContractType, IIncludedContractOption, PaymentGateway, TV4PTProductType } from '../../index'
import { IContractHealth } from './health'

export interface IBasicContractInfo {
  contractState: ContractState
  contractStateName: string
  contractType: ContractType
  contractProductType: null | TV4PTProductType
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
