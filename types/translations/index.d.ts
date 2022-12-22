import { IsoLocale } from '../locale'

export type TTranslationApplication = 'system' | 'admin' | 'frontend' | 'emailtemplates'

export interface ITranslationValueRequest {
  locale: IsoLocale
  value: string
}

export interface ITranslationValueResponse extends ITranslationValueRequest {
  id: number
}

export interface ITranslationRequest {
  key: string
  app: TTranslationApplication
}

export interface ITranslationResponse extends ITranslationRequest {
  id: number
  userEmail: string
  entityUpdated: string
  published: boolean
  missedValues: boolean
}
