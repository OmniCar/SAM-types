import { IContactPersonResponse, OfferRequestState, PriceSpecification } from '../..'

export interface IOfferRequestRecord {
  offerRequestId: number
  prettyIdentifier: string
  contactPerson: IContactPersonResponse
  requestPrice: PriceSpecification
  regNr: string
  state: OfferRequestState
  stateChanged: Date | string
  requestText: string
  responseText: string
  nrAttachments: number
}

export interface IFileAttachment {
  filename: string
  location: string
  mimeType?: string
}

export interface IExtendedOfferRequestRecord extends IOfferRequestRecord {
  attachments: IFileAttachment[]
}

export interface IOfferRequestTransitionRecord {
  responseText: string
  serviceContractId?: number
  price?: number
}

export interface IOfferRequestCount {
  latestPrettyIndentifier?: string
  offerRequestCount: number
}
