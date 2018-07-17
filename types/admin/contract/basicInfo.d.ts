import { ContractState, IIncludedContractOption } from '../../index'
import { IContractHealth } from './health'

export interface IBasicContractInfo {
  contractState: ContractState
  templateDescription: string
  additionalOptions: IIncludedContractOption[]
  health: IContractHealth[]
}
