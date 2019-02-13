import { IContactPersonResponse, PriceSpecification } from '../..'

export enum OfferRequestState {
  Pending = 100,
  Approved = 200,
  Rejected = 300,
  Expired = 400,
}

export interface IOfferRequestRecord {
  offerRequestId: number
  contactPerson: IContactPersonResponse
  requestPrice: PriceSpecification
  regNr: string
  state: OfferRequestState
  stateChanged: Date | string
  requestText: string
  responseText: string
  nrAttachments: number
}
