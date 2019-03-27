import { OfferRequestState } from '../..'

export interface IOfferRequestListRecord {
  prettyIdentifier: string
  registrationNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  offerCreationDate: Date | string
  state: OfferRequestState
}

export type OfferRequestListOrderByType =
  | 'prettyIdentifier'
  | 'registrationNumber'
  | 'name'
  | 'email'
  | 'phone'
  | 'offerCreationDate'
  | 'state'
