import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'
import { ServiceContractFlag, ContractType, ContractValueType } from './../../admin/contractCreation'
import { PriceSource } from './../../contractTemplate'

export interface IContractDetailsRecord {
  serviceContractId?: number // Note: Do not expose this id for non-Devs/normal users, use the pretty-id for those. For debugging purposes, etc.
  contractPdfUrl: string
  duration: number // Duration [months].
  startMileage?: number // Current meter/odometer-reading [km].
  mileage: number // Allowed mileage/distance [km] to drive during contract duration [months].
  startValue?: number
  startValueType: ContractValueType
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
  termsOfTradePdfUrl: string
  totalPrice: PriceSpecification
  contractType: ContractType
  contractTemplateId: null | number
  contractName: string // Contract (template) name.
  priceSource: null | PriceSource
  contractTemplateDescription: string
  contractTemplateMinPaymentsCount: number | null
  contractTemplateIsArchived: boolean
  isProduct: boolean
  serviceVariantId: string
  flags: ServiceContractFlag[]
  stripeCustomerLink: string | null
  stripeSubscriptionLink: string | null
  customTerms?: string
  adjustedFrom?: string
  adjustedTo?: string
  createdByProvider?: string
  provider?: string
  settledUnits?: number | null
  overdrivenCharge?: number
  underdrivenCharge?: number
  calculationMethod?: number
  overHoursCharge?: number
  underHoursCharge?: number
  overServicesCharge?: number
  underServicesCharge?: number
  warrantyReference?: string
}

export interface IAdminCustomTermsRecord {
  customTerms: string
}

export interface IUnitsListResponse {
  units: number
  date: Date | string
}
