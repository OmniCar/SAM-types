import { IContactPersonRequest } from '../contactPerson'

export interface IWebcalcOfferRequestRequest {
  contactPerson: IContactPersonRequest
  requestPrice: number
  vehicle: {
    brandName?: string
    modelName?: string
    fuelTypeName?: string
    vin?: string
    registrationNumber?: string
    dateVehicleFirstRegistered?: string
  }
  duration?: number
  mileage?: number
  contractTemplateId?: number
  requestText: string
}
