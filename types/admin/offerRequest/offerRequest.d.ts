import {
  IContactPersonResponse,
  IContractTemplateResponse,
  OfferRequestState,
  PriceSpecification,
  Vehicle,
} from '../..'

export interface IOfferRequestRequest {
  offerRequestId: number
  prettyIdentifier: string
  contactPerson: IContactPersonResponse
  requestPrice: PriceSpecification
  vehicleId?: number
  duration?: number
  mileage?: number
  contractTemplateId?: number
  state: OfferRequestState
  stateChanged: Date | string
  requestText: string
  responseText: string
  nrAttachments: number
}

export interface IOfferRequestResponse {
  offerRequestId: number
  prettyIdentifier: string
  contactPerson: IContactPersonResponse
  requestPrice: PriceSpecification
  vehicle?: Vehicle
  duration?: number
  mileage?: number
  contractTemplate?: IContractTemplateResponse
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

export interface IExtendedOfferRequestRecord extends IOfferRequestResponse {
  attachments: IFileAttachment[]
}

export interface IOfferRequestTransitionRecord {
  responseText: string
  serviceContractId?: number
  price?: number
}

export interface IOfferRequestCount {
  latestPrettyIndentifier?: string
  offerRequestCount?: number
}
