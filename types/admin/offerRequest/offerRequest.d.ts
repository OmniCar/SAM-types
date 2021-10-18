import { IContactPersonResponse, IContractTemplateResponse, OfferRequestState, PriceSpecification } from '../..'

export interface IOfferRequestResponse {
  offerRequestId: number
  prettyIdentifier: string
  contactPerson: IContactPersonResponse
  requestPrice: PriceSpecification
  vehicle: {
    brandName?: string
    modelName?: string
    fuelTypeName?: string
    vin?: string
    registrationNumber?: string
    dateProductFirstRegistered?: string
  }
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

export interface IExtendedOfferRequestResponse extends IOfferRequestResponse {
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
