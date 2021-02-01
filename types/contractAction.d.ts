import { ContractActionType } from './index'
import { IUserResponse } from './user'

export type ActionOrderBy = 'id' | 'created' | 'type' | 'userName' | 'comment'

export interface IContractActionResponse {
  id?: number
  created: Date | string
  type: ContractActionType
  userName: string
  comment: string
}

export interface ISettlementActionResponse {
  id: number
  created: Date | string
  type: ContractActionType
  userName: string
  settlementComment?: string
  shareComment?: boolean
  amount?: number
}
