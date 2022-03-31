import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'
import { ServiceContractFlag, ContractType, ContractValueType } from './../../admin/contractCreation'

export interface IContractDetailsRecord {
  serviceContractId?: number // Note: Do not expose this id for non-Devs/normal users, use the pretty-id for those. For debugging purposes, etc.
  contractPdfUrl: string
  duration: number // Duration [months].
  startMileage?: number // Current meter/odometer-reading [km].
  mileage: number // Allowed mileage/distance [km] to drive during contract duration [months].
  startValue?: number
  endValue?: number
  maxEndValue?: number
  endMileage: number // End-mileage [km] at end of duration [months].
  maxEndMileage?: number // Absolute maximum end-mileage [km] for product - Hard mileage cap/limit.
  expirationDate: Date | string
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
  value?: number
  valueType: ContractValueType
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
  termsPdfUrl: string
  totalPrice: PriceSpecification
  contractType: ContractType
  contractTemplateId: number
  contractTemplateName: string
  contractTemplateDescription: string
  contractTemplateIsArchived: boolean
  isProduct: boolean
  serviceVariantId: string
  flags: ServiceContractFlag[]
  stripeCustomerLink: string | null
  stripeSubscriptionLink: string | null
  customTerms?: string
  adjustedFrom?: string
  createdByProvider?: string
  provider?: string
  settledMileage?: number | null
  overdrivenCharge?: number
  underdrivenCharge?: number
  calculationMethod?: number
}

export interface IAdminCustomTermsRecord {
  customTerms: string
}

export interface IMileageListResponse {
  mileage: number
  date: Date | string
}
