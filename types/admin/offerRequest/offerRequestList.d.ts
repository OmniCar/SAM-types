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
  | 'serialNumber'
  | 'serialNumber2'
  | 'itemNumber'
  | 'itemNumber2'
  | 'name'
  | 'email'
  | 'phone'
  | 'offerCreationDate'
  | 'state'
