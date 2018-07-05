export interface Locale {
  localeId: number
  name: string
  isoName: string
  currencySymbol: string
  currencyDefaultFormat: string
  dateDefaultFormat: string
  vatPct: number
}

export type IsoLocale = 'da-DK' | 'sv-SE'
