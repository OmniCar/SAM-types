import { TCurrency } from '../types/currency'

/**
 * @deprecated (Since 20222-08-31) Please use the own local config (cfgCountries or supportedCountries (in src/config)) file instead. (This is set individually on each repo: API, Admin and SuperAdmin for finer control.)
 */
export type IsoCountryCodeSupported = 'DK' | 'SE' | 'FI'

/**
 * ISO 3166-1 two letter (Alpha-2) codes for countries.
 *
 * @link https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 */
export type TIsoCountry = 'DK' | 'SE' | 'FI' | 'NO' | 'EE' | 'LV' | 'LT' | 'DE' | 'UA' | 'GB' | 'US'

export interface ICountryRequest {
  isoName: string
}

export interface ICountryResponse extends ICountry {
  currency: TCurrency
  vatPct: number
  locale?: string | undefined
  languageName?: string // Eg. 'Swedish'.
  languageNameLocal?: string // Eg. 'Svenska'.
}

export interface ICountry {
  countryId?: number
  isoName: string
  countryName?: string // Country name in English, eg. 'Finland'.
  countryNameLocal?: string // Country name in local language, eg. 'Suomi'.
}
