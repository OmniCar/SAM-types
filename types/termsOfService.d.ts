export interface ITermsOfServiceRequest {
  name: string
  ref: string
}

export interface ITermsOfServiceResponse {
  id: number
  name: string
  globalBucket: boolean
  ref: string
}
