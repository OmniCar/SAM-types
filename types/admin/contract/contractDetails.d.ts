import { IContactPersonResponse } from './../../contactPerson'
import { IContractResponse } from './../../contract/contract'
import { IIncludedContractOption } from './../../includedContractOption'
import { PaymentGateway } from './../../payment'
import { PriceSpecification } from './../../priceSpecification'
import { ServiceContractFlag, ContractType } from './../../admin/contractCreation'

export interface IContractDetailsRecord {
  serviceContractId?: number // Note: Do not expose this id for non-Devs/normal users, use the pretty-id for those. For debugging purposes, etc.
  contractPdfUrl: string
  duration: number // Duration [months].
  startMileage: number // Current meter/odometer-reading [km].
  startHours: number
  startServices: number
  mileage: number // Allowed mileage/distance [km] to drive during contract duration [months].
  endMileage: number // End-mileage [km] at end of duration [months].
  maxEndMileage?: number // Absolute maximum end-mileage [km] for product - Hard mileage cap/limit.
  startCondition?: { value?: number; condition?: string }
  expirationDate: Date | string
  extendedFrom: IContractResponse | null
  includedOptions: IIncludedContractOption[] | null
  durationValues: { duration: number, selectedValue: number, valueType: 'Hours' | 'Services' | 'Mileage'}
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
  forProduct: boolean
  serviceVariantId: string
  flags: ServiceContractFlag[]
  stripeCustomerLink: string | null
  stripeSubscriptionLink: string | null
  customTerms?: string
  adjustedFrom?: string
  createdByProvider?: string
  provider?: string
}

export interface IAdminCustomTermsRecord {
  customTerms: string
}
