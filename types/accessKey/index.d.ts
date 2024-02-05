import { AccessKeyPermission, AccessKeyService } from '../index'

export interface IAccessKey {
  accessKeyId: number
  apiKey: string
  keyPermission: AccessKeyPermission
  service: AccessKeyService
  createdByUserEmail?: string
  representativeUserEmail?: string
  contractProviderIds: number[]
  allProvidersAllowed: boolean
}
