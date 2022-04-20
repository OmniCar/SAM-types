import { TCurrency } from '../types/currency'

/**
 * ISO 3166-1 two letter (Alpha-2) codes for all supported countries.
 *
 * @link https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 */
export type IsoCountryCodeSupported = 'DK' | 'SE' | 'FI' // NOTE: Currently 100% supported countries.

export interface ICountryRequest {
  isoName: string
}

export interface ICountryResponse extends ICountry {
  localeName?: string
  locale?: string | undefined
}

export interface ICountry {
  countryId?: number
  isoName: string
  countryName?: string
}
