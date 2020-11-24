export interface ICountryRequest {
  isoName: string
}

export interface ICountryResponse {
  countryId: number
  isoName: string
  countryName?: string
  localeName?: string
}
