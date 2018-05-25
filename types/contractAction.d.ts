import { ContractActionType } from './index'
import { IUserResponse } from './user'

export type ActionOrderBy = 'id' | 'created' | 'type' | 'userName' | 'comment'

export interface IContractActionResponse {
  id?: number
  created: Date
  type: ContractActionType
  userName: string
  comment: string
}
