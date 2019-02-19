import { IContactPersonResponse, OfferRequestState, PriceSpecification } from '../..'

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

export interface IOfferRequestTransitionRecord {
  responseText: string
  serviceContractId?: number
  price?: number
}