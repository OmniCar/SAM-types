import { OfferRequestState } from '../..'

export interface IOfferRequestListRecord {
  prettyIdentifier: string
  registrationNumber: string
  itemNumber: string
  serialNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  offerCreationDate: Date | string
  state: OfferRequestState
}

export type OfferRequestListOrderByType =
  | 'prettyIdentifier'
  | 'registrationNumber'
  | 'itemNumber'
  | 'serialNumber'
  | 'name'
  | 'email'
  | 'phone'
  | 'offerCreationDate'
  | 'state'
