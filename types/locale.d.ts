export interface Locale {
  localeId: number
  name: string
  isoName: string
  currencySymbol: string
  currencyDefaultFormat: string
  dateDefaultFormat: string
  vatPct: number
}

/**
 * "
 * For example, to specify common English, use the 'en' language designator as
 * locale. To specify the English language as it is used in the United
 * Kingdom, use 'en-GB' as the locale.
 * "
 *
 * Reference:
 * https://lingohub.com/developers/supported-locales/language-designators-with-regions
 *
 * @note 'en-GB' is deprecated, please use 'en' for common English instead if possible.
 */
export type IsoLocale = 'da-DK' | 'sv-SE' | 'fi-FI' | 'nb-NO' | 'en' | 'en-GB' // NOTE: 'en-GB' is deprecated.
