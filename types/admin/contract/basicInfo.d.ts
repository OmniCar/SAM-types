import { ContractState, IIncludedContractOption, ContractType } from '../../index'
import { IContractHealth } from './health'

export interface IBasicContractInfo {
  contractState: ContractState
  contractType: ContractType
  templateDescription: string
  additionalOptions: IIncludedContractOption[]
  health: IContractHealth[]
}
