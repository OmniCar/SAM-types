import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'

export interface IContractDetailsRecord {
  contractPdfUrl: string
  duration: number
  endMileage: number
  expirationDate: Date | string
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
  mileage: number
  monthlyPrice: PriceSpecification
  paymentMethod: PaymentGateway
  prettyIdentifierShort: string
  prettyIdentifier: string
  providerShare: PriceSpecification
  reference: string
  seller?: IContactPersonResponse
  startDate: Date | string
  startMileage: number
  termsPdfUrl: string
  totalPrice: PriceSpecification
  type: string
  customTerms?: string
}

export interface IAdminCustomTermsRecord {
  customTerms: string
}
