import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'
import { ServiceContractFlag, ContractType } from './../../admin/contractCreation'

export interface IContractDetailsRecord {
  contractPdfUrl: string
  duration: number
  endMileage: number
  expirationDate: Date | string
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
  mileage: number
  monthlyTemplatePrice: PriceSpecification
  monthlyPrice: PriceSpecification
  paymentMethod: PaymentGateway
  prettyIdentifierShort: string
  prettyIdentifier: string
  providerPayments: number
  providerShare: PriceSpecification
  reference: string
  seller?: IContactPersonResponse
  startDate: Date | string
  startMileage: number
  termsPdfUrl: string
  totalPrice: PriceSpecification
  contractType: ContractType
  contractTemplateId: number
  contractTemplateName: string
  contractTemplateDescription: string
  contractTemplateIsArchived: boolean
  flags: ServiceContractFlag[]
  customTerms?: string
  adjustedFrom?: string
  settledMileage?: number | null
  overDrivenCharge?: number
  underDrivenCharge?: number
  calculationMethod?: number
}

export interface IAdminCustomTermsRecord {
  customTerms: string
}

export interface IMileageListResponse {
  mileage: number
  date: Date | string
}
