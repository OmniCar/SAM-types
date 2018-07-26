import { IQueryParams } from './../../queryParams'
import { PriceSpecification } from './../../priceSpecification'
import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IContractOptionResponse } from './../../contractOption'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'

export interface IContractDetailsRecord {
  type: string
  duration: number | string
  mileage: number | string
  startDate: Date | string
  expirationDate: Date | string
  totalPrice: PriceSpecification
  monthlyPrice: PriceSpecification
  providerShare: PriceSpecification
  seller?: IContactPersonResponse
  endMileage: number
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
  prettyIdentifierShort: string
  termsPdfUrl: string
  contractPdfUrl: string
  paymentMethod: PaymentGateway
}
