import { ICountryRequest, ICountryResponse } from "./country";
import { ITermsOfServiceRequest, ITermsOfServiceResponse } from "./termsOfService";



export interface IWarrantyRequest {
     warrantyId?: number
     warrantyType: string
     applicationFee : number
     countryId: number
     termsOfService: ITermsOfServiceRequest
}

export interface IWarrantyResponse {
    warrantyId: number
    warrantyType: string
    archived: Date
    applicationFee : number
    country: ICountryResponse
    termsOfService: ITermsOfServiceResponse
}
