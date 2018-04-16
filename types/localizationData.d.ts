import { Locale } from './locale'
import { Translation } from './translation'

export interface LocalizationData {
  locale: Locale | undefined
  translations: Translation[] | undefined
}
