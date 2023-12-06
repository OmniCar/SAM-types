import { IsoLocale } from '../locale'

export type TTranslationApplication = 'API' | 'Admin' | 'WebCalc' | 'EmailTemplates' | 'MyPage'

export interface ITranslationValueRequest {
  locale: IsoLocale
  value: string
}

export interface ITranslationValueResponse extends ITranslationValueRequest {
  id: number
}

export interface ITranslationApplication {
  id: number
  name: TTranslationApplication
}

export interface ITranslationRequest {
  key: string
  applications: ITranslationApplication[]
  comment?: string
}

export interface ITranslationResponse extends ITranslationRequest {
  id: number
  userEmail: string
  entityUpdated: string
  missedValues: boolean
}

export interface ILocaleTranslation {
  [key: string]: ITranslation
}

export interface ITranslation {
  [key: string]: string
}
