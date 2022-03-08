import { ICountryResponse } from "./country";
import { ITermsOfServiceRequest, ITermsOfServiceResponse } from "./termsOfService";

export interface IWarrantyRequest {
  warrantyId: number
  warrantyType: string
  applicationFee: number
  countryId: number
  termsOfService: ITermsOfServiceRequest
}

export interface IWarrantyResponse {
  archived?: Date
  warrantyId: number
  warrantyType: string
  applicationFee: number
  country?: ICountryResponse
  termsOfService?: ITermsOfServiceResponse
}
