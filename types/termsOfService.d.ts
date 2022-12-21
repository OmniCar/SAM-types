export interface ITermsOfServiceRequest {
  name: string
  ref: string
}

export interface ITermsOfServiceResponse {
  name: string
  ref: string
  id?: number
  globalBucket?: boolean
}
