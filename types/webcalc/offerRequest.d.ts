import { IContactPersonRequest } from '../contactPerson'

export interface IWebcalcOfferRequestRequest {
  contactPerson: IContactPersonRequest
  requestPrice: number
  regNr: string
  requestText: string
}
