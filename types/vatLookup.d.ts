export interface IVatLookupRequest {
  vatId: string
  country: string
}

export interface IVatLookupResponse {
  vatId: string
  country: string
  administrativeName: string
  address1: string
  postal_code: string
  city: string
  address2: string | null
}
