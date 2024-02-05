import { ContractActionType } from './index'
import { PriceSpecification } from './priceSpecification'

export type TActionSeverityType = 'Info' | 'Warning' | 'Error'
export type TActionOrderBy = 'id' | 'created' | 'action' | 'userName' | 'comment'

export interface IContractActionRequest {
  severityType?: TActionSeverityType
  action: ContractActionType
  userId: number | undefined
  comment: string | undefined
  details: { [k: string]: any }
  messageId?: string
}

export interface IContractActionResponse {
  id: number
  created: Date | string
  action: ContractActionType
  userName: string
  comment: string
  severityType: TActionSeverityType | null
  details?: string
}

export interface ISettlementActionRequest {
  id: number
  settlementComment: string
  shareComment: boolean
}

export interface ISettlementActionResponse {
  id: number
  created: Date | string
  type: ContractActionType
  userName: string
  settlementComment: string
  shareComment: boolean
  amount: PriceSpecification
}
